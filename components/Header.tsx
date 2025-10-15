
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-purple-gradient hover-purple-glow">
        PowerPoint to MP4 Converter
      </h1>
      <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
        Transform your boring PowerPoint presentations into Hollywood blockbuster-style videos! 
        Experience the magic of AI-powered video generation that turns static slides into cinematic masterpieces.
      </p>
      <div className="mt-6 text-sm text-gray-500">
        <p>✨ From Corporate Slides to Cinema Magic ✨</p>
        <p>Powered by Advanced AI • Professional Quality • Instant Results</p>
      </div>
    </header>
  );
};
