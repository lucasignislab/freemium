import { Navbar } from "./components/Navbar.tsx"
import { Hero } from "./components/Hero.tsx"
import { PainPoints } from "./components/PainPoints.tsx"
import { TrustLayer } from "./components/TrustLayer.tsx"
import { ExclusiveTool } from "./components/ExclusiveTool.tsx"
import { ConversionForm } from "./components/ConversionForm.tsx"
import { Results } from "./components/Results.tsx"
import { PricingSection } from "./components/PricingSection.tsx"
import { HowItWorks } from "./components/HowItWorks.tsx"
import { ImpactCarousel } from "./components/ImpactCarousel.tsx"
import { ComparisonSection } from "./components/ComparisonSection.tsx"
import { IntegrationsSection } from "./components/IntegrationsSection.tsx"
import { ClientsCarousel } from "./components/ClientsCarousel.tsx"
import { Footer } from "./components/Footer.tsx"
import { DesignSystem } from "./pages/DesignSystem.tsx"
import { motion, useScroll, useSpring } from "framer-motion"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const LandingPage = () => {
  return (
    <>
      <Hero />
      <TrustLayer />
      <ExclusiveTool />
      <PainPoints />
      <HowItWorks />
      <ImpactCarousel />
      <ComparisonSection />
      <IntegrationsSection />
      <Results />
      <PricingSection />
      <ClientsCarousel />
      <ConversionForm />
    </>
  );
};

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-brand-green origin-left z-50"
          style={{ scaleX }}
        />

        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/design-system" element={<DesignSystem />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
