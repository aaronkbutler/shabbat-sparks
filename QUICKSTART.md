# Quick Start Guide - Shabbat Sparks

Get up and running in 10 minutes!

## Step 1: Install Dependencies (2 min)

```bash
cd /Users/aaronkbutler/Documents/Projects/shabbat-sparks
npm install
```

## Step 2: Set Up Free Supabase Account (3 min)

1. Go to https://supabase.com and click "Start your project"
2. Create a new project called "shabbat-sparks"
3. Wait for it to provision (1-2 minutes)
4. Go to Settings → API and copy:
   - Project URL
   - anon public key

## Step 3: Set Up Stripe Test Account (2 min)

1. Go to https://dashboard.stripe.com/register
2. Make sure **Test mode** is ON (top right)
3. Go to Developers → API keys
4. Copy both keys (publishable and secret)

## Step 4: Configure Environment (1 min)

```bash
# Copy the example file
cp .env.example .env

# Edit .env with your keys
# Use any text editor or:
code .env  # VS Code
nano .env  # Terminal
```

Paste your keys:
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_... # Leave blank for now
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Step 5: Create Database Tables (1 min)

1. Go to your Supabase project → SQL Editor
2. Click "New query"
3. Paste this:

```sql
create table email_subscribers (
  id uuid default uuid_generate_v4() primary key,
  email text unique not null,
  name text,
  phone text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table email_subscribers enable row level security;

create policy "Allow public email signups"
  on email_subscribers for insert
  with check (true);
```

4. Click "Run"

## Step 6: Start the App! (1 min)

```bash
npm run dev
```

Open http://localhost:3000 in your browser!

## Testing It Out

1. **Tap the candle** - It should light up with animation
2. **Read the quote** - A weekly quote appears
3. **Click "Give $18 for Shabbat"**
4. **Use test card**: `4242 4242 4242 4242`
   - Expiry: Any future date
   - CVC: Any 3 digits
   - ZIP: Any 5 digits
5. **Complete payment** - You'll see the thank you page!

## Next Steps

### For Development
- Read [SETUP.md](./SETUP.md) for detailed configuration
- Set up Stripe webhooks for production

### For Customization
- Edit quotes in `lib/quotes.ts`
- Change colors in `tailwind.config.ts`
- Modify donation amounts in `lib/stripe.ts`

### For Deployment
- Push to GitHub
- Deploy to Vercel (free)
- Add production Stripe keys
- Set up webhook endpoint

## Need Help?

### Can't install dependencies?
- Make sure you have Node.js 18+: `node --version`
- Try: `npm cache clean --force && npm install`

### Can't connect to Supabase?
- Double-check the URL and key in `.env`
- Make sure you saved the `.env` file
- Restart the dev server

### Stripe checkout doesn't open?
- Check browser console for errors (F12)
- Verify your Stripe key starts with `pk_test_`
- Make sure you're in Test mode in Stripe dashboard

### Still stuck?
1. Check the full [README.md](./README.md)
2. Review [SETUP.md](./SETUP.md)
3. Open a GitHub issue

---

**You're ready!** 🎉

The app is running locally. Now you can:
- Test all features
- Customize the content
- Invite friends to try it
- Deploy to production when ready

**Shabbat Shalom!** ✨
