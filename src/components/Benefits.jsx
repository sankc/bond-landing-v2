import React from "react";

function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 animate__animated animate__fadeIn">
            Why Choose Bond as Your Procurement Office Replacement?
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Experience the future of procurement management with our comprehensive solution
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="bg-neutral-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp">
            <div className="text-blue-600 mb-4">
              {/* Icon */}
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Save Up to 30% on Costs</h3>
            <p className="text-neutral-600">
              Our negotiation and reverse tendering system delivers substantial savings—just like a
              procurement office replacement should.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-neutral-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp animate__delay-1s">
            <div className="text-blue-600 mb-4">
              {/* Icon */}
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Reduce Admin Time by 80%</h3>
            <p className="text-neutral-600">
              Our procurement office replacement handles every supplier and process for you,
              streamlining operations.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-neutral-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp animate__delay-2s">
            <div className="text-blue-600 mb-4">
              {/* Icon */}
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Eliminate In-House Team</h3>
            <p className="text-neutral-600">
              We are the procurement office replacement you've been waiting for—no need for an
              internal team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
