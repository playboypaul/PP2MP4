
import React from 'react';

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="bg-gray-800 rounded-lg p-8 mb-8">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 mb-6">
        How It Works
      </h2>
      <div className="space-y-8">
        <p className="text-lg text-gray-300 text-center">
          Transform your presentations in just 4 simple steps – it's like having a Hollywood production team at your fingertips!
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-semibold text-blue-400 mb-2">Upload Your PowerPoint</h3>
            <p className="text-gray-400">
              Simply drag and drop your .pptx file (up to 50MB). Our system instantly analyzes your slides, 
              extracting text, images, and layout information.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-semibold text-teal-400 mb-2">Choose Your Style</h3>
            <p className="text-gray-400">
              Select from various Hollywood genres – Action, Drama, Sci-Fi, Corporate, or Custom. 
              Pick your preferred video quality, aspect ratio, and frame rate.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-semibold text-purple-400 mb-2">Review & Customize</h3>
            <p className="text-gray-400">
              Preview your slides and select preferred images for each slide. Add custom keywords 
              to fine-tune the AI's creative direction.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">4</span>
            </div>
            <h3 className="text-xl font-semibold text-green-400 mb-2">Download Your Videos</h3>
            <p className="text-gray-400">
              Watch as AI generates stunning videos for each slide. Download individual clips 
              or combine them into a complete presentation video.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">🎭 The Magic Behind the Scenes</h3>
          <p className="text-gray-300 mb-4">
            Our AI doesn't just convert slides – it reimagines them. Here's what happens during processing:
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-gray-800 rounded p-3">
              <strong className="text-blue-400">Content Analysis:</strong> AI understands your slide's message, tone, and context
            </div>
            <div className="bg-gray-800 rounded p-3">
              <strong className="text-teal-400">Visual Enhancement:</strong> Images are optimized and enhanced for video format
            </div>
            <div className="bg-gray-800 rounded p-3">
              <strong className="text-purple-400">Cinematic Generation:</strong> AI creates dynamic video sequences with professional transitions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
