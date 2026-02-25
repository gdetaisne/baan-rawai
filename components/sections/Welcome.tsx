import { useLocale } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Waves, Sun, Palmtree } from 'lucide-react';

export function Welcome() {
  const locale = useLocale();

  return (
    <section id="welcome" className="py-24 bg-sand-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 text-ocean-200/20">
        <Sun className="w-64 h-64" />
      </div>

      <Container className="relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-ocean-50 rounded-full text-ocean-600 text-sm font-fun tracking-wider">
              <Waves className="w-4 h-4" />
              {locale === 'fr' ? 'Bienvenue' : 'Welcome'}
            </div>

            {locale === 'fr' ? (
              <>
                <h2 className="text-5xl md:text-6xl font-display text-dark mb-6 leading-tight">
                  Faites comme{' '}
                  <span className="text-ocean-500 italic">chez vous</span>
                </h2>
                
                <p className="text-lg text-dark/70 leading-relaxed mb-6">
                  Bienvenue chez nous à Rawai. On a créé ce petit guide pour que vous profitiez au max de votre séjour.
                </p>
                
                <p className="text-lg text-dark/70 leading-relaxed">
                  Nos restos préférés, les meilleures plages, comment éviter les pièges à touristes... 
                  Bref, tout ce qu'on aurait aimé savoir en arrivant.
                </p>

                <div className="mt-8 p-6 bg-gradient-ocean rounded-2xl shadow-soft">
                  <p className="text-white text-xl font-fun italic">
                    "Notre maison, c'est la vôtre. Vraiment."
                  </p>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-5xl md:text-6xl font-display text-dark mb-6 leading-tight">
                  Make yourself{' '}
                  <span className="text-ocean-500 italic">at home</span>
                </h2>
                
                <p className="text-lg text-dark/70 leading-relaxed mb-6">
                  Welcome to our place in Rawai. We made this little guide so you can make the most of your stay.
                </p>
                
                <p className="text-lg text-dark/70 leading-relaxed">
                  Our favorite restaurants, the best beaches, how to avoid tourist traps... 
                  Basically everything we wish we'd known when we first arrived.
                </p>

                <div className="mt-8 p-6 bg-gradient-ocean rounded-2xl shadow-soft">
                  <p className="text-white text-xl font-fun italic">
                    "Our home is your home. For real."
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Right: Fun stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-soft text-center transform hover:scale-105 transition-transform">
              <div className="text-4xl font-display text-ocean-500 mb-2">5min</div>
              <div className="text-sm text-dark/60 font-fun">to beach</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-soft text-center transform hover:scale-105 transition-transform">
              <div className="text-4xl font-display text-sunset-500 mb-2">365</div>
              <div className="text-sm text-dark/60 font-fun">days of sun</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-soft text-center transform hover:scale-105 transition-transform">
              <div className="text-4xl font-display text-palm mb-2">∞</div>
              <div className="text-sm text-dark/60 font-fun">good vibes</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-soft text-center transform hover:scale-105 transition-transform">
              <div className="text-4xl font-display text-sunset-400 mb-2">0</div>
              <div className="text-sm text-dark/60 font-fun">stress</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
