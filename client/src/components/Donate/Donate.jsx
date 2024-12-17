import React from "react";
import styles from "./Donate.module.css";
import { getImageUrl } from "./././../../utils"

export const Donate = () => {
  return (
    <section className={styles.donateSection}>
      {/* Background Image */}
      <div className={styles.backgroundImage}>
        {/* Transparent Container */}
        <div className={styles.container}>
          {/* Logo */}
          <div className={styles.logoContainer}>
            <img
              src={getImageUrl("hero/logo (3).png")}
              alt="Phumlani Dube Foundation Logo"
              className={styles.logo}
            />
          </div>

          {/* Banking Details */}
          <div className={styles.detailsContainer}>
            <h2 className={styles.title}> </h2>
            <p className={styles.detail}><strong>Account Name:</strong> Phumlani Dube Foundation</p>
            <p className={styles.detail}><strong>Bank:</strong> First National Bank (FNB)</p>
            <p className={styles.detail}><strong>Account Number:</strong> 123456789</p>
            <p className={styles.detail}><strong>Branch Code:</strong> 250655</p>
            <p className={styles.detail}><strong>SWIFT Code:</strong> FIRNZAJJ</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
