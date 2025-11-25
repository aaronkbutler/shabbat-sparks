/**
 * Utility functions for managing user streaks in localStorage
 */

export type StreakData = {
  currentStreak: number;
  totalWeeks: number;
  lastParticipation: string;
  totalDonated: number;
};

const STREAK_KEY = 'shabbat-sparks-streak';

export function getStreakData(): StreakData {
  if (typeof window === 'undefined') {
    return {
      currentStreak: 0,
      totalWeeks: 0,
      lastParticipation: '',
      totalDonated: 0,
    };
  }

  const data = localStorage.getItem(STREAK_KEY);
  if (!data) {
    return {
      currentStreak: 0,
      totalWeeks: 0,
      lastParticipation: '',
      totalDonated: 0,
    };
  }

  return JSON.parse(data);
}

export function updateStreak(donationAmount: number): StreakData {
  const currentData = getStreakData();
  const now = new Date();
  const lastDate = currentData.lastParticipation
    ? new Date(currentData.lastParticipation)
    : null;

  // Check if this is a new week (Friday to Friday)
  const isNewWeek = !lastDate || getDaysSince(lastDate, now) >= 7;
  const isConsecutiveWeek = lastDate && getDaysSince(lastDate, now) <= 14;

  const newData: StreakData = {
    currentStreak: isNewWeek
      ? isConsecutiveWeek
        ? currentData.currentStreak + 1
        : 1
      : currentData.currentStreak,
    totalWeeks: isNewWeek ? currentData.totalWeeks + 1 : currentData.totalWeeks,
    lastParticipation: now.toISOString(),
    totalDonated: currentData.totalDonated + donationAmount,
  };

  localStorage.setItem(STREAK_KEY, JSON.stringify(newData));
  return newData;
}

function getDaysSince(date1: Date, date2: Date): number {
  const diff = date2.getTime() - date1.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export function resetStreak(): void {
  localStorage.removeItem(STREAK_KEY);
}
