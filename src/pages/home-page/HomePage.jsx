import React, { useEffect } from "react";
import MediaQuery from "react-responsive";
import "./HomePage.scss";
import NavigationSection from "../../components/navigation-section/NavigationSection";
import HeroSection from "../../components/hero-section/HeroSection";
import HighlightsSection from "../../components/highlights-section/HighlightsSection";
import TestimonialsSection from "../../components/testimonials-section/TestimonialsSection";
import FooterSection from "../../components/footer-section/FooterSection";
import AboutSection from "../../components/about-section/AboutSection";
import MobileNavigationSection from "../../components/mobile-navigation-section/MobileNavigationSection";
import { useLocation } from "react-router-dom";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToAbout) {
      setTimeout(() => {
        const aboutSection = document.getElementById("about");

        aboutSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        location.state.scrollToAbout = false;
      }, 0);
    } else {
    }
  }, [location.state]);

  return (
    <div className="app-container">
      <MediaQuery maxWidth={830}>
        {(matches) =>
          matches ? <MobileNavigationSection /> : <NavigationSection />
        }
      </MediaQuery>

      <HeroSection />
      <HighlightsSection />
      <TestimonialsSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
}
export default HomePage;
