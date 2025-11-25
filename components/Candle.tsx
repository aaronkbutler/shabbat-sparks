'use client';

import { useState } from 'react';

interface CandleProps {
  onLight: () => void;
  isLit: boolean;
}

// Single candle component
function SingleCandle({ isLit, index }: { isLit: boolean; index: number }) {
  return (
    <div className="relative">
      {/* Flame */}
      {isLit && (
        <div className="absolute -top-16 left-1/2 -translate-x-1/2">
          <div className="relative w-12 h-16">
            {/* Outer flame glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-shabbat-flame via-shabbat-gold to-transparent rounded-full blur-md animate-glow" />
            {/* Inner flame */}
            <div 
              className="absolute inset-2 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 rounded-full animate-flicker"
              style={{ animationDelay: `${index * 0.2}s` }}
            />
            {/* Flame tip */}
            <div 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-8 bg-gradient-to-t from-yellow-300 to-transparent rounded-full animate-flicker"
              style={{ animationDelay: `${index * 0.3}s` }}
            />
          </div>
        </div>
      )}

      {/* Candle body */}
      <div className="relative">
        {/* Candle glow when lit */}
        {isLit && (
          <div className="absolute inset-0 bg-shabbat-gold opacity-20 blur-xl rounded-lg" />
        )}
        
        {/* Candle */}
        <svg
          width="60"
          height="160"
          viewBox="0 0 80 200"
          className="drop-shadow-lg"
        >
          {/* Candle body */}
          <rect
            x="25"
            y="40"
            width="30"
            height="160"
            fill={isLit ? '#FFFACD' : '#F5F5DC'}
            stroke="#D4AF37"
            strokeWidth="1"
          />
          {/* Candle top */}
          <ellipse
            cx="40"
            cy="40"
            rx="15"
            ry="5"
            fill={isLit ? '#FFF8DC' : '#F0E68C'}
            stroke="#D4AF37"
            strokeWidth="1"
          />
          {/* Wick */}
          <line
            x1="40"
            y1="35"
            x2="40"
            y2="25"
            stroke="#333"
            strokeWidth="2"
          />
          {isLit && (
            <circle cx="40" cy="22" r="2" fill="#FF6347" className="animate-pulse" />
          )}
          {/* Candle drips when lit */}
          {isLit && (
            <>
              <path
                d="M 30 50 Q 28 70 30 90"
                fill="none"
                stroke="#FFF8DC"
                strokeWidth="2"
                opacity="0.6"
              />
              <path
                d="M 50 60 Q 52 80 50 100"
                fill="none"
                stroke="#FFF8DC"
                strokeWidth="2"
                opacity="0.6"
              />
            </>
          )}
        </svg>
      </div>
    </div>
  );
}

export default function Candle({ onLight, isLit }: CandleProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (!isLit) {
      setIsAnimating(true);
      setTimeout(() => {
        onLight();
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div
        onClick={handleClick}
        className={`relative cursor-pointer transition-transform ${
          isAnimating ? 'scale-110' : 'scale-100'
        } ${!isLit ? 'hover:scale-105' : ''}`}
      >
        {/* Two candles side by side */}
        <div className="flex gap-4 items-end">
          <SingleCandle isLit={isLit} index={0} />
          <SingleCandle isLit={isLit} index={1} />
        </div>

        {/* Click instruction */}
        {!isLit && (
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <p className="text-sm text-shabbat-deepBlue font-medium animate-pulse">
              Tap to light ✨
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
