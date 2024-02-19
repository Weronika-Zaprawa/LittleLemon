import React from "react";
import "./App.css";
import NavigationSection from "./components/navigation-section/NavigationSection";
import HeroSection from "./components/hero-section/HeroSection";
import HighlightsSection from "./components/highlights-section/HighlightsSection";
import TestimonialsSection from "./components/testimonials-section/TestimonialsSection";
import FooterSection from "./components/footer-section/FooterSection";

function App() {
  return (
    <div>
      <NavigationSection />
      <HeroSection />
      <HighlightsSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
}
export default App;
