export type Quote = {
  week: number;
  text: string;
  attribution?: string;
};

export const quotes: Quote[] = [
  { week: 1, text: "A little bit of light pushes away a lot of darkness." },
  { week: 2, text: "The world stands on Torah, service, and deeds of kindness.", attribution: "Pirkei Avot" },
  { week: 3, text: "You are not required to finish the work, but you must not ignore it.", attribution: "Pirkei Avot 2:16" },
  { week: 4, text: "In a place where no one is acting humanely, try to be human.", attribution: "Pirkei Avot" },
  { week: 5, text: "Whoever saves one life, it is as if they saved an entire world.", attribution: "Talmud" },
  { week: 6, text: "The highest form of tzedakah is helping someone stand on their own feet.", attribution: "Rambam" },
  { week: 7, text: "Kindness is a language even silence can understand." },
  { week: 8, text: "Shabbat brings rest; kindness brings repair." },
  { week: 9, text: "A small act of chessed can change a whole day for someone." },
  { week: 10, text: "The light we kindle in others is the light that lasts." },
  { week: 11, text: "Wealth is not what you have, but what you share." },
  { week: 12, text: "Giving with dignity honors the image of God in every person." },
  { week: 13, text: "When we share our bread, no one's table feels small." },
  { week: 14, text: "The world is built on loving-kindness.", attribution: "Psalms 89:3" },
  { week: 15, text: "The candle you light for someone else doesn't dim your own." },
  { week: 16, text: "Tzedakah is not charity; it is justice." },
  { week: 17, text: "Better a small deed done with love than a great deed done for show." },
  { week: 18, text: "Every person is a universe; every gift touches a universe." },
  { week: 19, text: "Do not look away from someone in need; you might be their answer." },
  { week: 20, text: "The light of Shabbat is brighter when it reaches another home." },
  { week: 21, text: "Compassion is seeing another person's pain and refusing to be indifferent." },
  { week: 22, text: "Give as if everything depends on you; trust as if everything depends on God." },
  { week: 23, text: "A community is measured by how it treats its most vulnerable." },
  { week: 24, text: "Let your Shabbat peace overflow into someone else's week." },
  { week: 25, text: "The heart is never poorer for the kindness it gives." },
  { week: 26, text: "We receive so we can give; we rest so we can repair." },
  { week: 27, text: "When you share food, you share hope." },
  { week: 28, text: "Tzedakah is the song our hands sing." },
  { week: 29, text: "Every gift card is also a message: you are not alone." },
  { week: 30, text: "Justice and compassion are the twin candles of Jewish life." },
  { week: 31, text: "Shabbat invites us to see the spark of holiness in every person." },
  { week: 32, text: "When we care for each other, we make God's presence visible." },
  { week: 33, text: "The more light you share, the more light you see." },
  { week: 34, text: "Open hands create open hearts." },
  { week: 35, text: "Give today so someone else can greet tomorrow with less fear." },
  { week: 36, text: "We cannot fix every hardship, but we can soften someone's burden." },
  { week: 37, text: "The best time to help is when help is needed." },
  { week: 38, text: "Acts of chessed are the quiet miracles of ordinary days." },
  { week: 39, text: "Shabbat reminds us: people matter more than possessions." },
  { week: 40, text: "When we lift others, we lift the whole community." },
  { week: 41, text: "Generosity turns gratitude into action." },
  { week: 42, text: "Let your Shabbat candles remind you of someone else's kitchen table." },
  { week: 43, text: "The measure of kindness is not its size, but its sincerity." },
  { week: 44, text: "When we give with joy, we receive joy in return." },
  { week: 45, text: "There is always someone whose darkness needs your little bit of light." },
  { week: 46, text: "A kind community is built one small mitzvah at a time." },
  { week: 47, text: "Shabbat asks us to notice blessings and become one." },
  { week: 48, text: "Tzedakah is love, translated into groceries and rent." },
  { week: 49, text: "To be truly rich is to notice who needs you." },
  { week: 50, text: "With each act of giving, we rewrite someone's story." },
  { week: 51, text: "Shabbat is a sanctuary in time; chessed is a sanctuary in the world." },
  { week: 52, text: "May your candles warm your home, and your giving warm another's." },
];

/**
 * Get the quote for the current week based on the week number of the year
 */
export function getCurrentQuote(): Quote {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const diff = now.getTime() - start.getTime();
  const oneWeek = 1000 * 60 * 60 * 24 * 7;
  const weekNumber = Math.floor(diff / oneWeek) % 52;
  
  return quotes[weekNumber] || quotes[0];
}

/**
 * Get a quote by week number (1-52)
 */
export function getQuoteByWeek(week: number): Quote {
  const index = (week - 1) % 52;
  return quotes[index] || quotes[0];
}
