
import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="bg-gray-800 rounded-lg p-8 mb-8">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 mb-6">
        About Our Service
      </h2>
      <div className="space-y-6 text-gray-300">
        <p className="text-lg leading-relaxed">
          Welcome to the future of presentation transformation! Our PowerPoint to MP4 Converter is a revolutionary 
          AI-powered platform that breathes life into your static presentations, turning them into captivating 
          Hollywood-style video experiences that engage, inspire, and leave lasting impressions.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-3">🎬 Hollywood Magic Meets Business</h3>
            <p>
              Gone are the days of boring, static presentations. Our advanced AI technology analyzes your PowerPoint 
              content and transforms it into dynamic video sequences with cinematic flair. Whether you're presenting 
              quarterly reports or product launches, every slide becomes a scene worthy of the big screen.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-3">🚀 Cutting-Edge AI Technology</h3>
            <p>
              Powered by Google's Gemini AI, our platform understands context, tone, and visual elements to create 
              videos that perfectly match your content's intent. From dramatic action sequences to elegant corporate 
              presentations, the AI adapts to deliver exactly what your message needs.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-teal-300 mb-3">Why Choose Our Platform?</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• <strong>Professional Quality:</strong> Studio-grade video output with multiple resolution options</li>
            <li>• <strong>Time-Saving:</strong> Convert entire presentations in minutes, not hours</li>
            <li>• <strong>Customizable Styles:</strong> Choose from various Hollywood genres and visual themes</li>
            <li>• <strong>User-Friendly:</strong> Simple upload, review, and download process</li>
            <li>• <strong>Secure & Private:</strong> Your content is processed securely and never stored permanently</li>
          </ul>
        </div>
        
        <p className="text-center text-gray-400 italic">
          "Transform your presentations from mundane to magnificent – because every story deserves to be told with style."
        </p>
      </div>
    </section>
  );
};
