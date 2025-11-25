'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { DEFAULT_DONATION, DONATION_AMOUNTS } from '@/lib/stripe';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

interface DonateButtonProps {
  isVisible: boolean;
}

export default function DonateButton({ isVisible }: DonateButtonProps) {
  const [selectedAmount, setSelectedAmount] = useState(DEFAULT_DONATION);
  const [customAmount, setCustomAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showCustom, setShowCustom] = useState(false);

  if (!isVisible) return null;

  const handleDonate = async () => {
    setIsLoading(true);

    try {
      const amount = showCustom ? parseFloat(customAmount) : selectedAmount;

      if (isNaN(amount) || amount < 1) {
        alert('Please enter a valid donation amount');
        setIsLoading(false);
        return;
      }

      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      });

      const { sessionId } = await response.json();
      const stripe = await stripePromise;

      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId });
        if (error) {
          console.error('Stripe error:', error);
          alert('Something went wrong. Please try again.');
        }
      }
    } catch (error) {
      console.error('Donation error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-fade-in px-6 py-8">
      <div className="max-w-lg mx-auto">
        <h3 className="text-center text-xl md:text-2xl font-bold text-shabbat-deepBlue mb-6">
          Tonight, share your light with a neighbor in need
        </h3>

        {/* Preset amounts */}
        {!showCustom && (
          <div className="grid grid-cols-2 gap-4 mb-6">
            {Object.entries(DONATION_AMOUNTS).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setSelectedAmount(value)}
                className={`py-4 px-6 rounded-xl font-bold text-lg transition-all ${
                  selectedAmount === value
                    ? 'bg-shabbat-gold text-shabbat-deepBlue shadow-lg scale-105'
                    : 'bg-white text-shabbat-softBlue border-2 border-shabbat-gold/30 hover:border-shabbat-gold'
                }`}
              >
                ${value}
                {key === 'medium' && <span className="block text-xs font-normal">Chai</span>}
                {key === 'chai' && <span className="block text-xs font-normal">Double Chai</span>}
              </button>
            ))}
          </div>
        )}

        {/* Custom amount */}
        {showCustom && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-shabbat-deepBlue mb-2">
              Enter your amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-shabbat-softBlue">
                $
              </span>
              <input
                type="number"
                min="1"
                step="1"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder="36"
                className="w-full pl-10 pr-4 py-4 text-2xl rounded-xl border-2 border-shabbat-gold/30 focus:border-shabbat-gold focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* Toggle custom amount */}
        <button
          onClick={() => setShowCustom(!showCustom)}
          className="w-full mb-6 text-sm text-shabbat-softBlue hover:text-shabbat-deepBlue underline"
        >
          {showCustom ? 'Choose a preset amount' : 'Enter a different amount'}
        </button>

        {/* Main donate button */}
        <button
          onClick={handleDonate}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-shabbat-flame to-shabbat-gold text-white font-bold text-xl py-6 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Processing...
            </span>
          ) : (
            `Give ${showCustom && customAmount ? `$${customAmount}` : `$${selectedAmount}`} for Shabbat`
          )}
        </button>

        <p className="text-center text-sm text-shabbat-softBlue mt-6 leading-relaxed">
          Every dollar becomes supermarket gift cards and direct chessed through Yad Chessed.
        </p>
      </div>
    </div>
  );
}
