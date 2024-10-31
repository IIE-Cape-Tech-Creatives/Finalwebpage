import React from "react";
import styles from "./UpdatesAndInsights.module.css";
import { getImageUrl } from "../../../utils"

export const UpdatesAndInsights = () => {
  return (
    <section className={styles.container}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Izibuyekezo</h2>
        <p className={styles.subheading}>Updates & Insights</p>
      </div>

      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={getImageUrl("events/event3.jpeg")}
            alt="Community Support"
          />
        </div>

        <div className={styles.ctaContainer}>
          <div className={styles.ctaBoxGreen}>
            <h3>Izinhlelo Zokusekela Umphakathi</h3>
            <p>Public Support Programs</p>
            <button className={styles.ctaButton}>Find Out More</button>
          </div>
          <div className={styles.ctaBoxBlack}>
            <h3>Newsletter</h3>
            <button className={styles.ctaButtonBlack}>Sign Up</button>
          </div>
        </div>
      </div>
    </section>
  );
};
