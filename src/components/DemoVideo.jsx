// src/components/DemoVideo.jsx
import React from "react";
import { useTranslation } from "react-i18next";

function DemoVideo() {
  const { t } = useTranslation();

  return (
    <section id="demo-video" className="py-20 bg-white dark:bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4 animate__animated animate__fadeIn">
            {t('watchDemo')}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            {t('demoDescription')}
          </p>
        </div>

        {/* Video Container with responsive padding */}
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full overflow-hidden rounded-xl shadow-2xl bg-neutral-900" style={{ paddingTop: '56.25%' }}>
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/VtLM6uV1O68?si=VvE6RKnFRrL_tS7w" 
              title="Bond Demo Video"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          {/* Optional: Add a call-to-action button below the video */}
          <div className="mt-8 text-center">
            <a
              href="#demo"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105"
            >
              {t('getStarted')}
              <svg 
                className="w-5 h-5 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DemoVideo;