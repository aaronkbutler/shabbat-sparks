'use client';

import { useState } from 'react';
import Link from 'next/link';
import Candle from '@/components/Candle';
import Quote from '@/components/Quote';
import DonateButton from '@/components/DonateButton';
import EmailSignup from '@/components/EmailSignup';
import StreakCounter from '@/components/StreakCounter';
import { getCurrentQuote } from '@/lib/quotes';

export default function Home() {
  const [isLit, setIsLit] = useState(false);
  const quote = getCurrentQuote();

  const handleLight = () => {
    setIsLit(true);
  };

  return (
    <main className="min-h-screen pb-12">
      {/* Header */}
      <header className="text-center pt-8 pb-4 px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-shabbat-deepBlue mb-2">
          Shabbat Sparks ✨
        </h1>
        <p className="text-shabbat-softBlue text-sm md:text-base">
          Light candles. Tap once. Feed a family.
        </p>
      </header>

      {/* Streak Counter (shows if user has participated) */}
      <StreakCounter />

      {/* Main ritual section */}
      <section className="max-w-2xl mx-auto">
        {!isLit && (
          <div className="text-center px-6 mb-8">
            <p className="text-lg text-shabbat-deepBlue leading-relaxed">
              When you light your Shabbat candles,<br />
              tap the flame to begin.
            </p>
          </div>
        )}

        {/* Candle Animation */}
        <Candle onLight={handleLight} isLit={isLit} />

        {/* Quote (visible after lighting) */}
        <Quote quote={quote} isVisible={isLit} />

        {/* Donate Button (visible after lighting) */}
        <DonateButton isVisible={isLit} />

        {/* Email Signup */}
        {isLit && <EmailSignup />}
      </section>

      {/* Footer */}
      <footer className="text-center px-6 mt-12 space-y-4">
        <div className="flex justify-center gap-6 text-sm">
          <Link
            href="/about"
            className="text-shabbat-softBlue hover:text-shabbat-deepBlue underline"
          >
            What is Shabbat Sparks?
          </Link>
          <a
            href="https://yadchessed.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-shabbat-softBlue hover:text-shabbat-deepBlue underline"
          >
            About Yad Chessed
          </a>
        </div>
        
        <p className="text-xs text-shabbat-softBlue">
          A project of Yad Chessed - Helping our neighbors with dignity
        </p>
      </footer>
    </main>
  );
}
