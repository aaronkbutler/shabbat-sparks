# Shabbat Sparks ✨

**Light candles. Tap once. Feed a family.**

A beautiful, mobile-optimized Progressive Web App that transforms the weekly Shabbat candle lighting ritual into an act of tzedakah, supporting families in need through [Yad Chessed](https://yadchessed.org).

![Shabbat Sparks Demo](./docs/demo.gif)

## 🌟 Features

- **Interactive Candle Lighting**: Tap to light a virtual candle with smooth animations
- **Weekly Wisdom**: 52 rotating quotes about kindness, tzedakah, and community
- **One-Tap Donations**: Seamless Stripe integration with Apple Pay & Google Pay
- **Streak Tracking**: Encourage weekly participation with streak counters
- **Email Reminders**: Weekly Friday email reminders with this week's quote
- **PWA Support**: Install on mobile devices like a native app
- **Mobile-First Design**: Optimized for smartphones with beautiful animations
- **Impact Dashboard**: Users see their total contribution and community impact

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- A Supabase account (free tier works)
- A Stripe account (for donations)
- Git

### 1. Clone and Install

```bash
git clone https://github.com/yourusername/shabbat-sparks.git
cd shabbat-sparks
npm install
```

### 2. Set Up Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` and add your credentials:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Set Up Supabase Database

Create the following tables in your Supabase project:

#### Email Subscribers Table

```sql
create table email_subscribers (
  id uuid default uuid_generate_v4() primary key,
  email text unique not null,
  name text,
  phone text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table email_subscribers enable row level security;

-- Create policy to allow inserts
create policy "Allow public inserts" on email_subscribers
  for insert with check (true);
```

#### Donations Table (Optional - for tracking)

```sql
create table donations (
  id uuid default uuid_generate_v4() primary key,
  amount decimal(10,2) not null,
  email text,
  stripe_session_id text unique,
  metadata jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table donations enable row level security;
```

### 4. Set Up Stripe Webhook

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/test/webhooks)
2. Click "Add endpoint"
3. Enter your webhook URL: `https://yourdomain.com/api/webhook`
4. Select events: `checkout.session.completed`, `payment_intent.succeeded`
5. Copy the webhook signing secret to your `.env` file

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app!

## 📱 PWA Setup

### Adding Icons

Place these icon files in the `/public` directory:

- `icon-192.png` (192x192px)
- `icon-512.png` (512x512px)
- `apple-touch-icon.png` (180x180px)

You can generate icons using tools like:
- [RealFaviconGenerator](https://realfavicongenerator.net/)
- [PWA Builder Image Generator](https://www.pwabuilder.com/imageGenerator)

### Testing PWA

1. Build the production version: `npm run build && npm start`
2. Open in Chrome/Edge
3. Click the install icon in the address bar
4. Or on mobile: "Add to Home Screen"

## 🎨 Customization

### Changing Quotes

Edit `/lib/quotes.ts` to modify the 52 weekly quotes. Each quote needs:

```typescript
{
  week: 1,
  text: "Your quote here",
  attribution: "Optional - Source" // can be omitted
}
```

### Donation Amounts

Edit `/lib/stripe.ts` to change preset donation amounts:

```typescript
export const DONATION_AMOUNTS = {
  small: 5,
  medium: 18,  // Chai
  large: 36,
  chai: 54,    // Double Chai
};
```

### Styling

The app uses Tailwind CSS with custom colors defined in `tailwind.config.ts`:

```typescript
colors: {
  shabbat: {
    gold: "#FFD700",
    flame: "#FF6B35",
    warmWhite: "#FFF8E7",
    deepBlue: "#1B2845",
    softBlue: "#5E7BA3",
  },
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

Vercel automatically:
- Builds and deploys on every push
- Provides HTTPS
- Handles serverless functions for API routes
- Optimizes images and static assets

### Other Platforms

The app works on any platform that supports Next.js:
- Netlify
- Railway
- Render
- AWS Amplify
- Google Cloud Run

## 📊 Analytics & Monitoring

### Recommended Integrations

1. **Google Analytics**: Add GA4 to track page views and conversions
2. **Plausible**: Privacy-friendly analytics
3. **Sentry**: Error monitoring
4. **PostHog**: Product analytics

### Key Metrics to Track

- Weekly active users
- Conversion rate (visitors → donors)
- Average donation amount
- Streak retention
- Email signup rate

## 🔧 Development

### Project Structure

```
shabbat-sparks/
├── app/
│   ├── page.tsx              # Main ritual page
│   ├── about/page.tsx        # About page
│   ├── thanks/page.tsx       # Thank you page
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   └── api/
│       ├── create-checkout/route.ts  # Stripe checkout
│       ├── subscribe/route.ts        # Email signup
│       └── webhook/route.ts          # Stripe webhooks
├── components/
│   ├── Candle.tsx            # Animated candle
│   ├── Quote.tsx             # Quote display
│   ├── DonateButton.tsx      # Donation UI
│   ├── EmailSignup.tsx       # Email form
│   └── StreakCounter.tsx     # Streak display
├── lib/
│   ├── supabase.ts           # Supabase client
│   ├── stripe.ts             # Stripe client
│   ├── quotes.ts             # 52 weekly quotes
│   └── streak.ts             # Streak utilities
└── public/
    ├── manifest.json         # PWA manifest
    └── icons/                # App icons
```

### Testing

```bash
# Run type checking
npm run lint

# Build for production
npm run build

# Test production build locally
npm start
```

## 🤝 Contributing

This project was built for Yad Chessed by volunteers. Contributions welcome!

### Ideas for Future Features

- [ ] SMS reminders via Twilio
- [ ] Family/group mode (shared streaks)
- [ ] Impact badges and achievements
- [ ] Social sharing with auto-generated images
- [ ] Multi-language support (Hebrew, Russian, Spanish)
- [ ] Admin dashboard for tracking donations
- [ ] Integration with Yad Chessed CRM
- [ ] Recurring donation option
- [ ] Shabbat times API integration
- [ ] Voice-activated candle lighting

### Volunteer Opportunities

Looking for help with:
- **Design**: Creating beautiful candle/flame icons and graphics
- **Development**: Implementing new features
- **Marketing**: Growing user adoption
- **Content**: Writing additional meaningful quotes
- **Translation**: Multi-language support

## 📄 License

MIT License - feel free to use this for similar projects!

## 🙏 Acknowledgments

- Concept and design inspired by the beautiful tradition of Shabbat candle lighting
- Built with love by volunteers for [Yad Chessed](https://yadchessed.org)
- Powered by Next.js, Supabase, and Stripe
- 52 quotes compiled from Jewish teachings and wisdom

## 📞 Support

- **Email**: support@yadchessed.org
- **Website**: https://yadchessed.org
- **Issues**: https://github.com/yourusername/shabbat-sparks/issues

---

**Shabbat Shalom!** 🕯️✨

May your light reach others, and may small acts of kindness create lasting change.
