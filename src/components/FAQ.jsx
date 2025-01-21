import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function FAQ() {
  const { t } = useTranslation();
  // State to track which FAQ item is currently open
  const [openIndex, setOpenIndex] = useState(null);

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

  // Toggle function to handle opening/closing FAQ items
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            <div 
              key={index} 
              className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden transition-all duration-200 ease-in-out"
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full text-left focus:outline-none p-6 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                    {t(item.question)}
                  </h3>
                  <svg 
                    className={`w-6 h-6 text-neutral-500 transition-transform duration-200 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
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
              </button>
              {/* Answer section with smooth height transition */}
              <div 
                className={`overflow-hidden transition-all duration-200 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0 text-neutral-600 dark:text-neutral-300">
                  {t(item.answer)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;