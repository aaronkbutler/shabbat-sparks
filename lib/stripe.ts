import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
  typescript: true,
});

export const DONATION_AMOUNTS = {
  small: 5,
  medium: 18,
  large: 36,
  chai: 54,
};

export const DEFAULT_DONATION = DONATION_AMOUNTS.medium;
