import React from "react";

function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 animate__animated animate__fadeIn">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Your cost-effective procurement office replacement
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-neutral-50 rounded-2xl shadow-xl overflow-hidden animate__animated animate__fadeInUp">
            <div className="bg-blue-600 p-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-2">Free to Use</h3>
              <p className="text-blue-100">No subscription fees. No hidden costs.</p>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-center mb-8">
                <span className="text-6xl font-bold text-neutral-900">€0</span>
                <span className="text-neutral-500 ml-2">/forever</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-700">Full procurement office replacement</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-700">Unlimited requests</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-700">Supplier negotiation &amp; management</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-700">Best price guarantee</span>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="#waitlist"
                  className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 animate__animated animate__pulse animate__infinite"
                >
                  Join Waitlist Now
                </a>
                <p className="mt-4 text-sm text-neutral-500">
                  A truly cost-effective procurement office replacement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
