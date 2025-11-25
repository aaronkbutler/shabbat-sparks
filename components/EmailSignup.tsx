'use client';

import { useState } from 'react';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, phone }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setMessage('Thank you! You\'ll receive weekly Shabbat reminders.');
        setEmail('');
        setName('');
        setPhone('');
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="px-6 py-8">
      <div className="max-w-lg mx-auto bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-shabbat-gold/20">
        <h3 className="text-xl md:text-2xl font-bold text-shabbat-deepBlue mb-4 text-center">
          Get Weekly Shabbat Reminders
        </h3>
        <p className="text-shabbat-softBlue text-center mb-6">
          Receive a gentle reminder each Friday with this week's quote
        </p>

        {isSuccess ? (
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
            <svg
              className="w-12 h-12 mx-auto mb-3 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-green-800 font-medium">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-shabbat-deepBlue mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-shabbat-gold/30 focus:border-shabbat-gold focus:outline-none"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-shabbat-deepBlue mb-1">
                Name (optional)
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-shabbat-gold/30 focus:border-shabbat-gold focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-shabbat-deepBlue mb-1">
                Phone (optional, for SMS reminders)
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-shabbat-gold/30 focus:border-shabbat-gold focus:outline-none"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            {message && !isSuccess && (
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3 text-sm text-red-700">
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-shabbat-deepBlue text-white font-bold py-4 px-6 rounded-xl hover:bg-shabbat-softBlue transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Subscribing...' : 'Get Weekly Reminders'}
            </button>

            <p className="text-xs text-shabbat-softBlue text-center">
              We'll only send you Friday reminders. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
