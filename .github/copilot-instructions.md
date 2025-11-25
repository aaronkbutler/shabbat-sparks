# Shabbat Sparks - Project Instructions

## Project Overview
Shabbat Sparks is a mobile-optimized Progressive Web App (PWA) for weekly Shabbat candle lighting ritual combined with tzedakah donations to Yad Chessed.

## Tech Stack
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database/Auth**: Supabase
- **Payments**: Stripe
- **Hosting**: Vercel (recommended)

## Key Features
1. Tap-to-light candle animation
2. Weekly rotating quotes (52 quotes)
3. Stripe donation integration
4. Email signup for weekly reminders
5. Streak tracking (localStorage + Supabase)
6. Thank you/impact page
7. PWA support (Add to Home Screen)

## Project Structure
```
/app
  /page.tsx           - Main ritual page
  /about/page.tsx     - About Shabbat Sparks
  /thanks/page.tsx    - Thank you/impact page
  /api
    /create-checkout/route.ts  - Stripe checkout
    /webhook/route.ts          - Stripe webhook
/components
  /Candle.tsx         - Animated candle component
  /Quote.tsx          - Weekly quote display
  /DonateButton.tsx   - Stripe donation button
  /EmailSignup.tsx    - Email subscription form
  /StreakCounter.tsx  - User streak display
/lib
  /supabase.ts        - Supabase client
  /stripe.ts          - Stripe client
  /quotes.ts          - 52 weekly quotes
/public
  /manifest.json      - PWA manifest
```

## Environment Variables Required
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- STRIPE_SECRET_KEY
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
- STRIPE_WEBHOOK_SECRET

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## Checklist
- [x] Verify copilot-instructions.md exists
- [ ] Scaffold Next.js project
- [ ] Install dependencies (Supabase, Stripe)
- [ ] Create project structure
- [ ] Build core features
- [ ] Configure environment
- [ ] Create README
- [ ] Compile and test
