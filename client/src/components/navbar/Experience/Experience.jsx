import React from "react";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../../utils";

export const Experience = () => {
  const profileUrl = "https://www.youtube.com/@thephumlanidubeshow";

  const handleVideoClick = () => {
    window.open(profileUrl, "_blank");
  };

  return (
    <section className={styles.container} id="experience">
      {/* Headings */}
      <div className={styles.headingContainer}>
        <h2 className={styles.title}>Funda kabanzi ngoPhumlani Dube</h2>
        <h2 className={styles.title2}>Who is Phumlani Dube?</h2>
      </div>

      {/* Main Image */}
      <div className={styles.mainImage}>
        <img
          className={styles.image}
          src={getImageUrl("projects/backdroppd.jpg")}
          alt="Backdrop"
        />
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Left Image */}
        <img
          className={styles.imageLeft}
          src={getImageUrl("projects/pd.jpeg")}
          alt="Phumlani Dube"
        />

        {/* Description */}
        <div className={styles.description}>
        <p className={styles.descriptionText}>
  Phumlani Dube is a renowned media personality and passionate health advocate 
  committed to uplifting marginalized communities through innovative health and 
  wellness initiatives. With a personal story rooted in resilience and perseverance, 
  he has transformed his challenges into a mission to inspire others to prioritize 
  their well-being and live healthier, more fulfilling lives.
  </p>
  <p className={styles.descriptionText}>
  Driven by his vision of creating lasting change, Phumlani founded the Phumlani 
  Dube Foundation, a nonprofit organization dedicated to addressing the unique 
  health challenges faced by underserved communities. Through the foundation, he 
  has championed programs that promote active lifestyles, mental health awareness, 
  and holistic wellness, with a special focus on supporting senior citizens. 
</p>

  <p className={styles.descriptionText}>
  Over the years, the foundation has made a profound impact, touching countless 
  lives through outreach campaigns, fitness workshops, and collaborative efforts 
  with local health practitioners. Phumlani's work has not only inspired individuals 
  to take control of their health but has also fostered a sense of hope and community 
  in areas often overlooked.
</p><p className={styles.descriptionText}>
  However, the journey is far from over. Phumlani is eager to extend the reach of his 
  work and welcomes support from anyone who shares his vision of building healthier, 
  more empowered communities. Whether through volunteering, partnerships, or 
  donations, your involvement can help amplify his mission and create a brighter 
  future for those in need. Join him in this transformative journey and make a 
  difference today.
</p>


          {/* YouTube Logo */}
          <div className={styles.youtubeLogo}>
            <img
              src={getImageUrl("projects/logobetter.png")}
              alt="YouTube Logo"
            />
            
          </div>
        </div>
      </div>

      

      {/* Video Section */}
      <div className={styles.videoContainer} onClick={handleVideoClick}>
        <iframe
          className={styles.video}
          src="https://www.youtube.com/embed/_9jqFfxEKEU?autoplay=1&mute=1&loop=1&playlist=_9jqFfxEKEU"
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p className={styles.videoOverlayText}>Watch on YouTube</p>
      </div>
    </section>
  );
};

export default Experience;
