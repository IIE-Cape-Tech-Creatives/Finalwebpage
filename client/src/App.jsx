import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Hero } from "./components/navbar/Hero/Hero";
import { Upcoming } from "./components/navbar/Upcoming/Upcoming";
import { Experience } from "./components/navbar/Experience/Experience";
import { UpdatesAndInsights } from "./components/navbar/Updates/UpdatesAndInsights";
import { Programs } from "./components/navbar/Programs/Programs";
import { ContactSection } from "./components/navbar/contact/ContactSection";
import { MissionSection } from "./components/navbar/Mission/MissionSection";
import { Footer } from "./components/Footer/Footer";
import { SupportersSection } from "./components/navbar/Supporters/SupportersSection";
import { MyServices } from "./components/OurServices/MyServices"
import { LandingPage } from "./components/LandingPage/LandingPage";
import { LandingCard } from "./components/LandingCard/LandingCard";
import {Donate} from "./components/Donate/Donate";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-services" element={<MyServices />} />
       
      </Routes>

      {/* Render other sections only if not on /about-us */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              
              <LandingPage />
              <MissionSection />
              
              <Experience />
              <UpdatesAndInsights />
              <Upcoming />
              
              <ContactSection />
              <SupportersSection />
            </>
          }
        />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
