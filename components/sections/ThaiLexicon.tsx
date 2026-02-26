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
    <section className="py-32 md:py-40 px-8 md:px-12 lg:px-16 bg-paper">
      <div className="max-w-container mx-auto">
        {/* Minimal Header */}
        <div className="text-center mb-20 md:mb-24">
          <span className="text-label text-muted">
            THAI FOR FARANG
          </span>
          <div className="h-px w-12 bg-ink/20 mx-auto mt-4 mb-12" />
          
          <h2 className="text-display-md text-ink mb-8">
            {t('title')}
          </h2>
          
          <p className="text-body-lg text-muted max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        {/* Minimal Phrases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {thaiPhrases.map((phrase, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white border border-black/5 hover:border-black/10 transition-all duration-500"
            >
              <div className="relative">
                {/* Thai */}
                <div className="text-4xl text-ink mb-4 font-display">
                  {phrase.thai}
                </div>
                
                {/* Phonetic */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-lg text-ink/60 italic font-light">
                    {phrase.phonetic}
                  </span>
                  <button 
                    className="p-1.5 hover:opacity-60 transition-opacity duration-300"
                    onClick={() => {
                      // Optional: Add text-to-speech
                      if ('speechSynthesis' in window) {
                        const utterance = new SpeechSynthesisUtterance(phrase.thai);
                        utterance.lang = 'th-TH';
                        window.speechSynthesis.speak(utterance);
                      }
                    }}
                  >
                    <Volume2 className="w-4 h-4 text-ink/40" />
                  </button>
                </div>
                
                {/* Translations */}
                <div className="space-y-2 text-sm text-muted">
                  <div className="flex items-start gap-2">
                    <span className="text-label text-ink/40">EN:</span>
                    <span>{phrase.english}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-label text-ink/40">FR:</span>
                    <span>{phrase.french}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Pro Tip */}
        <div className="mt-16 p-8 md:p-10 bg-white border border-black/5 text-center max-w-3xl mx-auto">
          <p className="text-body text-muted">
            <span className="text-ink font-normal">Pro tip:</span> Add{' '}
            <span className="text-ink">"khrap" (ครับ)</span> if you're male or{' '}
            <span className="text-ink">"kha" (ค่ะ)</span> if you're female at the end of sentences for extra politeness.
          </p>
        </div>
      </div>
    </section>
  );
}
