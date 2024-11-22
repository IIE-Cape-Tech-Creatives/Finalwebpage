import React from "react";
import styles from "./SupportersSection.module.css";
import { getImageUrl } from "../../../utils";

export const SupportersSection = () => {
  const supporters = [
    { name: "John Doeranga", image: getImageUrl("supporters/john.jpg") },
    { name: "MrsJane Smith", image: getImageUrl("supporters/jane.jpg") },
    { name: "Kids Company.", image: getImageUrl("supporters/acme.jpg") },
    { name: "Wellness NGO", image: getImageUrl("supporters/wellness.png") },
    { name: "Healthify", image: getImageUrl("supporters/healthify.png") },
    { name: "John Doeranga", image: getImageUrl("supporters/john.jpg") },
    { name: "MrsJane Smith", image: getImageUrl("supporters/jane.jpg") },
    { name: "Kids Company.", image: getImageUrl("supporters/acme.jpg") },
    { name: "Wellness NGO", image: getImageUrl("supporters/wellness.png") },
    { name: "Healthify", image: getImageUrl("supporters/healthify.png") },
  ];

  return (
    <section className={styles.supportersSection} id="supporters">
      <h2 className={styles.title}>We Thank Our Supporters</h2>
      <div className={styles.scrollContainer}>
        <div className={styles.supportersList}>
          {supporters.map((supporter, index) => (
            <div className={styles.supporterCard} key={index}>
              <img
                src={supporter.image}
                alt={supporter.name}
                className={styles.supporterImage}
              />
              <p className={styles.supporterName}>{supporter.name}</p>
            </div>
          ))}
          {/* Duplicate for seamless scrolling */}
          {supporters.map((supporter, index) => (
            <div className={styles.supporterCard} key={`dup-${index}`}>
              <img
                src={supporter.image}
                alt={supporter.name}
                className={styles.supporterImage}
              />
              <p className={styles.supporterName}>{supporter.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
