import React, { useState, useCallback, useEffect } from 'react';
import { FileUpload } from './components/FileUpload';
import { LoadingIndicator } from './components/LoadingIndicator';
import { ResultsDisplay } from './components/ResultsDisplay';
import { extractSlidesFromPptx } from './services/pptxParser';
import { generateVideoFromSlide } from './services/geminiService';
import { type SlideData, type VideoResult, type VideoStyle, type VideoQuality, type HollywoodGenre, type AspectRatio, type FrameRate } from './types';
import { Header } from './components/Header';
import { ErrorDisplay } from './components/ErrorDisplay';
import { SlideReview } from './components/SlideReview';
import { Footer } from './components/Footer';
import { PricingModal } from './components/PricingModal';
import { UploadLimitBanner } from './components/UploadLimitBanner';
import { 
  canUpload, 
  getRemainingUploads, 
  incrementUploadCount, 
  isPremiumUser 
} from './services/uploadTracking';
import { redirectToCheckout } from './services/stripeService';

enum AppState {
  IDLE,
  REVIEWING_SLIDES,
  PROCESSING,
  SUCCESS,
  ERROR,
}

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.IDLE);
  const [videoResults, setVideoResults] = useState<VideoResult[]>([]);
  const [parsedSlides, setParsedSlides] = useState<SlideData[]>([]);
  const [imageSelections, setImageSelections] = useState<Record<number, number>>({});
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [processingMessage, setProcessingMessage] = useState<string>('');
  const [videoStyle, setVideoStyle] = useState<VideoStyle>('Default');
  const [videoQuality, setVideoQuality] = useState<VideoQuality>('720p');
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>('16:9');
  const [frameRate, setFrameRate] = useState<FrameRate>('30fps');
  const [hollywoodGenre, setHollywoodGenre] = useState<HollywoodGenre>('None');
  const [customKeywords, setCustomKeywords] = useState<string>('');
  
  // Upload tracking and pricing
  const [showPricingModal, setShowPricingModal] = useState<boolean>(false);
  const [remainingUploads, setRemainingUploads] = useState<number>(0);
  const [isPremium, setIsPremium] = useState<boolean>(false);

  // Update upload status on mount and when modal closes
  useEffect(() => {
    updateUploadStatus();
  }, []);

  const updateUploadStatus = () => {
    setRemainingUploads(getRemainingUploads());
    setIsPremium(isPremiumUser());
  };


  const handleFileUpload = useCallback(async (file: File) => {
    // Check upload limit
    if (!canUpload()) {
      setShowPricingModal(true);
      return;
    }

    setAppState(AppState.PROCESSING);
    setProcessingMessage('Parsing your presentation...');
    setErrorMessage('');
    setVideoResults([]);
    setParsedSlides([]);
    setImageSelections({});

    try {
      const slides = await extractSlidesFromPptx(file);
      if (slides.length === 0) {
        throw new Error('No content could be extracted from the presentation.');
      }
      setParsedSlides(slides);

      const initialSelections: Record<number, number> = {};
       slides.forEach(slide => {
          if (slide.imageBases64.length > 0) {
              initialSelections[slide.slideNumber] = 0;
          }
      });
      setImageSelections(initialSelections);

      // Increment upload count after successful parse
      incrementUploadCount();
      updateUploadStatus();

      setAppState(AppState.REVIEWING_SLIDES);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An unknown error occurred.';
      console.error("Parsing failed:", message);
      setErrorMessage(message);
      setAppState(AppState.ERROR);
    } finally {
      setProcessingMessage('');
    }
  }, []);

  const handleStartGeneration = useCallback(async () => {
    setAppState(AppState.PROCESSING);
    setErrorMessage('');
    setVideoResults([]);

    try {
      const results: VideoResult[] = [];
      for (const slide of parsedSlides) {
        setProcessingMessage(`Generating video for slide ${slide.slideNumber} of ${parsedSlides.length}...`);
        const selectedImageIndex = imageSelections[slide.slideNumber];

        const { videoUri, thumbnailUri } = await generateVideoFromSlide(
            slide, 
            videoStyle, 
            videoQuality, 
            aspectRatio,
            frameRate,
            hollywoodGenre, 
            customKeywords,
            selectedImageIndex
        );
        
        const newResult: VideoResult = {
          slideNumber: slide.slideNumber,
          videoUri,
          thumbnailUri,
          text: slide.text,
        };
        results.push(newResult);
        setVideoResults([...results]); 
      }
      setAppState(AppState.SUCCESS);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An unknown error occurred.';
      console.error("Processing failed:", message);
      setErrorMessage(message);
      setAppState(AppState.ERROR);
    } finally {
      setProcessingMessage('');
    }
  }, [parsedSlides, imageSelections, videoStyle, videoQuality, aspectRatio, frameRate, hollywoodGenre, customKeywords]);

  const handleSelectionChange = (slideNumber: number, imageIndex: number) => {
    setImageSelections(prev => ({ ...prev, [slideNumber]: imageIndex }));
  };

  const handleReset = () => {
    setAppState(AppState.IDLE);
    setVideoResults([]);
    setErrorMessage('');
    setParsedSlides([]);
    setImageSelections({});
  };

  const handleShowPricing = () => {
    setShowPricingModal(true);
  };

  const handleClosePricing = () => {
    setShowPricingModal(false);
    updateUploadStatus();
  };

  const handleUpgrade = async () => {
    try {
      await redirectToCheckout();
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to start checkout process. Please try again.');
    }
  };

  const renderContent = () => {
    switch (appState) {
      case AppState.PROCESSING:
        return <LoadingIndicator message={processingMessage} />;
      case AppState.REVIEWING_SLIDES:
        return <SlideReview
          slides={parsedSlides}
          selections={imageSelections}
          onSelectionChange={handleSelectionChange}
          onGenerate={handleStartGeneration}
          onCancel={handleReset}
        />;
      case AppState.SUCCESS:
        return <ResultsDisplay results={videoResults} onReset={handleReset} />;
      case AppState.ERROR:
        return <ErrorDisplay message={errorMessage} onReset={handleReset} />;
      case AppState.IDLE:
      default:
        return (
          <FileUpload
            onFileProcess={handleFileUpload}
            videoStyle={videoStyle}
            onStyleChange={setVideoStyle}
            videoQuality={videoQuality}
            onQualityChange={setVideoQuality}
            aspectRatio={aspectRatio}
            onAspectRatioChange={setAspectRatio}
            frameRate={frameRate}
            onFrameRateChange={setFrameRate}
            hollywoodGenre={hollywoodGenre}
            onGenreChange={setHollywoodGenre}
            customKeywords={customKeywords}
            onKeywordsChange={setCustomKeywords}
          />
        );
    }
  };

  return (
    <div className="min-h-screen text-white p-4 sm:p-8 flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col min-h-screen">
        <Header />
        
        {/* Upload Limit Banner */}
        <div className="mt-8">
          <UploadLimitBanner
            remainingUploads={remainingUploads}
            isPremium={isPremium}
            onShowPricing={handleShowPricing}
          />
        </div>

        <main className="mt-4 flex justify-center flex-grow">
          {renderContent()}
        </main>

        {/* Footer */}
        <Footer />

        {/* Pricing Modal */}
        <PricingModal
          isOpen={showPricingModal}
          onClose={handleClosePricing}
          onUpgrade={handleUpgrade}
          remainingUploads={remainingUploads}
          isPremium={isPremium}
        />
      </div>
    </div>
  );
};

export default App;