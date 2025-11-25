# Pre-Launch Checklist

Use this checklist before making Shabbat Sparks public.

## Development Complete ✅

- [ ] App runs locally without errors
- [ ] All pages load correctly (home, about, thanks)
- [ ] Candle animation works smoothly
- [ ] Quotes display properly
- [ ] Donation flow completes successfully
- [ ] Email signup saves to database
- [ ] Streak counter displays correctly

## Content Review

- [ ] All 52 quotes reviewed for accuracy
- [ ] Donation amounts are correct ($5, $18, $36, $54)
- [ ] About page text is accurate
- [ ] Links to Yad Chessed website work
- [ ] Thank you page messaging is appropriate
- [ ] No placeholder text remains (e.g., "Lorem ipsum")

## Technical Setup

### Supabase
- [ ] Production database created
- [ ] Tables created (email_subscribers, donations)
- [ ] Row Level Security enabled
- [ ] Policies configured correctly
- [ ] Backups enabled (automatic in Supabase)

### Stripe
- [ ] Stripe account verified
- [ ] Switched to LIVE mode (not test)
- [ ] Live API keys copied
- [ ] Bank account connected for payouts
- [ ] Webhook endpoint configured
- [ ] Webhook secret added to environment
- [ ] Test donation completed in live mode

### Hosting (Vercel)
- [ ] Domain connected (e.g., shabbatsparks.org)
- [ ] HTTPS enabled (automatic)
- [ ] All environment variables set
- [ ] Production build succeeds
- [ ] App loads at custom domain

## Security & Privacy

- [ ] No API keys in source code
- [ ] All keys in environment variables only
- [ ] Stripe keys are LIVE keys (start with pk_live_ and sk_live_)
- [ ] Webhook signature verification working
- [ ] HTTPS enabled on all pages
- [ ] Privacy policy added (if collecting emails)
- [ ] Terms of service added (if needed)

## Mobile & PWA

- [ ] App icons created (192px and 512px)
- [ ] Icons uploaded to /public folder
- [ ] manifest.json configured
- [ ] App installs on iOS (Add to Home Screen)
- [ ] App installs on Android
- [ ] Mobile layout looks good on iPhone
- [ ] Mobile layout looks good on Android
- [ ] Touch targets are large enough (48px minimum)

## Testing

### Browser Testing
- [ ] Chrome/Edge (desktop)
- [ ] Safari (desktop)
- [ ] Firefox (desktop)
- [ ] Chrome (mobile)
- [ ] Safari (iPhone)
- [ ] Samsung Internet (Android)

### User Flow Testing
- [ ] First-time user can light candle easily
- [ ] Donation flow is clear and simple
- [ ] Error messages are helpful
- [ ] Thank you page displays correctly
- [ ] Email signup works
- [ ] Streak counter increments properly

### Performance
- [ ] Page loads in under 3 seconds
- [ ] Animations are smooth (60fps)
- [ ] No console errors
- [ ] Lighthouse score > 90 (run in Chrome DevTools)

## Analytics & Monitoring

- [ ] Analytics installed (Google Analytics / Plausible)
- [ ] Conversion tracking set up
- [ ] Error monitoring configured (Sentry / optional)
- [ ] Stripe dashboard notifications enabled
- [ ] Email notifications for donations set up

## Marketing Materials Ready

- [ ] Launch email/post written
- [ ] Social media graphics created
- [ ] Short description for sharing ready
- [ ] QR code generated (optional)
- [ ] Demo video or screenshots ready (optional)

## Communication Plan

- [ ] Yad Chessed team informed
- [ ] Launch date set
- [ ] Email to supporters drafted
- [ ] Social media posts scheduled
- [ ] Weekly reminder email template created

## Legal & Compliance

- [ ] Tax-deductible donation language verified
- [ ] 501(c)(3) status confirmed
- [ ] Donation receipts configured in Stripe
- [ ] GDPR compliance checked (if applicable)
- [ ] Data retention policy set

## Backup Plan

- [ ] Know how to pause donations (turn off Stripe)
- [ ] Emergency contact info ready
- [ ] Rollback plan if issues occur
- [ ] Support email address set up
- [ ] FAQ page or support docs ready

## Final Checks

- [ ] Run lighthouse audit: npm run build && npm start
- [ ] Test with real money ($1 donation)
- [ ] Verify donation appears in Stripe
- [ ] Verify email appears in Supabase
- [ ] Check mobile install process
- [ ] Review all error messages
- [ ] Spell-check all content
- [ ] Test on slow internet connection

## Launch Day

- [ ] Monitor server logs
- [ ] Watch Stripe dashboard
- [ ] Check Supabase for new signups
- [ ] Respond to any errors quickly
- [ ] Thank early users!
- [ ] Share on social media
- [ ] Send launch announcement

## Post-Launch (Week 1)

- [ ] Review analytics daily
- [ ] Check donation totals
- [ ] Monitor error rates
- [ ] Gather user feedback
- [ ] Fix any bugs reported
- [ ] Thank donors
- [ ] Plan weekly email reminder

---

## Pre-Launch Meeting Agenda

Before going live, review with team:

1. **Technical readiness** - All systems working?
2. **Content accuracy** - All text correct?
3. **Financial setup** - Stripe configured properly?
4. **Marketing plan** - How will we spread the word?
5. **Support plan** - Who handles questions?
6. **Success metrics** - What does success look like?
7. **Launch timing** - When exactly do we go live?

---

## Quick Pre-Launch Tests

Run these commands before launch:

```bash
# Type check
npm run lint

# Build test
npm run build

# Production test
npm start

# Check for security issues
npm audit
```

---

## Emergency Contacts

- **Stripe support**: https://support.stripe.com
- **Vercel support**: https://vercel.com/support
- **Supabase support**: https://supabase.com/support
- **Developer**: [Add your email/phone]
- **Yad Chessed contact**: [Add contact info]

---

**Ready to launch?** You've got this! 🚀✨
