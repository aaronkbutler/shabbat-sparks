'use client';

import { Quote as QuoteType } from '@/lib/quotes';

interface QuoteProps {
  quote: QuoteType;
  isVisible: boolean;
}

export default function Quote({ quote, isVisible }: QuoteProps) {
  if (!isVisible) return null;

  return (
    <div className="animate-fade-in px-6 py-8">
      <div className="max-w-lg mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-2 border-shabbat-gold/30">
        <div className="text-center">
          <svg
            className="w-8 h-8 mx-auto mb-4 text-shabbat-gold"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          
          <p className="text-lg md:text-xl text-shabbat-deepBlue leading-relaxed mb-4 font-serif italic">
            {quote.text}
          </p>
          
          {quote.attribution && (
            <p className="text-sm text-shabbat-softBlue font-medium">
              — {quote.attribution}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
