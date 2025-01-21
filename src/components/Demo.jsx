import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { supabase } from "../supabaseClient";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Demo() {
  const { t } = useTranslation();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    if (!emailRegex.test(email)) {
      setLoading(false);
      setStatus("invalidEmail");
      return;
    }

    const { data, error } = await supabase.from("waitlist").insert([
      {
        full_name: fullName,
        email: email,
        company: company,
        message: message,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error(error);
      setStatus("error");
    } else {
      setFullName("");
      setEmail("");
      setCompany("");
      setMessage("");
      setStatus("success");
    }
  };

  return (
    <section id="demo" className="bg-neutral-50 dark:bg-neutral-900 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            {t('joinFuture')}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            {t('firstToExperience')}
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-white dark:bg-neutral-800 rounded-lg shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-200"
              >
                {t('fullName')}
              </label>
              <input
                type="text"
                id="fullName"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1 block w-full px-4 py-3 
                           border border-neutral-300 dark:border-neutral-600 
                           rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500
                           bg-white dark:bg-neutral-700 dark:text-white"
                placeholder={t('fullNamePlaceholder')}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-200"
              >
                {t('emailAddress')}
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-3
                           border border-neutral-300 dark:border-neutral-600
                           rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500
                           bg-white dark:bg-neutral-700 dark:text-white"
                placeholder={t('emailPlaceholder')}
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-200"
              >
                {t('companyName')}
              </label>
              <input
                type="text"
                id="company"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="mt-1 block w-full px-4 py-3 
                           border border-neutral-300 dark:border-neutral-600
                           rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500
                           bg-white dark:bg-neutral-700 dark:text-white"
                placeholder={t('companyPlaceholder')}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-200"
              >
                {t('messageOptional')}
              </label>
              <textarea
                id="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full px-4 py-3 
                           border border-neutral-300 dark:border-neutral-600
                           rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500
                           bg-white dark:bg-neutral-700 dark:text-white"
                placeholder={t('messagePlaceholder')}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 
                         rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? t('submitting') : t('bookDemo')}
            </button>

            {/* Status Messages */}
            {status === "success" && (
              <div className="text-center text-green-600 font-semibold">
                {t('successMessage')}
              </div>
            )}
            {status === "error" && (
              <div className="text-center text-red-600 font-semibold">
                {t('errorMessage')}
              </div>
            )}
            {status === "invalidEmail" && (
              <div className="text-center text-red-600 font-semibold">
                {t('invalidEmailMessage')}
              </div>
            )}

            <p className="text-center text-sm text-neutral-500 dark:text-neutral-400">
              {t('privacyNotice')}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Demo;