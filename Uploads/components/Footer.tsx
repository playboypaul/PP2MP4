import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 py-6 border-t border-gray-700">
      <div className="text-center">
        <p className="text-gray-400 text-sm">
          Powered by{' '}
          <a 
            href="https://token4rge.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold hover:from-purple-300 hover:to-pink-300 transition-all"
          >
            Token4rge
          </a>
        </p>
        <p className="text-gray-500 text-xs mt-2">
          © {new Date().getFullYear()} PowerPoint to MP4 Converter. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
