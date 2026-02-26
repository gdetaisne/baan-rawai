'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const experiences = [
  {
    id: 'beach',
    image: '/IMG_7234.jpeg',
  },
  {
    id: 'islands',
    image: '/IMG_3365.jpeg',
  },
  {
    id: 'culture',
    image: '/IMG_1458.jpeg',
  },
];

export function ExperienceGrid() {
  const t = useTranslations('experiences');

  return (
    <section className="py-32 md:py-40 px-8 md:px-12 lg:px-16 bg-white">
      <div className="max-w-container mx-auto">
        {/* Minimal Section Header */}
        <div className="text-center mb-20 md:mb-24">
          <span className="text-label text-muted">
            {t('label')}
          </span>
          <div className="h-px w-12 bg-ink/20 mx-auto mt-4 mb-12" />
          <h2 className="text-display-md text-ink">
            {t('title')}
          </h2>
        </div>

        {/* Minimal Experience Cards */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {experiences.map((exp) => (
            <div 
              key={exp.id}
              className="group relative h-[500px] md:h-[600px] overflow-hidden"
            >
              <Image
                src={exp.image}
                alt={t(`${exp.id}.title`)}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              
              {/* Minimal Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                <div className="transform transition-all duration-500 group-hover:-translate-y-2">
                  <h3 className="text-display-sm text-white mb-4">
                    {t(`${exp.id}.title`)}
                  </h3>
                  <p className="text-white/80 text-body leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {t(`${exp.id}.description`)}
                  </p>
                  
                  {/* Minimal accent line */}
                  <div className="w-12 h-px bg-white/40 mt-6 transition-all duration-500 group-hover:w-24 group-hover:bg-white/60" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
