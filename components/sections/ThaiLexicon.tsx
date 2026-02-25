'use client';

import { useTranslations } from 'next-intl';
import { Volume2 } from 'lucide-react';
import Image from 'next/image';

interface Phrase {
  thai: string;
  phonetic: string;
  translation: string;
}

const phrases: Phrase[] = [
  { thai: 'สวัสดี', phonetic: 'Sawatdee', translation: 'Hello / Goodbye' },
  { thai: 'ขอบคุณ', phonetic: 'Khop khun', translation: 'Thank you' },
  { thai: 'ไม่เป็นไร', phonetic: 'Mai pen rai', translation: 'No worries / You\'re welcome' },
  { thai: 'อร่อย', phonetic: 'Aroi', translation: 'Delicious' },
  { thai: 'เท่าไหร่', phonetic: 'Tao rai', translation: 'How much?' },
  { thai: 'แพงมาก', phonetic: 'Paeng maak', translation: 'Too expensive' },
  { thai: 'ลดหน่อย', phonetic: 'Lot noi', translation: 'Discount please' },
  { thai: 'ไม่เผ็ด', phonetic: 'Mai phet', translation: 'Not spicy' },
  { thai: 'เผ็ดนิดนึง', phonetic: 'Phet nit nung', translation: 'A little spicy' },
  { thai: 'ห้องน้ำอยู่ไหน', phonetic: 'Hong nam yoo nai', translation: 'Where is the bathroom?' },
  { thai: 'ช่วยด้วย', phonetic: 'Chuay duay', translation: 'Help!' },
  { thai: 'สนุก', phonetic: 'Sanuk', translation: 'Fun / Enjoyable' },
];

export function ThaiLexicon() {
  const t = useTranslations('thai');

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 bg-gradient-to-br from-cream via-white to-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-turquoise/10 text-turquoise text-sm font-semibold tracking-wide rounded-full mb-6">
            SURVIVAL THAI
          </div>
          <h2 className="text-display-md mb-6">
            Essential Thai for Farang
          </h2>
          <p className="text-body-lg text-muted max-w-2xl mx-auto">
            Master these phrases and you'll charm every local. Add <span className="font-semibold">ครับ (krap)</span> if you're male or <span className="font-semibold">ค่ะ (ka)</span> if you're female at the end for extra politeness.
          </p>
        </div>

        {/* Photo moment */}
        <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-16 hover-zoom">
          <Image
            src="/IMG_1458.jpeg"
            alt="Thai culture"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/20 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <p className="text-2xl md:text-3xl font-display italic">
              "Mai pen rai is the Thai philosophy: don't worry, be happy."
            </p>
          </div>
        </div>

        {/* Phrases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phrases.map((phrase, i) => (
            <div
              key={i}
              className="group bg-white rounded-xl p-6 border-2 border-turquoise/10 hover:border-turquoise/40 hover:shadow-xl transition-all duration-300 hover-lift"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="text-4xl font-display text-turquoise">
                  {phrase.thai}
                </div>
                <button
                  onClick={() => {
                    // Placeholder for text-to-speech
                    if ('speechSynthesis' in window) {
                      const utterance = new SpeechSynthesisUtterance(phrase.thai);
                      utterance.lang = 'th-TH';
                      speechSynthesis.speak(utterance);
                    }
                  }}
                  className="p-2 rounded-full bg-turquoise/10 text-turquoise hover:bg-turquoise hover:text-white transition-colors"
                  aria-label="Pronounce"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>
              <div className="text-lg font-semibold text-ink mb-1">
                {phrase.phonetic}
              </div>
              <div className="text-muted">
                {phrase.translation}
              </div>
            </div>
          ))}
        </div>

        {/* Pro tip */}
        <div className="mt-12 p-8 bg-gradient-to-r from-gold/10 to-coral/10 rounded-2xl border-2 border-gold/20">
          <div className="flex items-start gap-4">
            <div className="text-4xl">💡</div>
            <div>
              <h3 className="text-xl font-display font-semibold mb-2">Pro Tip</h3>
              <p className="text-muted leading-relaxed">
                Thais love when foreigners try to speak Thai, even if you butcher it. A simple "Sawatdee krap/ka" with a smile opens every door. The <span className="font-semibold">wai</span> (prayer-like hand gesture) is a sign of respect—use it when greeting elders or monks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
