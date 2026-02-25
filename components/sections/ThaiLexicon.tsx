'use client';

import { useTranslations } from 'next-intl';
import { Volume2 } from 'lucide-react';

const thaiPhrases = [
  {
    thai: 'สวัสดี',
    phonetic: 'Sawadee',
    english: 'Hello / Goodbye',
    french: 'Bonjour / Au revoir',
  },
  {
    thai: 'ขอบคุณ',
    phonetic: 'Khop khun',
    english: 'Thank you',
    french: 'Merci',
  },
  {
    thai: 'ไม่เป็นไร',
    phonetic: 'Mai pen rai',
    english: 'No problem / You\'re welcome',
    french: 'Pas de problème / De rien',
  },
  {
    thai: 'อร่อย',
    phonetic: 'Aroi',
    english: 'Delicious',
    french: 'Délicieux',
  },
  {
    thai: 'เท่าไหร่',
    phonetic: 'Tao rai?',
    english: 'How much?',
    french: 'Combien?',
  },
  {
    thai: 'แพงไป',
    phonetic: 'Paeng pai',
    english: 'Too expensive',
    french: 'Trop cher',
  },
  {
    thai: 'ไม่เอาเผ็ด',
    phonetic: 'Mai ao phet',
    english: 'Not spicy',
    french: 'Pas piquant',
  },
  {
    thai: 'เบียร์เย็นๆ',
    phonetic: 'Beer yen yen',
    english: 'Cold beer',
    french: 'Bière fraîche',
  },
  {
    thai: 'ที่นี่สวยมาก',
    phonetic: 'Tee nee suay mak',
    english: 'This place is beautiful',
    french: 'Cet endroit est magnifique',
  },
  {
    thai: 'ช่วยหน่อย',
    phonetic: 'Chuay noi',
    english: 'Help please',
    french: 'Aidez-moi s\'il vous plaît',
  },
  {
    thai: 'ห้องน้ำอยู่ไหน',
    phonetic: 'Hong nam yu nai?',
    english: 'Where is the bathroom?',
    french: 'Où sont les toilettes?',
  },
  {
    thai: 'ส่งคำนวณ',
    phonetic: 'Song bin',
    english: 'Check please',
    french: 'L\'addition s\'il vous plaît',
  },
];

export function ThaiLexicon() {
  const t = useTranslations('thai');

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-br from-ocean/5 via-paper to-sunset/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-palm/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-sunset/10 to-transparent rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-ocean/10 to-sunset/10 backdrop-blur-sm rounded-full mb-6">
            <span className="text-2xl">🇹🇭</span>
            <span className="text-sm tracking-widest uppercase text-ocean font-semibold">Thai for Farang</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold text-[#1A1A1A] mb-6">
            {t('title')}
          </h2>
          
          <p className="text-xl text-[#737373] max-w-2xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>

        {/* Phrases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {thaiPhrases.map((phrase, index) => (
            <div
              key={index}
              className="group relative p-6 bg-white/80 backdrop-blur-sm border border-[#E8DCC4] rounded-2xl hover:shadow-2xl hover:shadow-ocean/10 hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-ocean/5 to-sunset/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                {/* Thai */}
                <div className="text-4xl font-bold text-ocean mb-3 font-display">
                  {phrase.thai}
                </div>
                
                {/* Phonetic */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-medium text-[#1A1A1A] italic">
                    {phrase.phonetic}
                  </span>
                  <button 
                    className="p-1.5 hover:bg-ocean/10 rounded-full transition-colors"
                    onClick={() => {
                      // Optional: Add text-to-speech
                      if ('speechSynthesis' in window) {
                        const utterance = new SpeechSynthesisUtterance(phrase.thai);
                        utterance.lang = 'th-TH';
                        window.speechSynthesis.speak(utterance);
                      }
                    }}
                  >
                    <Volume2 className="w-4 h-4 text-ocean" />
                  </button>
                </div>
                
                {/* Translations */}
                <div className="space-y-1.5 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-[#D4846C] font-medium">EN:</span>
                    <span className="text-[#737373]">{phrase.english}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#D4846C] font-medium">FR:</span>
                    <span className="text-[#737373]">{phrase.french}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pro Tip */}
        <div className="mt-12 p-8 bg-gradient-to-r from-gold/10 via-sunset/10 to-gold/10 border border-gold/30 rounded-2xl text-center">
          <p className="text-lg text-[#1A1A1A] leading-relaxed">
            <span className="font-bold text-gold">Pro tip:</span> Add{' '}
            <span className="font-semibold">"khrap" (ครับ)</span> if you're male or{' '}
            <span className="font-semibold">"kha" (ค่ะ)</span> if you're female at the end of sentences for extra politeness!
          </p>
        </div>
      </div>
    </section>
  );
}
