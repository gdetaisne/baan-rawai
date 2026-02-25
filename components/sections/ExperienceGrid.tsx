'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const experiences = [
  {
    id: 'beach',
    image: '/IMG_7234.jpeg',
    color: '#0A4D68', // ocean
  },
  {
    id: 'islands',
    image: '/IMG_3365.jpeg',
    color: '#D4846C', // sunset
  },
  {
    id: 'culture',
    image: '/IMG_1458.jpeg',
    color: '#2C5530', // palm
  },
];

export function ExperienceGrid() {
  const t = useTranslations('experiences');

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[#D4846C] text-sm tracking-widest uppercase mb-4">
            {t('label')}
          </p>
          <h2 className="text-display-md font-display text-[#1A1A1A]">
            {t('title')}
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {experiences.map((exp) => (
            <div 
              key={exp.id}
              className="group relative h-[450px] md:h-[500px] overflow-hidden rounded-sm cursor-pointer hover-zoom"
            >
              <Image
                src={exp.image}
                alt={t(`${exp.id}.title`)}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="transform transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
                  <h3 className="text-3xl font-display text-white mb-3">
                    {t(`${exp.id}.title`)}
                  </h3>
                  <p className="text-white/90 leading-relaxed mb-4">
                    {t(`${exp.id}.description`)}
                  </p>
                  
                  {/* Accent line */}
                  <div 
                    className="w-16 h-1 transition-all duration-500 group-hover:w-24"
                    style={{ backgroundColor: exp.color }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
