import React from "react";
import "./HomePage.scss";
import NavigationSection from "../../components/navigation-section/NavigationSection";
import HeroSection from "../../components/hero-section/HeroSection";
import HighlightsSection from "../../components/highlights-section/HighlightsSection";
import TestimonialsSection from "../../components/testimonials-section/TestimonialsSection";
import FooterSection from "../../components/footer-section/FooterSection";
import AboutSection from "../../components/about-section/AboutSection";

function HomePage() {
  return (
    <div className="app-container">
      <NavigationSection />
      <HeroSection />
      <HighlightsSection />
      <TestimonialsSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
}
export default HomePage;
