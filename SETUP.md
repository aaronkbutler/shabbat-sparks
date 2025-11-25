# Shabbat Sparks - Setup Instructions for Developers

This guide will help you get Shabbat Sparks running locally and deployed to production.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Local Development Setup](#local-development-setup)
3. [Supabase Configuration](#supabase-configuration)
4. [Stripe Configuration](#stripe-configuration)
5. [Deployment](#deployment)
6. [Testing](#testing)
7. [Troubleshooting](#troubleshooting)

## Prerequisites

### Required Accounts

- [ ] GitHub account (for code hosting)
- [ ] Supabase account (database & auth) - [Sign up free](https://supabase.com)
- [ ] Stripe account (payments) - [Sign up](https://stripe.com)
- [ ] Vercel account (hosting) - [Sign up free](https://vercel.com)

### Required Software

- [ ] Node.js 18+ ([Download](https://nodejs.org/))
- [ ] Git ([Download](https://git-scm.com/))
- [ ] Code editor (VS Code recommended)

## Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/shabbat-sparks.git
cd shabbat-sparks
```

### 2. Install Dependencies

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Supabase client
- Stripe SDK

### 3. Create Environment File

```bash
cp .env.example .env
```

You'll fill this in with your API keys in the next steps.

## Supabase Configuration

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Create a new organization (if needed)
4. Create a new project:
   - **Name**: shabbat-sparks
   - **Database Password**: (save this!)
   - **Region**: Choose closest to your users
   - **Pricing**: Free tier is fine to start

### 2. Get Your Supabase Credentials

1. In your Supabase dashboard, go to **Settings → API**
2. Copy these values to your `.env` file:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 3. Set Up Database Tables

1. In Supabase dashboard, go to **SQL Editor**
2. Click **New query**
3. Paste and run this SQL:

```sql
-- Email subscribers table
create table email_subscribers (
  id uuid default uuid_generate_v4() primary key,
  email text unique not null,
  name text,
  phone text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table email_subscribers enable row level security;

-- Allow anyone to insert (subscribe)
create policy "Allow public email signups"
  on email_subscribers for insert
  with check (true);

-- Optional: Donations tracking table
create table donations (
  id uuid default uuid_generate_v4() primary key,
  amount decimal(10,2) not null,
  email text,
  stripe_session_id text unique,
  metadata jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table donations enable row level security;

-- Only allow inserts from authenticated service role
create policy "Service role can insert donations"
  on donations for insert
  with check (auth.role() = 'service_role');
```

### 4. Verify Tables

Go to **Table Editor** in Supabase and confirm you see:
- `email_subscribers` table
- `donations` table (optional)

## Stripe Configuration

### 1. Get Stripe API Keys

1. Go to [dashboard.stripe.com](https://dashboard.stripe.com)
2. Toggle **Test mode** ON (top right)
3. Go to **Developers → API keys**
4. Copy these to your `.env`:
   - **Publishable key** → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - **Secret key** → `STRIPE_SECRET_KEY`

### 2. Set Up Webhook (for local testing)

Install Stripe CLI:

```bash
# macOS
brew install stripe/stripe-cli/stripe

# Windows
scoop install stripe

# Linux
# Download from https://github.com/stripe/stripe-cli/releases
```

Login to Stripe:

```bash
stripe login
```

Forward webhooks to your local server:

```bash
stripe listen --forward-to localhost:3000/api/webhook
```

This command will output a webhook signing secret. Copy it to your `.env`:

```
STRIPE_WEBHOOK_SECRET=whsec_...
```

**Keep this terminal window open while developing.**

### 3. Test Stripe Integration

Use these test card numbers in Stripe checkout:

- **Success**: 4242 4242 4242 4242
- **Decline**: 4000 0000 0000 0002
- **3D Secure**: 4000 0025 0000 3155

Any future expiry date and any 3-digit CVC works.

## Running the App Locally

### 1. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 2. Test the Flow

1. **Light the candle**: Tap the candle flame
2. **Read the quote**: This week's quote appears
3. **Make a test donation**: Click donate button
4. **Complete checkout**: Use test card 4242...
5. **See thank you page**: Should show impact

### 3. Check Your Database

Go to Supabase **Table Editor** and verify:
- Email signups appear in `email_subscribers`
- (If you added the table) Donations appear in `donations`

## Deployment to Production

### Option 1: Vercel (Recommended)

1. **Push code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Add environment variables:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
     - `STRIPE_SECRET_KEY`
     - `STRIPE_WEBHOOK_SECRET` (leave blank for now)
     - `NEXT_PUBLIC_APP_URL` (set to your Vercel URL)
   - Click "Deploy"

3. **Set up production Stripe webhook**:
   - Go to Stripe Dashboard → **Developers → Webhooks**
   - Click "Add endpoint"
   - URL: `https://your-app.vercel.app/api/webhook`
   - Events to send:
     - `checkout.session.completed`
     - `payment_intent.succeeded`
   - Copy the signing secret
   - Add it to Vercel environment variables as `STRIPE_WEBHOOK_SECRET`
   - Redeploy the app

4. **Switch Stripe to live mode**:
   - Get live API keys from Stripe dashboard (turn off Test mode)
   - Update Vercel environment variables with live keys
   - Redeploy

### Option 2: Other Platforms

The app works on any Next.js-compatible platform:

- **Netlify**: Use Next.js plugin
- **Railway**: Auto-detects Next.js
- **Render**: Select "Web Service"
- **AWS Amplify**: Follow Next.js guide

All require the same environment variables.

## Testing

### Manual Testing Checklist

- [ ] Candle lights when tapped
- [ ] Quote appears after lighting
- [ ] Donate button shows preset amounts
- [ ] Custom amount input works
- [ ] Stripe checkout opens
- [ ] Payment succeeds with test card
- [ ] Thank you page shows correct amount
- [ ] Streak counter appears
- [ ] Email signup works
- [ ] Email is saved to Supabase

### Automated Tests (Future)

```bash
# Coming soon
npm test
```

## Troubleshooting

### Common Issues

#### "Cannot connect to Supabase"

- Check your `NEXT_PUBLIC_SUPABASE_URL` is correct
- Verify the anon key is the **public anon** key, not service role
- Make sure you're using the right project

#### "Stripe checkout doesn't open"

- Check browser console for errors
- Verify `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` starts with `pk_`
- Make sure you're in Test mode for development

#### "Webhook signature verification failed"

- For local dev: Make sure `stripe listen` is running
- For production: Copy webhook secret from Stripe dashboard
- Restart your dev server after adding webhook secret

#### "Build fails on Vercel"

- Check all environment variables are set
- Look at build logs for specific errors
- Try building locally: `npm run build`

#### "PWA doesn't install"

- PWA requires HTTPS (works on Vercel automatically)
- Check `manifest.json` is accessible
- Icons must exist in `/public` directory

### Getting Help

1. Check the [README.md](../README.md)
2. Search existing GitHub issues
3. Create a new issue with:
   - What you tried
   - What happened
   - Error messages (if any)
   - Screenshots (if relevant)

## Next Steps

After getting the app running:

1. **Customize content**: Edit quotes, amounts, text
2. **Add icons**: Create app icons for PWA
3. **Set up analytics**: Add Google Analytics or Plausible
4. **Plan marketing**: How will you reach users?
5. **Test with users**: Get feedback from real people
6. **Monitor donations**: Set up Stripe dashboard notifications

## Security Checklist

Before launching:

- [ ] All API keys are in environment variables (not in code)
- [ ] Supabase RLS (Row Level Security) is enabled
- [ ] Stripe is in live mode (not test)
- [ ] HTTPS is enabled (automatic on Vercel)
- [ ] Environment variables are set in production
- [ ] Webhook secrets are configured
- [ ] Database backups are enabled (Supabase does this automatically)

---

**Need help?** Open an issue or email support@yadchessed.org
