import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="footer" className="bg-neutral-100 dark:bg-neutral-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                Bond
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {t('footerTagline')}
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">
                {t('contact')}
              </h4>
              <a
                href="mailto:info@bondcommerce.store"
                className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                info@bondcommerce.store
              </a>
            </div>

            {/* Legal Info */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">
                {t('legal')}
              </h4>
              <p className="text-neutral-600 dark:text-neutral-400">
                {t('privacyNotice')}
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-neutral-600 dark:text-neutral-400">
                {t('allRightsReserved')}
              </div>
              <div className="mt-4 md:mt-0 flex space-x-6">
                <a
                  href="#"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {t('privacyPolicy')}
                </a>
                <a
                  href="#"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {t('termsOfService')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;