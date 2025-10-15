
import React from 'react';

export const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-gray-800 rounded-lg p-8 mb-8">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 mb-6">
        Features & Benefits
      </h2>
      <div className="space-y-8">
        <p className="text-lg text-gray-300 text-center">
          Discover why thousands of professionals choose our platform to transform their presentations into cinematic experiences.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-6">
            <div className="text-3xl mb-3">🎬</div>
            <h3 className="text-xl font-semibold text-blue-300 mb-3">Hollywood-Style Effects</h3>
            <p className="text-gray-300">
              Choose from Action, Drama, Sci-Fi, Thriller, and more genres. Each style applies unique visual effects, 
              transitions, and cinematic techniques to make your content unforgettable.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-teal-900 to-teal-800 rounded-lg p-6">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-xl font-semibold text-teal-300 mb-3">Lightning-Fast Processing</h3>
            <p className="text-gray-300">
              Advanced AI algorithms process your slides in minutes, not hours. Get professional-quality videos 
              faster than traditional video editing software.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-6">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-xl font-semibold text-purple-300 mb-3">Smart Content Recognition</h3>
            <p className="text-gray-300">
              AI understands your content context – whether it's financial data, product features, or creative concepts – 
              and adapts the video style accordingly.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-6">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="text-xl font-semibold text-green-300 mb-3">Multiple Format Support</h3>
            <p className="text-gray-300">
              Generate videos in various aspect ratios (16:9, 4:3, 1:1, 9:16) and resolutions (720p, 1080p, 4K) 
              perfect for any platform or presentation need.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg p-6">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="text-xl font-semibold text-red-300 mb-3">Enterprise-Grade Security</h3>
            <p className="text-gray-300">
              Your presentations are processed securely with end-to-end encryption. Files are automatically 
              deleted after processing, ensuring complete privacy.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-900 to-yellow-800 rounded-lg p-6">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="text-xl font-semibold text-yellow-300 mb-3">Customizable Creativity</h3>
            <p className="text-gray-300">
              Add custom keywords, select specific images, and fine-tune the AI's creative direction 
              to match your brand and vision perfectly.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 mb-4">
            Why Our Users Love Us
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400">10x</div>
              <p className="text-gray-300">Faster than traditional video editing</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400">95%</div>
              <p className="text-gray-300">User satisfaction rate</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">50MB</div>
              <p className="text-gray-300">Maximum file size supported</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
