import React from "react";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Benefits from "./components/Benefits.jsx";
import Process from "./components/Process.jsx";
import Pricing from "./components/Pricing.jsx";
import Waitlist from "./components/Waitlist.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar fixed at top */}
      <Navbar />

      {/* Main content (hero, benefits, etc.) */}
      <main id="main-content" className="flex-1 relative pt-[4rem]">
        {/* We add pt-[4rem] or so to offset the fixed navbar’s height. */}
        <Hero />
        <Benefits />
        <Process />
        <Pricing />
        <Waitlist />
        <FAQ />
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
