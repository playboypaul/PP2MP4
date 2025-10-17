
import React, { useState, useCallback, useEffect } from 'react';
import { FileUpload } from './components/FileUpload';
import { LoadingIndicator } from './components/LoadingIndicator';
import { ResultsDisplay } from './components/ResultsDisplay';
import { extractSlidesFromPptx } from './services/pptxParser';
import { initializeGemini, generateVideoFromSlide } from './services/geminiService';
import { type SlideData, type VideoResult, type VideoStyle, type VideoQuality, type HollywoodGenre, type AspectRatio, type FrameRate } from './types';
import { Header } from './components/Header';
import { ErrorDisplay } from './components/ErrorDisplay';
import { SlideReview } from './components/SlideReview';
import { BannerAd, FooterAd } from './components/AdSense';
import { AboutSection } from './components/AboutSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { FeaturesSection } from './components/FeaturesSection';
import { FAQSection } from './components/FAQSection';
import { TipsSection } from './components/TipsSection';
import { Footer } from './components/Footer';
import { TermsOfService } from './pages/TermsOfService';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

enum AppState {
  IDLE,
  REVIEWING_SLIDES,
  PROCESSING,
  SUCCESS,
  ERROR,
}

enum PageState {
  HOME,
  TERMS,
  PRIVACY,
}

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.IDLE);
  const [currentPage, setCurrentPage] = useState<PageState>(PageState.HOME);
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
  const [isApiKeyValid, setIsApiKeyValid] = useState<boolean>(false);

  useEffect(() => {
    const key = import.meta.env.VITE_GEMINI_API_KEY;
    if (key && key !== 'YOUR_API_KEY_HERE') {
      initializeGemini(key);
      setIsApiKeyValid(true);
    }
  }, []);

  const handleInvalidFile = () => {
    setErrorMessage('Invalid file type. Please upload a valid .pptx file.');
    setAppState(AppState.ERROR);
  };

  const handleFileUpload = useCallback(async (file: File) => {
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
          <>
            <FileUpload
              onFileProcess={handleFileUpload}
              onInvalidFile={handleInvalidFile}
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
              disabled={!isApiKeyValid}
            />
          </>
        );
    }
  };

  // Handle routing
  if (currentPage === PageState.TERMS) {
    return <TermsOfService onNavigateHome={() => setCurrentPage(PageState.HOME)} />;
  }
  
  if (currentPage === PageState.PRIVACY) {
    return <PrivacyPolicy onNavigateHome={() => setCurrentPage(PageState.HOME)} />;
  }

  // Add navigation handler
  const handleNavigation = (page: PageState) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen text-white p-4 sm:p-8 flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto">
        <Header />
        
        {/* Top Banner Ad */}
        <div className="mt-8 mb-4">
          <BannerAd />
        </div>
        
        <main className="mt-8 flex justify-center">
          <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl">
            {/* Main Content */}
            <div className="flex-1">
              {renderContent()}
            </div>
            
            {/* Sidebar with Ad - Only show on larger screens and when not processing */}
            {appState !== AppState.PROCESSING && (
              <div className="hidden lg:block lg:w-80">
                <div className="sticky top-8">
                  <div className="purple-card rounded-lg p-4 mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-200">Quick Navigation</h3>
                    <ul className="text-sm text-gray-400 space-y-2">
                      <li>• <a href="#about" className="hover:text-purple-light transition-colors">About Our Service</a></li>
                      <li>• <a href="#how-it-works" className="hover:text-purple-light transition-colors">How It Works</a></li>
                      <li>• <a href="#features" className="hover:text-purple-light transition-colors">Features & Benefits</a></li>
                      <li>• <a href="#faq" className="hover:text-purple-light transition-colors">FAQ</a></li>
                      <li>• <a href="#tips" className="hover:text-purple-light transition-colors">Tips & Best Practices</a></li>
                    </ul>
                  </div>
                  <div className="mb-6">
                    <div className="adsense-placeholder adsense-sidebar">
                      <ins 
                        className="adsbygoogle"
                        style={{ display: 'block', width: '300px', height: '250px' }}
                        data-ad-client="ca-pub-8306818191166444"
                        data-ad-slot="auto"
                        data-ad-format="rectangle"
                        data-full-width-responsive="true"
                      />
                      <span className="text-xs opacity-60">Sidebar Advertisement</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
        
        {/* Content Sections - Only show when in IDLE state */}
        {appState === AppState.IDLE && (
          <div className="mt-16 space-y-8">
            <div id="about">
              <AboutSection />
            </div>
            <div id="how-it-works">
              <HowItWorksSection />
            </div>
            <div id="features">
              <FeaturesSection />
            </div>
            <div id="faq">
              <FAQSection />
            </div>
            <div id="tips">
              <TipsSection />
            </div>
          </div>
        )}
        
        {/* Footer Ad */}
        <footer className="mt-16 mb-8">
          <FooterAd />
        </footer>
        
        {/* Enhanced Footer */}
        <Footer onNavigate={(page) => {
          if (page === 'terms') setCurrentPage(PageState.TERMS);
          if (page === 'privacy') setCurrentPage(PageState.PRIVACY);
        }} />
      </div>
    </div>
  );
};

export default App;
