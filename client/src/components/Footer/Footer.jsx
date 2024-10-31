import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Address Section */}
        <div className={styles.addressContainer}>
          <p className={styles.addressTitle}>Our Location</p>
          <p className={styles.address}>
            123 Freedom Street, <br />
            Durban, <br />
            South Africa
          </p>
        </div>

        {/* Map Section */}
        <div className={styles.mapContainer}>
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115344.60603212377!2d28.014269167703663!3d-26.204102280275682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950b84c5f020b9%3A0x54820b0bc55e1e29!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1689036499982!5m2!1sen!2sus"
            title="Google Maps Location"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Copyright Section */}
      <p className={styles.copyright}>
        © 2023 Phumlani Dube. All rights reserved.
      </p>
    </footer>
  );
};
