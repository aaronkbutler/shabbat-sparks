import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen pb-12">
      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-shabbat-deepBlue mb-4">
            About Shabbat Sparks
          </h1>
          <p className="text-lg text-shabbat-softBlue">
            Turning a weekly ritual into lasting impact
          </p>
        </header>

        {/* Main content */}
        <div className="space-y-8 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-shabbat-gold/20">
          <section>
            <h2 className="text-2xl font-bold text-shabbat-deepBlue mb-4">
              The Idea
            </h2>
            <p className="text-shabbat-deepBlue leading-relaxed mb-4">
              Every Friday night, thousands of Jewish households light Shabbat candles. 
              Shabbat Sparks transforms that moment of light into a weekly act of tzedakah 
              for neighbors in need.
            </p>
            <p className="text-shabbat-deepBlue leading-relaxed">
              With a simple, mobile-friendly webpage, you tap to "light" a virtual candle, 
              receive a short teaching or quote for reflection, and are invited with one 
              click to make a small gift that becomes immediate, dignified support through 
              Yad Chessed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-shabbat-deepBlue mb-4">
              How It Works
            </h2>
            <ol className="space-y-4 text-shabbat-deepBlue">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-shabbat-gold rounded-full flex items-center justify-center font-bold text-shabbat-deepBlue">
                  1
                </span>
                <div>
                  <strong>Light your virtual candle</strong> - Tap the flame when you 
                  light your real Shabbat candles
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-shabbat-gold rounded-full flex items-center justify-center font-bold text-shabbat-deepBlue">
                  2
                </span>
                <div>
                  <strong>Reflect</strong> - Read this week's quote or teaching about 
                  kindness and community
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-shabbat-gold rounded-full flex items-center justify-center font-bold text-shabbat-deepBlue">
                  3
                </span>
                <div>
                  <strong>Give</strong> - With one tap, donate to help someone in need. 
                  As little as $5 makes a difference.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-shabbat-gold rounded-full flex items-center justify-center font-bold text-shabbat-deepBlue">
                  4
                </span>
                <div>
                  <strong>See your impact</strong> - Track your weekly streak and total 
                  contribution to the community
                </div>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-shabbat-deepBlue mb-4">
              Where Your Gift Goes
            </h2>
            <p className="text-shabbat-deepBlue leading-relaxed mb-4">
              Every dollar donated through Shabbat Sparks goes directly to{' '}
              <a
                href="https://yadchessed.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-shabbat-flame underline font-medium"
              >
                Yad Chessed
              </a>
              , an organization dedicated to helping Jewish families and individuals 
              facing financial hardship.
            </p>
            <p className="text-shabbat-deepBlue leading-relaxed">
              Your donations primarily become:
            </p>
            <ul className="mt-4 space-y-2 text-shabbat-deepBlue ml-6 list-disc">
              <li>Supermarket gift cards so families can shop with dignity</li>
              <li>Emergency financial assistance for rent, utilities, and medical expenses</li>
              <li>Support for families to celebrate Shabbat and Jewish holidays</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-shabbat-deepBlue mb-4">
              Why Weekly Giving?
            </h2>
            <p className="text-shabbat-deepBlue leading-relaxed mb-4">
              Small, consistent gifts create reliable support for our community. When 
              hundreds of people give $5-$18 every week, it becomes a sustainable safety 
              net for families in crisis.
            </p>
            <p className="text-shabbat-deepBlue leading-relaxed">
              Plus, connecting tzedakah to your Shabbat ritual makes giving a meaningful 
              part of your weekly rhythm—not an afterthought, but a core practice of 
              Jewish life.
            </p>
          </section>

          <section className="bg-shabbat-warmWhite rounded-xl p-6 border-2 border-shabbat-gold/30">
            <h2 className="text-xl font-bold text-shabbat-deepBlue mb-3">
              "A little light drives away much darkness."
            </h2>
            <p className="text-shabbat-softBlue italic">
              Together, we're creating a community where no one faces hardship alone.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-shabbat-flame to-shabbat-gold text-white font-bold text-lg py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            Light Your Candle This Week
          </Link>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12">
          <Link
            href="/"
            className="text-shabbat-softBlue hover:text-shabbat-deepBlue underline"
          >
            ← Back to Shabbat Sparks
          </Link>
        </footer>
      </div>
    </main>
  );
}
