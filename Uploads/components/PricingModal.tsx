import React from 'react';
import { CheckCircleIcon, XCircleIcon } from './IconComponents';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpgrade: () => void;
  remainingUploads: number;
  isPremium: boolean;
}

export const PricingModal: React.FC<PricingModalProps> = ({
  isOpen,
  onClose,
  onUpgrade,
  remainingUploads,
  isPremium,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-2xl max-w-4xl w-full p-8 relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <XCircleIcon />
        </button>

        <h2 className="text-3xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Choose Your Plan
        </h2>
        <p className="text-center text-gray-400 mb-8">
          {isPremium 
            ? "You're on the Premium plan - enjoy unlimited uploads!" 
            : `You have ${remainingUploads} free upload${remainingUploads !== 1 ? 's' : ''} remaining`}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Free Tier */}
          <div className="bg-gray-700 rounded-xl p-6 border-2 border-gray-600">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">Free</h3>
              <div className="text-4xl font-bold text-white mb-2">$0</div>
              <p className="text-gray-400">Perfect for trying out</p>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">3 PowerPoint conversions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">All video styles & qualities</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Basic support</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircleIcon className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-500">Unlimited uploads</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircleIcon className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-500">Priority processing</span>
              </li>
            </ul>

            <button
              disabled={isPremium}
              className="w-full py-3 px-4 rounded-lg bg-gray-600 text-gray-400 cursor-not-allowed font-semibold"
            >
              Current Plan
            </button>
          </div>

          {/* Premium Tier */}
          <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-xl p-6 border-2 border-purple-400 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                BEST VALUE
              </span>
            </div>

            <div className="text-center mb-4 mt-2">
              <h3 className="text-2xl font-bold text-purple-300 mb-2">Premium</h3>
              <div className="text-4xl font-bold text-white mb-2">
                $19.99
                <span className="text-lg text-gray-300 font-normal">/lifetime</span>
              </div>
              <p className="text-purple-200">Unlimited conversions forever</p>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-white font-semibold">Unlimited PowerPoint conversions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-white">All video styles & qualities</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-white">Priority processing queue</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-white">Premium support</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-white">No watermarks</span>
              </li>
            </ul>

            <button
              onClick={onUpgrade}
              disabled={isPremium}
              className={`w-full py-3 px-4 rounded-lg font-bold text-lg transition-all ${
                isPremium
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transform hover:scale-105'
              }`}
            >
              {isPremium ? 'Current Plan' : 'Upgrade to Premium'}
            </button>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-400">
          <p>💳 Secure payment powered by Stripe</p>
          <p className="mt-1">🔒 One-time payment, no subscriptions</p>
        </div>
      </div>
    </div>
  );
};
