import React, { useEffect, Suspense } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Benefits from "./components/Benefits.jsx";
import Process from "./components/Process.jsx";
import Pricing from "./components/Pricing.jsx";
import Demo from "./components/Demo.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-2xl">Loading...</div>
  </div>
);

function App() {
  useEffect(() => {
    console.log('App component mounted');
    // Log if components are imported successfully
    console.log('Components loaded:', {
      Navbar: !!Navbar,
      Hero: !!Hero,
      Benefits: !!Benefits,
      Process: !!Process,
      Pricing: !!Pricing,
      Demo: !!Demo,
      FAQ: !!FAQ,
      Footer: !!Footer
    });
  }, []);

  return (
    <Suspense fallback={<LoadingFallback />}>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main id="main-content" className="flex-1 relative pt-[4rem]">
          <Hero />
          <Benefits />
          <Process />
          <Pricing />
          <Demo />
          <FAQ />
        </main>
        <Footer />
      </div>
    </Suspense>
  );
}

// Add error boundary wrapper
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error in component:', error);
    console.error('Error info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
            <pre className="text-sm text-gray-600 mb-4">
              {this.state.error?.toString()}
            </pre>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Export wrapped in error boundary
export default function AppWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}