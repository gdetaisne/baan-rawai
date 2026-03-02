'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const experiences = [
  { id: 'beach',   image: '/IMG_7234.jpeg' },
  { id: 'islands', image: '/IMG_3365.jpeg' },
  { id: 'culture', image: '/IMG_1458.jpeg' },
];

export function ExperienceGrid() {
  const t = useTranslations('experiences');

  return (
    <section className="bg-[#F5F5F3]">
      {/* Section header */}
      <div className="section-padding pb-0">
        <div className="max-w-content mx-auto text-center section-header">
          <p className="text-label text-[#1E7A8C] tracking-[0.25em] mb-8">{t('label')}</p>
          <h2 className="text-display-md text-[#1A1916]">{t('title')}</h2>
        </div>
      </div>

      {/* Full-width 3-column grid */}
      <div className="grid md:grid-cols-3">
        {experiences.map((exp) => (
          <div key={exp.id} className="group relative h-[560px] md:h-[680px] img-zoom">
            <Image
              src={exp.image}
              alt={t(`${exp.id}.title`)}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />

            {/* Overlay — only bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              {/* Accent line */}
              <div className="w-8 h-px bg-[#1E7A8C] mb-4 transition-all duration-700 group-hover:w-16" />
              <h3 className="text-display-sm text-white mb-3">
                {t(`${exp.id}.title`)}
              </h3>
              <p className="text-sm text-white/0 group-hover:text-white/80 transition-all duration-500 leading-relaxed max-w-xs"
                 style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300 }}>
                {t(`${exp.id}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
