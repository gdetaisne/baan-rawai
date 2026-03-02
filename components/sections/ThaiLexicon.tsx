'use client';

import { useTranslations } from 'next-intl';
import { Volume2 } from 'lucide-react';

const thaiPhrases = [
  { thai: 'สวัสดี',          phonetic: 'Sawadee',          english: 'Hello / Goodbye',              french: 'Bonjour / Au revoir' },
  { thai: 'ขอบคุณ',          phonetic: 'Khop khun',         english: 'Thank you',                    french: 'Merci' },
  { thai: 'ไม่เป็นไร',       phonetic: 'Mai pen rai',       english: "No problem / You're welcome",  french: 'Pas de problème / De rien' },
  { thai: 'อร่อย',           phonetic: 'Aroi',              english: 'Delicious',                    french: 'Délicieux' },
  { thai: 'เท่าไหร่',        phonetic: 'Tao rai?',          english: 'How much?',                    french: 'Combien?' },
  { thai: 'แพงไป',           phonetic: 'Paeng pai',         english: 'Too expensive',                french: 'Trop cher' },
  { thai: 'ไม่เอาเผ็ด',     phonetic: 'Mai ao phet',       english: 'Not spicy',                    french: 'Pas piquant' },
  { thai: 'เบียร์เย็นๆ',    phonetic: 'Beer yen yen',      english: 'Cold beer',                    french: 'Bière fraîche' },
  { thai: 'ที่นี่สวยมาก',   phonetic: 'Tee nee suay mak',  english: 'This place is beautiful',      french: 'Cet endroit est magnifique' },
  { thai: 'ช่วยหน่อย',      phonetic: 'Chuay noi',         english: 'Help please',                  french: "Aidez-moi s'il vous plaît" },
  { thai: 'ห้องน้ำอยู่ไหน', phonetic: 'Hong nam yu nai?',  english: 'Where is the bathroom?',       french: 'Où sont les toilettes?' },
  { thai: 'ส่งคำนวณ',       phonetic: 'Song bin',          english: 'Check please',                 french: "L'addition s'il vous plaît" },
];

export function ThaiLexicon() {
  const t = useTranslations('thai');

  return (
    <section className="section-padding bg-[#F5F5F3] border-t border-[#DDE8EA]">
      <div className="max-w-content mx-auto">
        {/* Header */}
        <div className="section-header text-center">
          <p className="text-label text-[#1E7A8C] tracking-[0.25em] mb-8">THAI FOR FARANG</p>
          <h2 className="text-display-md text-[#1A1916] mb-6">{t('title')}</h2>
          <p className="text-body-lg text-[#7A766E] max-w-xl mx-auto">{t('description')}</p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#DDE8EA]">
          {thaiPhrases.map((phrase, i) => (
            <div key={i} className="bg-white p-8 group hover:bg-[#F9F9F7] transition-colors duration-300">
              {/* Thai */}
              <div
                className="text-4xl text-[#1A1916] mb-3"
                style={{ fontFamily: 'Gloock, serif', fontWeight: 400 }}
              >
                {phrase.thai}
              </div>

              {/* Phonetic */}
              <div className="flex items-center gap-2 mb-5">
                <span
                  className="text-lg text-[#1E7A8C] italic"
                  style={{ fontFamily: 'Gloock, serif', fontWeight: 400 }}
                >
                  {phrase.phonetic}
                </span>
                <button
                  onClick={() => {
                    if ('speechSynthesis' in window) {
                      const u = new SpeechSynthesisUtterance(phrase.thai);
                      u.lang = 'th-TH';
                      window.speechSynthesis.speak(u);
                    }
                  }}
                  className="text-[#B8CED3] hover:text-[#1E7A8C] transition-colors"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              {/* Translations */}
              <div className="space-y-1 text-sm text-[#7A766E]">
                <div className="flex gap-2">
                  <span className="text-[9px] tracking-[0.15em] uppercase text-[#1E7A8C]/60 mt-0.5 min-w-[18px]"
                        style={{ fontFamily: '"DM Sans", sans-serif' }}>EN</span>
                  <span>{phrase.english}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[9px] tracking-[0.15em] uppercase text-[#1E7A8C]/60 mt-0.5 min-w-[18px]"
                        style={{ fontFamily: '"DM Sans", sans-serif' }}>FR</span>
                  <span>{phrase.french}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pro tip */}
        <div className="mt-px bg-[#DDE8EA]">
          <p className="bg-[#F9F9F7] p-8 text-sm text-[#7A766E] text-center">
            <span className="text-[#1A1916]" style={{ fontFamily: 'Gloock, serif' }}>Pro tip — </span>
            Add <em>"khrap" (ครับ)</em> if male or <em>"kha" (ค่ะ)</em> if female at the end of sentences for extra politeness.
          </p>
        </div>
      </div>
    </section>
  );
}
