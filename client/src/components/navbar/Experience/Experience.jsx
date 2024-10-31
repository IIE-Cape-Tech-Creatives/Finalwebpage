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
      <h2 className={styles.title}>Funda kabanzi ngoPhumlani Dube</h2>
      <h2 className={styles.title2}>Who is Phumlani Dube?</h2>
      
      {/* Images Section */}
      <div className={styles.imagesContainer}>
        <img className={styles.image} src={getImageUrl("projects/backdroppd.jpg")} alt="Backdrop" />

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

        <img className={styles.imagedube} src={getImageUrl("projects/logobetter.png")} alt="Logo" />
      </div>
      
     

    </section>
  );
};
