import React from "react";
import styles from "./LandingCard.module.css";

export const LandingCard = () => {
  return (
    <div className={styles.landingCard}>
      <a href="/events" className={styles.cardLink}>
        <div className={styles.cardItem}>
          <h3><b>Izinhlelo Ezizayo</b></h3>
          <h4><b>Upcoming Events</b></h4>
          <p>Join us during our local events</p>
        </div>
      </a>
      <a href="/services" className={styles.cardLink}>
        <div className={styles.cardItem}>
          <h3><b>Izinsizakalo</b></h3>
          <h4><b>Services</b></h4>
          <p>Eye care, Group Therapy and many more</p>
        </div>
      </a>
      <a href="/supporters" className={styles.cardLink}>
        <div className={styles.cardItem}>
          <h3><b>Abaxhasi Bethu</b></h3>
          <h4><b>Our Supporters</b></h4>
          <p>We thank all people who make us better</p>
        </div>
      </a>
      <button className={styles.exploreButton}><b>Qala </b>Explore Now</button>
    </div>
  );
};

export default LandingCard;
