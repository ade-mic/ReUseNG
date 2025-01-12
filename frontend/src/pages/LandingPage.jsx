import React from "react";
import HeroSection  from "../components/HeroSection.jsx";
import "../styles/LandingPage.css";
import CategoriesDashboard from "../components/CategoriesDashboard.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Guildelines from "../components/Guidelines.jsx";
import Faq from "../components/Faq.jsx";


const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <CategoriesDashboard />
      <HowItWorks />
      <Guildelines />
      <Faq />
    </>
  );
}

export default LandingPage;