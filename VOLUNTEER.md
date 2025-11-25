# Volunteer Developer Role - Shabbat Sparks

## About the Project

**Shabbat Sparks** is a beautiful web app that connects the weekly Jewish tradition of lighting Shabbat candles to helping neighbors in need through [Yad Chessed](https://yadchessed.org).

Users tap to light a virtual candle, reflect on a weekly quote, and are invited to make a small donation ($5-$54) that becomes supermarket gift cards and emergency assistance for families facing financial hardship.

### The Vision

Create a "viral" weekly giving habit where thousands of people make small weekly donations tied to their Friday night Shabbat ritual—turning a moment of light into a sustainable safety net for the community.

## What's Already Built

✅ **Complete MVP** is coded and ready:
- Mobile-optimized Progressive Web App (PWA)
- Interactive candle lighting animation
- 52 weekly rotating quotes about kindness
- Stripe donation integration (Apple Pay, Google Pay)
- Email signup for weekly reminders
- Streak tracking to encourage consistency
- About page, thank you page, impact dashboard
- Full documentation and setup guides

**Tech stack**: Next.js 14, TypeScript, Tailwind CSS, Supabase, Stripe

## What We Need

### Initial Setup & Launch (4-8 hours)

**Priority 1: Get it running** (2-3 hours)
- [ ] Set up Supabase project and database
- [ ] Configure Stripe account and webhooks
- [ ] Deploy to Vercel or similar
- [ ] Connect custom domain
- [ ] Test full donation flow
- [ ] Create app icons for PWA

**Priority 2: Polish & launch** (2-3 hours)
- [ ] Review all content and quotes
- [ ] Test on multiple devices (iOS, Android)
- [ ] Set up basic analytics
- [ ] Configure email reminders (Mailchimp or similar)
- [ ] Soft launch with small group
- [ ] Fix any bugs discovered

**Priority 3: Monitoring** (ongoing, minimal)
- [ ] Monitor error logs weekly
- [ ] Review donation flow monthly
- [ ] Apply minor updates as needed

### Ongoing (Optional - 2-4 hours/month)

If you're excited to continue:
- Add SMS reminders (Twilio)
- Build family/group mode
- Create social sharing features
- Add impact badges
- Integrate with Yad Chessed CRM
- Multi-language support

## Skills Needed

**Required:**
- Experience with web development
- Comfortable with command line and Git
- Can follow setup documentation
- Able to debug basic issues

**Nice to have (but not required):**
- Next.js or React experience
- TypeScript knowledge
- API integration experience (Stripe, Supabase)
- Mobile-first design understanding

**Not required:**
- You don't need to be a React expert
- No design work needed (all built)
- No copywriting (content is complete)
- No backend architecture (it's serverless)

## Time Commitment

**Initial setup**: 4-8 hours over 1-2 weeks
- Flexible scheduling
- Work at your own pace
- Most time is waiting for accounts to provision

**Ongoing maintenance**: 1-2 hours per month
- Mostly monitoring
- Occasional bug fixes
- Optional feature additions

## What You'll Learn

- Progressive Web App (PWA) development
- Payment processing with Stripe
- Database design with Supabase
- Serverless deployment on Vercel
- Mobile-first responsive design
- Next.js App Router architecture
- TypeScript best practices

## Support Provided

You won't be alone! You'll have:
- ✅ Complete source code (all done)
- ✅ Step-by-step setup documentation
- ✅ Troubleshooting guides
- ✅ Example .env configuration
- ✅ Testing checklists
- ✅ Pre-launch checklist
- ✅ Direct contact with Yad Chessed team

## Getting Started

### 1. Review the Code

```bash
# Clone the repository
git clone [repository-url]
cd shabbat-sparks

# Look at the structure
ls -la

# Read the documentation
open README.md
open QUICKSTART.md
```

### 2. Try Running Locally

Follow [QUICKSTART.md](./QUICKSTART.md) to:
- Install dependencies
- Set up free Supabase account
- Configure Stripe test mode
- Run the app locally
- Test the donation flow

Takes about 10-15 minutes.

### 3. Ask Questions

Email your questions to: [contact email]

Common questions:
- "What if I get stuck?" → Detailed troubleshooting in SETUP.md
- "What if I break something?" → Everything is version controlled with Git
- "What if I don't know Next.js?" → The code is well-commented and documented
- "How much time will this really take?" → Most volunteers finish in 4-6 hours

## Why This Matters

**Direct impact:**
- Your work helps families buy groceries with dignity
- Small consistent donations are more sustainable than one-time gifts
- Technology can make tzedakah easier and more joyful

**Community reach:**
- Potential to reach thousands of Jewish families
- Viral model could be replicated for other causes
- Creates a new ritual connecting tradition to action

**Skills portfolio:**
- Real production app in your portfolio
- Experience with modern web stack
- Social impact project on your resume

## Questions?

- **How do I apply?** Email [contact] with:
  - Brief background (1-2 sentences)
  - Your GitHub profile or LinkedIn
  - When you could start
  
- **Can I work with a friend?** Yes! Pair programming welcome.

- **What if I can only do part of it?** That's fine! We can find multiple volunteers.

- **Is this really volunteer?** Yes, 100% volunteer. This is for a nonprofit.

- **Can I add it to my resume/portfolio?** Absolutely! We encourage it.

## Next Steps

1. **Review the code** - Clone the repo and look around
2. **Read QUICKSTART.md** - Try running it locally
3. **Reach out** - Email us if you're interested
4. **Schedule a call** - 15-minute intro call to answer questions
5. **Start setup** - We'll help you every step

---

## Technical Deep Dive (for the curious)

### Architecture

```
Frontend (Next.js)
├─ React components (Candle, Quote, DonateButton, etc.)
├─ Tailwind CSS styling
└─ Client-side state (React hooks, localStorage)

Backend (Serverless API Routes)
├─ /api/create-checkout → Stripe session
├─ /api/webhook → Stripe webhook handler
└─ /api/subscribe → Email signup

Database (Supabase PostgreSQL)
├─ email_subscribers table
└─ donations table (optional)

Payments (Stripe)
├─ Checkout Session API
├─ Webhooks for confirmation
└─ Payment Methods (card, Apple Pay, Google Pay)

Hosting (Vercel)
├─ Automatic deployments from Git
├─ Serverless functions for API routes
└─ CDN for static assets
```

### Key Files

- `app/page.tsx` - Main ritual page with candle
- `components/Candle.tsx` - Animated candle component
- `lib/quotes.ts` - 52 weekly quotes
- `lib/stripe.ts` - Stripe configuration
- `lib/supabase.ts` - Database client

### Development Flow

1. Edit code locally
2. Test at localhost:3000
3. Commit to Git
4. Push to GitHub
5. Vercel auto-deploys to production

### Typical Setup Issues (and solutions)

**Issue**: Supabase connection fails
**Solution**: Check .env has correct URL and key, restart dev server

**Issue**: Stripe checkout doesn't open
**Solution**: Verify publishable key, check browser console, ensure test mode

**Issue**: Build fails on Vercel
**Solution**: Check environment variables are set, review build logs

All covered in SETUP.md!

---

**Ready to make an impact?** We'd love to work with you! ✨

Email: [your-email@yadchessed.org]

**Shabbat Shalom!** 🕯️
