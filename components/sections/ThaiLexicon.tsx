'use client';

import { useTranslations } from 'next-intl';
import { Volume2 } from 'lucide-react';

const thaiPhrases = [
  {
    thai: 'สวัสดี',
    phonetic: 'Sawadee kha / khrap',
    english: 'Hello / Goodbye',
    french: 'Bonjour / Au revoir',
    context: 'Add kha (female) or khrap (male). Always smile.',
  },
  {
    thai: 'ขอบคุณ',
    phonetic: 'Khop khun',
    english: 'Thank you',
    french: 'Merci',
    context: 'The single most useful word. Use it constantly.',
  },
  {
    thai: 'ไม่เป็นไร',
    phonetic: 'Mai pen rai',
    english: "No worries",
    french: 'Pas de problème',
    context: 'The Thai philosophy in three words. Relax.',
  },
  {
    thai: 'อร่อย',
    phonetic: 'Aroi mak',
    english: 'Very delicious',
    french: 'Vraiment délicieux',
    context: 'Say this after every meal. It will make someone\'s day.',
  },
  {
    thai: 'เท่าไหร่',
    phonetic: 'Tao rai?',
    english: 'How much?',
    french: 'Combien ?',
    context: 'Essential at every market and tuk-tuk negotiation.',
  },
  {
    thai: 'แพงไป',
    phonetic: 'Paeng pai',
    english: 'Too expensive',
    french: 'Trop cher',
    context: 'Smile when you say it. Always smile.',
  },
  {
    thai: 'ไม่เอาเผ็ด',
    phonetic: 'Mai ao phet',
    english: 'Not spicy please',
    french: 'Pas piquant s\'il vous plaît',
    context: 'Thai "not spicy" is still spicy. Say it twice.',
  },
  {
    thai: 'เบียร์เย็นๆ',
    phonetic: 'Beer yen yen',
    english: 'Very cold beer',
    french: 'Bière bien fraîche',
    context: 'Possibly the most important phrase on this list.',
  },
  {
    thai: 'ส่งบิล',
    phonetic: 'Song bin',
    english: 'Check please',
    french: "L'addition s'il vous plaît",
    context: 'Don\'t wait — catching a waiter\'s eye can take a while.',
  },
];

export function ThaiLexicon() {
  const t = useTranslations('thai');

  return (
    <section className="section-padding bg-paper border-t border-border">
      <div className="max-w-content mx-auto">
        {/* Header */}
        <div className="section-header">
          <p className="text-label text-accent mb-8">THAI FOR FARANG</p>
          <h2 className="text-display-md text-ink mb-6">{t('title')}</h2>
          <p className="text-body-lg text-muted max-w-xl">{t('description')}</p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {thaiPhrases.map((phrase, i) => (
            <div key={i} className="bg-surface p-8 group hover:bg-background transition-colors duration-300 luxury-hover">
              {/* Thai */}
              <div
                className="text-4xl text-ink mb-3"
                style={{ fontFamily: '"Ade Display", serif', fontWeight: 400 }}
              >
                {phrase.thai}
              </div>

              {/* Phonetic */}
              <div className="flex items-center gap-2 mb-5">
                <span
                  className="text-lg text-accent italic"
                  style={{ fontFamily: '"Ade Display", serif', fontWeight: 400 }}
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
                  className="text-muted/50 hover:text-accent transition-colors"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              {/* Translations */}
              <div className="space-y-1 text-sm text-muted">
                <div className="flex gap-2">
                  <span className="text-[9px] tracking-[0.15em] uppercase text-accent/70 mt-0.5 min-w-[18px]"
                        style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300 }}>EN</span>
                  <span>{phrase.english}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[9px] tracking-[0.15em] uppercase text-accent/70 mt-0.5 min-w-[18px]"
                        style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 300 }}>FR</span>
                  <span>{phrase.french}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pro tip */}
        <div className="mt-px bg-border">
          <p className="bg-background p-8 text-sm text-muted text-center">
            <span className="text-ink" style={{ fontFamily: '"Ade Display", serif' }}>Pro tip — </span>
            Add <em>"khrap" (ครับ)</em> if male or <em>"kha" (ค่ะ)</em> if female at the end of sentences for extra politeness.
          </p>
        </div>
      </div>
    </section>
  );
}
