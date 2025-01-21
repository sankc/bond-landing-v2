import React from "react";
import { useTranslation } from "react-i18next";

function FAQ() {
  const { t } = useTranslation();

  const faqItems = [
    {
      question: 'howDoesBondReplace',
      answer: 'howDoesBondReplaceAnswer'
    },
    {
      question: 'isBondFree',
      answer: 'isBondFreeAnswer'
    },
    {
      question: 'howDoesCostSaving',
      answer: 'howDoesCostSavingAnswer'
    },
    {
      question: 'whatCompanies',
      answer: 'whatCompaniesAnswer'
    },
    {
      question: 'implementationTime',
      answer: 'implementationTimeAnswer'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            {t('faqTitle')}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            {t('faqSubtitle')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6">
              <button className="w-full text-left focus:outline-none">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                    {t(item.question)}
                  </h3>
                  <svg 
                    className="w-6 h-6 text-neutral-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M19 9l-7 7-7-7" 
                    />
                  </svg>
                </div>
                <div className="mt-3 text-neutral-600 dark:text-neutral-300">
                  {t(item.answer)}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;