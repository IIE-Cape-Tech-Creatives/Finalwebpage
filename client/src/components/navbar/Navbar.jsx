import React from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "./././../../utils"

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* Logo and Name */}
      <a href="/" className={styles.logo}>
        <img
           src={getImageUrl("hero/logo (3).png")} 
          alt="Logo"
          className={styles.logoImage}
        />
        <span className={styles.logoText}>Phumlani Dube Foundation</span>
      </a>

      {/* Navigation Links */}
      <ul className={styles.navLinks}>
        <li><a href="/about-us">About Us</a></li>
        <li><a href="/our-services">Our Services</a></li>
        <li><a href="/get-involved">Get Involved</a></li>
      </ul>

      {/* Donate Button */}
      <button className={styles.donateButton}>Donate</button>
    </nav>
  );
};
