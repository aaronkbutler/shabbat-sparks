'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { updateStreak } from '@/lib/streak';

export default function ThanksPage() {
  const searchParams = useSearchParams();
  const [amount, setAmount] = useState<number | null>(null);
  const [impact, setImpact] = useState({
    meals: 0,
    streak: 0,
    totalWeeks: 0,
  });

  useEffect(() => {
    // Get amount from URL params
    const amountParam = searchParams.get('amount');
    if (amountParam) {
      const donationAmount = parseFloat(amountParam);
      setAmount(donationAmount);

      // Update streak
      const streakData = updateStreak(donationAmount);
      
      // Calculate impact
      const meals = Math.floor(donationAmount / 5);
      setImpact({
        meals,
        streak: streakData.currentStreak,
        totalWeeks: streakData.totalWeeks,
      });
    }
  }, [searchParams]);

  return (
    <main className="min-h-screen pb-12">
      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Success animation */}
        <div className="text-center mb-8">
          <div className="inline-block bg-green-50 rounded-full p-6 mb-6">
            <svg
              className="w-20 h-20 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-shabbat-deepBlue mb-4">
            ✨ Thank you for lighting the way
          </h1>

          {amount && (
            <p className="text-xl text-shabbat-softBlue mb-2">
              Your gift of <strong className="text-shabbat-deepBlue">${amount}</strong> just 
              helped someone in our community.
            </p>
          )}
        </div>

        {/* Impact stats */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border-2 border-shabbat-gold/30">
          <h2 className="text-2xl font-bold text-shabbat-deepBlue mb-6 text-center">
            Your Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {impact.meals > 0 && (
              <div className="text-center p-4 bg-shabbat-warmWhite rounded-xl">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {impact.meals}+
                </div>
                <div className="text-sm text-shabbat-softBlue">
                  Meals Funded
                </div>
              </div>
            )}

            {impact.streak > 0 && (
              <div className="text-center p-4 bg-shabbat-warmWhite rounded-xl">
                <div className="text-4xl font-bold text-shabbat-flame mb-2">
                  {impact.streak}
                </div>
                <div className="text-sm text-shabbat-softBlue">
                  Week Streak 🔥
                </div>
              </div>
            )}

            {impact.totalWeeks > 0 && (
              <div className="text-center p-4 bg-shabbat-warmWhite rounded-xl">
                <div className="text-4xl font-bold text-shabbat-gold mb-2">
                  {impact.totalWeeks}
                </div>
                <div className="text-sm text-shabbat-softBlue">
                  Total Weeks
                </div>
              </div>
            )}
          </div>

          <div className="text-center p-6 bg-gradient-to-r from-shabbat-warmWhite to-white rounded-xl border border-shabbat-gold/20">
            <p className="text-shabbat-deepBlue leading-relaxed">
              <strong>Your gift becomes dignity.</strong> Through Yad Chessed, someone 
              will receive a supermarket gift card and shop for their family with respect 
              and choice.
            </p>
          </div>
        </div>

        {/* Community impact */}
        <div className="bg-shabbat-deepBlue text-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Community Impact This Week
          </h2>
          <div className="text-center">
            <p className="text-lg mb-2">
              This week, Shabbat Sparks participants have:
            </p>
            <ul className="space-y-2 text-shabbat-warmWhite">
              <li>💝 Funded <strong>120+ supermarket gift cards</strong></li>
              <li>🏠 Helped <strong>8 families</strong> with emergency rent assistance</li>
              <li>🕯️ Enabled <strong>45 families</strong> to celebrate Shabbat</li>
            </ul>
            <p className="text-sm text-shabbat-warmWhite/80 mt-4">
              (Example data - will be updated with real metrics)
            </p>
          </div>
        </div>

        {/* Share */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8 border border-shabbat-gold/20">
          <h2 className="text-xl font-bold text-shabbat-deepBlue mb-4 text-center">
            Share the Light
          </h2>
          <p className="text-shabbat-softBlue text-center mb-6">
            Invite friends and family to join this weekly ritual
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/?text=${encodeURIComponent('I just lit Shabbat candles and gave to help our community through Shabbat Sparks. Join me this Friday! https://shabbatsparks.org')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition"
            >
              Share on WhatsApp
            </a>
            <a
              href={`mailto:?subject=${encodeURIComponent('Join me for Shabbat Sparks')}&body=${encodeURIComponent('I just discovered Shabbat Sparks - a beautiful way to connect our weekly Shabbat candle lighting to helping neighbors in need through Yad Chessed. Check it out: https://shabbatsparks.org')}`}
              className="bg-shabbat-softBlue text-white px-6 py-3 rounded-lg font-medium hover:bg-shabbat-deepBlue transition"
            >
              Share via Email
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-shabbat-flame to-shabbat-gold text-white font-bold text-lg py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            Return to Shabbat Sparks
          </Link>
          
          <p className="text-sm text-shabbat-softBlue">
            See you next Friday! ✨
          </p>
        </div>
      </div>
    </main>
  );
}
