
import React from 'react';

export const TipsSection: React.FC = () => {
  return (
    <section className="bg-gray-800 rounded-lg p-8 mb-8">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 mb-6">
        Tips & Best Practices
      </h2>
      <div className="space-y-8">
        <p className="text-lg text-gray-300 text-center">
          Maximize the impact of your video presentations with these professional tips from our Hollywood-style AI conversion experts.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-300 mb-3 flex items-center">
                <span className="mr-2">📝</span> Content Optimization
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong>Keep text concise:</strong> Aim for 6-8 words per line for better video readability</li>
                <li>• <strong>Use high-contrast colors:</strong> Dark text on light backgrounds works best for video</li>
                <li>• <strong>Include descriptive titles:</strong> Help the AI understand your slide's purpose</li>
                <li>• <strong>Add speaker notes:</strong> Provide context for more accurate AI interpretation</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-teal-900 to-teal-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-teal-300 mb-3 flex items-center">
                <span className="mr-2">🖼️</span> Image Guidelines
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong>High resolution preferred:</strong> Use images at least 1920x1080 for best results</li>
                <li>• <strong>Avoid watermarked images:</strong> They may interfere with AI processing</li>
                <li>• <strong>Multiple image options:</strong> Include 2-3 relevant images per slide for variety</li>
                <li>• <strong>Consistent style:</strong> Use similar image styles throughout your presentation</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-900 to-purple-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-300 mb-3 flex items-center">
                <span className="mr-2">🎬</span> Hollywood Style Selection
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong>Action:</strong> Perfect for product launches, sports, or dynamic content</li>
                <li>• <strong>Drama:</strong> Ideal for storytelling, case studies, or emotional content</li>
                <li>• <strong>Sci-Fi:</strong> Great for technology, innovation, or futuristic themes</li>
                <li>• <strong>Corporate:</strong> Professional tone for business meetings and reports</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-green-900 to-green-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-300 mb-3 flex items-center">
                <span className="mr-2">⚙️</span> Technical Settings
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong>16:9 aspect ratio:</strong> Best for most presentations and screens</li>
                <li>• <strong>1080p resolution:</strong> Optimal balance of quality and file size</li>
                <li>• <strong>30fps frame rate:</strong> Smooth motion for professional presentations</li>
                <li>• <strong>Custom keywords:</strong> Add 3-5 relevant terms to guide AI creativity</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-yellow-900 to-orange-900 rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-yellow-300 mb-4 text-center">
            🏆 Pro Tips for Cinematic Results
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🎭</div>
              <h4 className="font-semibold text-yellow-400 mb-2">Tell a Story</h4>
              <p className="text-gray-300 text-sm">
                Structure your slides with a clear beginning, middle, and end. The AI creates better narratives with logical flow.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🎨</div>
              <h4 className="font-semibold text-yellow-400 mb-2">Visual Consistency</h4>
              <p className="text-gray-300 text-sm">
                Use consistent fonts, colors, and layouts. This helps the AI maintain visual coherence across all video clips.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">⏱️</div>
              <h4 className="font-semibold text-yellow-400 mb-2">Optimal Timing</h4>
              <p className="text-gray-300 text-sm">
                Aim for 10-15 slides maximum for best results. This ensures each slide gets proper attention and processing time.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-700 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-200 mb-3">Need Personalized Advice?</h3>
          <p className="text-gray-400 mb-4">
            Our team of presentation experts is available to help you create the most impactful video presentations.
          </p>
          <a 
            href="mailto:powerpoint2mp4@gmail.com?subject=Presentation Consultation Request" 
            className="inline-block bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
          >
            Get Expert Consultation
          </a>
        </div>
      </div>
    </section>
  );
};
