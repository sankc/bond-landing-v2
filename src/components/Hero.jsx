// src/components/Hero.jsx
import React from "react";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="bg-neutral-900 text-white pt-20 min-h-[70vh] flex items-center relative"
    >
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate__animated animate__fadeInDown">
            {t('heroTitle')}
            <br />
            <span className="text-blue-500">
              {t('heroSubtitle')}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
            {t('heroDescription')}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate__animated animate__fadeInUp animate__delay-2s">
            <a
              href="#demo"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transform transition hover:scale-105"
            >
              {t('bookDemo')}
            </a>
            <a
              href="#process"
              className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-4 px-8 rounded-lg text-lg border border-neutral-700 transform transition hover:scale-105"
            >
              {t('learnMore')}
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 flex justify-center space-x-8 text-gray-400 animate__animated animate__fadeIn animate__delay-3s">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500">30%</div>
              <div className="text-sm">{t('costSavings')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500">80%</div>
              <div className="text-sm">{t('timeSaved')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500">100%</div>
              <div className="text-sm">{t('freeToUse')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Overlay with pointer-events-none */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/20 to-neutral-900/20" />
        <div className="absolute top-0 left-0 w-full h-full">
          <svg
            className="absolute transform -translate-x-1/2 -translate-y-1/2 opacity-10"
            width="800"
            height="800"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;