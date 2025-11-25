'use client';

import { useEffect, useState } from 'react';
import { getStreakData, type StreakData } from '@/lib/streak';

export default function StreakCounter() {
  const [streak, setStreak] = useState<StreakData | null>(null);

  useEffect(() => {
    const data = getStreakData();
    setStreak(data);
  }, []);

  if (!streak || streak.totalWeeks === 0) return null;

  const mealsProvided = Math.floor(streak.totalDonated / 5); // Rough estimate

  return (
    <div className="px-6 py-4">
      <div className="max-w-lg mx-auto bg-gradient-to-br from-shabbat-warmWhite to-white rounded-2xl shadow-lg p-6 border-2 border-shabbat-gold/30">
        <h3 className="text-lg font-bold text-shabbat-deepBlue mb-4 text-center">
          Your Impact ✨
        </h3>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-shabbat-flame mb-1">
              {streak.currentStreak}
            </div>
            <div className="text-xs text-shabbat-softBlue">
              Week Streak
            </div>
          </div>

          <div>
            <div className="text-3xl font-bold text-shabbat-gold mb-1">
              {streak.totalWeeks}
            </div>
            <div className="text-xs text-shabbat-softBlue">
              Total Weeks
            </div>
          </div>

          <div>
            <div className="text-3xl font-bold text-green-600 mb-1">
              {mealsProvided}+
            </div>
            <div className="text-xs text-shabbat-softBlue">
              Meals Funded
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-shabbat-gold/20">
          <p className="text-sm text-center text-shabbat-softBlue">
            You've given <span className="font-bold text-shabbat-deepBlue">${streak.totalDonated}</span> total
          </p>
        </div>

        {streak.currentStreak >= 4 && (
          <div className="mt-4 bg-shabbat-gold/10 rounded-lg p-3 text-center">
            <p className="text-sm font-medium text-shabbat-deepBlue">
              🎉 Amazing dedication! You're making a real difference.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
