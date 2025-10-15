import React from 'react';

interface UploadLimitBannerProps {
  remainingUploads: number;
  isPremium: boolean;
  onShowPricing: () => void;
}

export const UploadLimitBanner: React.FC<UploadLimitBannerProps> = ({
  remainingUploads,
  isPremium,
  onShowPricing,
}) => {
  if (isPremium) {
    return (
      <div className="bg-gradient-to-r from-purple-900 to-pink-900 border border-purple-500 rounded-lg p-4 mb-6 animate-fade-in">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-purple-500 rounded-full p-2">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-white">Premium Account</p>
              <p className="text-sm text-purple-200">You have unlimited uploads!</p>
            </div>
          </div>
          <div className="bg-purple-500 text-white px-4 py-2 rounded-full font-bold text-sm">
            ∞ UNLIMITED
          </div>
        </div>
      </div>
    );
  }

  if (remainingUploads === 0) {
    return (
      <div className="bg-gradient-to-r from-red-900 to-orange-900 border border-red-500 rounded-lg p-4 mb-6 animate-fade-in">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-red-500 rounded-full p-2">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-white">Upload Limit Reached</p>
              <p className="text-sm text-orange-200">Upgrade to Premium for unlimited conversions</p>
            </div>
          </div>
          <button
            onClick={onShowPricing}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-lg font-bold transition-all transform hover:scale-105"
          >
            Upgrade Now
          </button>
        </div>
      </div>
    );
  }

  const percentage = (remainingUploads / 3) * 100;
  const isLow = remainingUploads === 1;

  return (
    <div className={`border rounded-lg p-4 mb-6 animate-fade-in ${
      isLow 
        ? 'bg-gradient-to-r from-orange-900 to-yellow-900 border-orange-500' 
        : 'bg-gradient-to-r from-blue-900 to-purple-900 border-blue-500'
    }`}>
      <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
        <div className="flex items-center gap-3">
          <div className={`rounded-full p-2 ${isLow ? 'bg-orange-500' : 'bg-blue-500'}`}>
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-white">Free Account</p>
            <p className="text-sm text-gray-200">
              {remainingUploads} upload{remainingUploads !== 1 ? 's' : ''} remaining
            </p>
          </div>
        </div>
        <button
          onClick={onShowPricing}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 text-sm"
        >
          Get Unlimited
        </button>
      </div>
      
      {/* Progress bar */}
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className={`h-2 rounded-full transition-all ${
            isLow ? 'bg-orange-500' : 'bg-blue-500'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
