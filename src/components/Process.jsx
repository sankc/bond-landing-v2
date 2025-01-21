import React from "react";

function Process() {
  return (
    <section id="process" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate__animated animate__fadeIn">
            How Your Procurement Office Replacement Works
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Simple, efficient, and effective—experience procurement management reimagined
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Horizontal connecting line (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-blue-600" />

          {/* Step 1 */}
          <div className="relative bg-neutral-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate__animated animate__fadeInLeft">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
              1
            </div>
            <div className="mt-8 text-center">
              <h3 className="text-xl font-bold mb-4">Submit Request</h3>
              <p className="text-gray-300">
                Submit a simple request form to your procurement office replacement. Quick and
                hassle-free start.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative bg-neutral-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate__animated animate__fadeInLeft animate__delay-1s">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
              2
            </div>
            <div className="mt-8 text-center">
              <h3 className="text-xl font-bold mb-4">We Source &amp; Negotiate</h3>
              <p className="text-gray-300">
                We source and negotiate the best prices—another step handled by your procurement
                office replacement.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative bg-neutral-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate__animated animate__fadeInLeft animate__delay-2s">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
              3
            </div>
            <div className="mt-8 text-center">
              <h3 className="text-xl font-bold mb-4">Approve &amp; Receive</h3>
              <p className="text-gray-300">
                Approve and receive deliveries without overhead, thanks to our procurement office
                replacement.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="#demo"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 animate__animated animate__pulse animate__infinite"
          >
            Start Your Journey
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Process;
