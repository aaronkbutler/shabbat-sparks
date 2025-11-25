# Shabbat Sparks - Developer Quick Reference

## 🚀 Common Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Type check and build
npm run check

# Clean install (if issues)
npm run clean
```

## 🔑 Environment Variables

Create `.env` file with:

```env
# Supabase (get from supabase.com project settings)
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...

# Stripe (get from dashboard.stripe.com)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...  # or pk_live_...
STRIPE_SECRET_KEY=sk_test_...                   # or sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000       # or your domain
```

## 🗄️ Database Setup (Supabase SQL Editor)

```sql
-- Email subscribers
create table email_subscribers (
  id uuid default uuid_generate_v4() primary key,
  email text unique not null,
  name text,
  phone text,
  created_at timestamp with time zone default now() not null
);

alter table email_subscribers enable row level security;

create policy "Allow public inserts" on email_subscribers
  for insert with check (true);
```

## 🧪 Stripe Test Cards

```
Success:      4242 4242 4242 4242
Decline:      4000 0000 0000 0002
3D Secure:    4000 0025 0000 3155

Any future expiry date
Any 3-digit CVC
Any ZIP code
```

## 📱 Test PWA Install

**Desktop (Chrome/Edge):**
1. Run `npm run build && npm start`
2. Open localhost:3000
3. Click install icon in address bar

**Mobile:**
1. Deploy to Vercel (HTTPS required)
2. Open on phone
3. Menu → "Add to Home Screen"

## 🔍 Debugging

**Check logs:**
```bash
# Vercel logs
vercel logs [deployment-url]

# Supabase logs
# Go to Dashboard → Logs
```

**Common issues:**
- Can't connect to Supabase → Check URL and key in `.env`, restart server
- Stripe checkout fails → Verify publishable key, check browser console
- Webhook errors → Check webhook secret, verify endpoint URL
- Build fails → Run `npm run check` locally first

## 📂 Key Files to Know

```
app/page.tsx              → Main ritual page
components/Candle.tsx     → Animated candle
lib/quotes.ts             → 52 weekly quotes
lib/stripe.ts             → Donation amounts
app/api/create-checkout/  → Stripe checkout
app/api/webhook/          → Stripe webhooks
app/api/subscribe/        → Email signup
```

## 🎨 Customization Quick Reference

**Change donation amounts:**
Edit `lib/stripe.ts`:
```typescript
export const DONATION_AMOUNTS = {
  small: 5,
  medium: 18,
  large: 36,
  chai: 54,
};
```

**Change colors:**
Edit `tailwind.config.ts`:
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

**Edit quotes:**
Edit `lib/quotes.ts` - 52 quotes array

## 🌐 Deployment Checklist

**Vercel:**
- [ ] Connect GitHub repo
- [ ] Add all environment variables
- [ ] Set NEXT_PUBLIC_APP_URL to Vercel domain
- [ ] Deploy
- [ ] Test donation flow
- [ ] Set up Stripe webhook to Vercel URL

**Stripe webhook:**
1. dashboard.stripe.com → Webhooks
2. Add endpoint: `https://your-app.vercel.app/api/webhook`
3. Select events: `checkout.session.completed`
4. Copy signing secret → Add to Vercel env vars
5. Redeploy

## 🆘 Getting Help

1. **Documentation:**
   - [QUICKSTART.md](./QUICKSTART.md)
   - [SETUP.md](./SETUP.md)
   - [README.md](./README.md)

2. **External docs:**
   - [Next.js docs](https://nextjs.org/docs)
   - [Supabase docs](https://supabase.com/docs)
   - [Stripe docs](https://stripe.com/docs)
   - [Vercel docs](https://vercel.com/docs)

3. **Support:**
   - GitHub Issues
   - Email: [support contact]

## 📊 Post-Launch Monitoring

**Check daily:**
- Stripe dashboard for donations
- Supabase table editor for new subscribers
- Vercel analytics for traffic
- Error logs for issues

**Check weekly:**
- Total donations amount
- Active user count
- Email signup rate
- Conversion rate (visitors → donors)

## 🎯 Success Metrics

| Metric | Week 1 Goal | Month 1 Goal | Year 1 Goal |
|--------|------------|--------------|-------------|
| Weekly users | 20 | 100 | 1,000 |
| Donations/week | $200 | $1,000 | $10,000 |
| Email subs | 10 | 50 | 500 |
| Conversion rate | 5% | 10% | 15% |

## 🔐 Security Reminders

- ✅ Never commit `.env` file
- ✅ Use live keys only in production
- ✅ Keep webhook secrets secret
- ✅ Enable HTTPS (auto on Vercel)
- ✅ Review Stripe dashboard regularly

## 💻 Local Development Workflow

```bash
# 1. Make changes to code
# 2. See live updates at localhost:3000
# 3. Test thoroughly

# 4. Commit changes
git add .
git commit -m "Description of changes"

# 5. Push to GitHub
git push origin main

# 6. Vercel auto-deploys (if connected)
# 7. Test on live site

# 8. Monitor for errors
```

---

**Keep this file handy!** Bookmark it for quick reference. 📑
