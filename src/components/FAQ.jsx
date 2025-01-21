import React from "react";

function FAQ() {
  return (
    <section id="faq" className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Everything you need to know about your procurement office replacement
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {/* FAQ item 1 */}
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6">
            <button className="w-full text-left focus:outline-none">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  How does Bond replace a procurement office?
                </h3>
                <svg className="w-6 h-6 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="mt-3 text-neutral-600 dark:text-neutral-300">
                Bond handles all procurement tasks including supplier sourcing, negotiations, and
                administrative work, effectively replacing the need for an internal procurement
                team.
              </div>
            </button>
          </div>

          {/* FAQ item 2 */}
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6">
            <button className="w-full text-left focus:outline-none">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  Is Bond really free to use?
                </h3>
                <svg className="w-6 h-6 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="mt-3 text-neutral-600 dark:text-neutral-300">
                Yes, Bond is completely free to use with no subscription fees. We make money only
                when we save you money through our procurement solutions.
              </div>
            </button>
          </div>

          {/* FAQ item 3 */}
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6">
            <button className="w-full text-left focus:outline-none">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  How does the 30% cost saving work?
                </h3>
                <svg className="w-6 h-6 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="mt-3 text-neutral-600 dark:text-neutral-300">
                Through our reverse tendering system and expert negotiations, we leverage our
                network of suppliers to secure the best possible prices for your procurement needs.
              </div>
            </button>
          </div>

          {/* FAQ item 4 */}
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6">
            <button className="w-full text-left focus:outline-none">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  What types of companies can use Bond?
                </h3>
                <svg className="w-6 h-6 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="mt-3 text-neutral-600 dark:text-neutral-300">
                Bond is designed specifically for SMEs in Europe looking to optimize their
                procurement processes without maintaining an internal procurement department.
              </div>
            </button>
          </div>

          {/* FAQ item 5 */}
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6">
            <button className="w-full text-left focus:outline-none">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  How long does implementation take?
                </h3>
                <svg className="w-6 h-6 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="mt-3 text-neutral-600 dark:text-neutral-300">
                You can start using Bond immediately after signing up. Our procurement office
                replacement service requires no complex setup or integration periods.
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
