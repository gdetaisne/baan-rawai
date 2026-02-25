import { useTranslations, useLocale } from 'next-intl';
import { Container } from '@/components/ui/Container';

export function Welcome() {
  const locale = useLocale();

  return (
    <section id="welcome" className="py-32 bg-background">
      <Container size="narrow" className="text-center">
        <div className="w-24 h-px bg-ink-green/30 mx-auto mb-12" />
        
        {locale === 'fr' ? (
          <>
            <p className="text-lg md:text-xl font-light leading-relaxed text-ink-green/70 italic mb-8">
              "Notre maison, c'est la vôtre"
            </p>
            
            <p className="text-base md:text-lg leading-loose text-dusty-blue max-w-2xl mx-auto">
              Bienvenue chez nous à Rawai. On a créé ce petit guide pour que vous profitiez au max de votre séjour. 
              Nos restos préférés, les meilleures plages, comment éviter les pièges à touristes... 
              Bref, tout ce qu'on aurait aimé savoir en arrivant.
            </p>
            
            <p className="mt-6 text-base md:text-lg leading-loose text-dusty-blue max-w-2xl mx-auto">
              Faites comme chez vous. Vraiment.
            </p>
          </>
        ) : (
          <>
            <p className="text-lg md:text-xl font-light leading-relaxed text-ink-green/70 italic mb-8">
              "Our home is your home"
            </p>
            
            <p className="text-base md:text-lg leading-loose text-dusty-blue max-w-2xl mx-auto">
              Welcome to our place in Rawai. We made this little guide so you can make the most of your stay. 
              Our favorite restaurants, the best beaches, how to avoid tourist traps... 
              Basically everything we wish we'd known when we first arrived.
            </p>
            
            <p className="mt-6 text-base md:text-lg leading-loose text-dusty-blue max-w-2xl mx-auto">
              Make yourself at home. For real.
            </p>
          </>
        )}
      </Container>
    </section>
  );
}
