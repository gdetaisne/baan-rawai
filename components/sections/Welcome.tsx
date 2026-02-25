import { useLocale } from 'next-intl';
import { Container } from '@/components/ui/Container';

export function Welcome() {
  const locale = useLocale();

  return (
    <section id="welcome" className="py-32 md:py-40 bg-cream-100">
      <Container size="narrow" className="text-center">
        {locale === 'fr' ? (
          <>
            <p className="text-2xl md:text-3xl font-display font-light text-ink/60 italic mb-12 leading-relaxed">
              "Notre maison, c'est la vôtre"
            </p>
            
            <div className="prose prose-lg mx-auto">
              <p className="text-base md:text-lg text-stone-600 leading-loose mb-6">
                Bienvenue chez nous à Rawai. On a créé ce petit guide pour que vous profitiez au max de votre séjour.
              </p>
              
              <p className="text-base md:text-lg text-stone-600 leading-loose">
                Nos restos préférés, les meilleures plages, comment éviter les pièges à touristes... 
                Bref, tout ce qu'on aurait aimé savoir en arrivant.
              </p>
            </div>
          </>
        ) : (
          <>
            <p className="text-2xl md:text-3xl font-display font-light text-ink/60 italic mb-12 leading-relaxed">
              "Our home is your home"
            </p>
            
            <div className="prose prose-lg mx-auto">
              <p className="text-base md:text-lg text-stone-600 leading-loose mb-6">
                Welcome to our place in Rawai. We made this little guide so you can make the most of your stay.
              </p>
              
              <p className="text-base md:text-lg text-stone-600 leading-loose">
                Our favorite restaurants, the best beaches, how to avoid tourist traps... 
                Basically everything we wish we'd known when we first arrived.
              </p>
            </div>
          </>
        )}

        <div className="flex items-center justify-center gap-2 mt-16">
          <div className="w-1 h-1 rounded-full bg-stone-300" />
          <div className="w-1 h-1 rounded-full bg-stone-300" />
          <div className="w-1 h-1 rounded-full bg-stone-300" />
          <div className="w-1 h-1 rounded-full bg-stone-300" />
        </div>
      </Container>
    </section>
  );
}
