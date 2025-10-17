
import React from 'react';

interface FooterProps {
  onNavigate?: (page: 'terms' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="purple-card rounded-lg p-8 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-purple-light mb-4">PowerPoint to MP4</h3>
            <p className="text-gray-400 text-sm">
              Transform your presentations into Hollywood-style videos with AI-powered conversion technology.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-200 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-gray-400 hover:text-purple-light transition-colors">About</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-purple-light transition-colors">How It Works</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-purple-light transition-colors">Features</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-purple-light transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-200 mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate?.('terms')} 
                  className="text-gray-400 hover:text-purple-light transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('privacy')} 
                  className="text-gray-400 hover:text-purple-light transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li><a href="mailto:pp2mp4@gmail.com" className="text-gray-400 hover:text-purple-light transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-200 mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#tips" className="text-gray-400 hover:text-purple-light transition-colors">Tips & Best Practices</a></li>
              <li><a href="mailto:pp2mp4@gmail.com?subject=Technical Support" className="text-gray-400 hover:text-purple-light transition-colors">Technical Support</a></li>
              <li><a href="mailto:pp2mp4@gmail.com?subject=Feature Request" className="text-gray-400 hover:text-purple-light transition-colors">Feature Requests</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2025 PowerPoint to MP4 Converter. All rights reserved. 
            Transform your presentations into cinematic experiences.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Contact us: <a href="mailto:pp2mp4@gmail.com" className="text-purple-light hover:text-purple-lighter">pp2mp4@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
