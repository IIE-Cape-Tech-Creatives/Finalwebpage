import React from "react";
import styles from "./LandingPage.module.css";
import { getImageUrl } from "./././../../utils"
import LandingCard from "../LandingCard/LandingCard";


export const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      {/* Left Side: Logo */}
      
      <div className={styles.leftSection}>
        <img
        src={getImageUrl("hero/logo (3).png")} // Replace with your logo's path
          alt="Phumlani Dube Foundation Logo"
          className={styles.logo}
        />
      </div>

      {/* Right Side: Image */}
      <div className={styles.rightSection}>
        <img
         src={getImageUrl("hero/home.webp")}
          alt="Fitness Program"
          className={styles.image}
        />
      </div>

      {/* Middle Bar */}
      <LandingCard />
    </div>
  );
};

export default LandingPage;
