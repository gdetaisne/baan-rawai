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
    <section className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-white via-paper to-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-ocean/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sunset/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header - 2025 Style */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-ocean/10 to-sunset/10 backdrop-blur-sm rounded-full mb-6">
            <span className="text-sm tracking-widest uppercase text-ocean font-semibold">
              {t('label')}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-[#1A1A1A] mb-4">
            {t('title')}
          </h2>
        </div>

        {/* Experience Cards - Enhanced with video placeholders */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {experiences.map((exp) => (
            <div 
              key={exp.id}
              className="group relative h-[450px] md:h-[550px] overflow-hidden rounded-3xl cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={exp.image}
                alt={t(`${exp.id}.title`)}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              
              {/* Gradient Overlay - More vibrant */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to top, ${exp.color}dd 0%, rgba(0,0,0,0.6) 50%, transparent 100%)`
                }}
              />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="transform transition-all duration-500 group-hover:-translate-y-2">
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
                    {t(`${exp.id}.title`)}
                  </h3>
                  <p className="text-white/95 text-lg leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {t(`${exp.id}.description`)}
                  </p>
                  
                  {/* Accent line with glow */}
                  <div 
                    className="w-16 h-1.5 rounded-full transition-all duration-500 group-hover:w-32 shadow-lg"
                    style={{ 
                      backgroundColor: exp.color,
                      boxShadow: `0 0 20px ${exp.color}80`
                    }}
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
