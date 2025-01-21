import React, { useState } from "react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  function toggleMobileMenu() {
    setMobileOpen((prev) => !prev);
  }

  // If user clicks a link, we can close the menu:
  function handleLinkClick() {
    setMobileOpen(false);
  }

  return (
    <nav id="navbar" className="bg-neutral-900 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold">
              Bond
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#benefits"
                className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Benefits
              </a>
              <a
                href="#process"
                className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Process
              </a>
              <a
                href="#pricing"
                className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Pricing
              </a>
              <a
                href="#waitlist"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium animate__animated animate__pulse animate__infinite"
              >
                Book Demo
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-neutral-700 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  className={`${!mobileOpen ? "block" : "hidden"}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={`${mobileOpen ? "block" : "hidden"}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (conditional rendering) */}
      {mobileOpen && (
        <div className="md:hidden bg-neutral-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#benefits"
              onClick={handleLinkClick}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700"
            >
              Benefits
            </a>
            <a
              href="#process"
              onClick={handleLinkClick}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700"
            >
              Process
            </a>
            <a
              href="#pricing"
              onClick={handleLinkClick}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              onClick={handleLinkClick}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700"
            >
              Testimonials
            </a>
            <a
              href="#waitlist"
              onClick={handleLinkClick}
              className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 hover:bg-blue-700 text-center animate__animated animate__pulse animate__infinite"
            >
              Book Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
