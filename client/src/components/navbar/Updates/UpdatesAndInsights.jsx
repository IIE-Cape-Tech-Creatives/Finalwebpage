import React, { useState } from "react";
import styles from "./UpdatesAndInsights.module.css";
import { getImageUrl } from "../../../utils";

const Modal = ({ onClose, content, onFormSubmit }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(email); // Pass the email to the parent component or handle it directly
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
        <h2 className={styles.modalTitle}>{content.title}</h2>
        <p className={styles.modalDescription}>{content.description}</p>
        <form onSubmit={handleSubmit} className={styles.modalForm}>
          <label htmlFor="email" className={styles.emailLabel}>
            Enter your email:
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="your-email@example.com"
            className={styles.emailInput}
          />
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export const UpdatesAndInsights = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleFormSubmit = (email) => {
    console.log("User email submitted:", email);
    // You can handle the email submission here (e.g., send to a backend or store in state)
    closeModal();
  };

  const updatesContent = [
    {
      title: "Community Support Programs",
      description:
        "Learn more about our various initiatives to support and uplift the community. These programs include assistance for the elderly, skill development workshops, and community-building activities. Join us in making a positive impact.",
    },
    {
      title: "Newsletter Sign-Up",
      description:
        "Stay informed about our latest updates, events, and insights by signing up for our newsletter. Be part of a community that cares and get the latest news delivered straight to your inbox.",
    },
  ];

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
            src={getImageUrl("events/event1.jpg")}
            alt="Community Support"
          />
          <img
            className={styles.image}
            src={getImageUrl("events/event2.jpg")}
            alt="Health Programs"
          />
          <img
            className={styles.image}
            src={getImageUrl("events/event3.jpeg")}
            alt="Elderly Fitness"
          />
        </div>

        <div className={styles.ctaContainer}>
          <div className={styles.ctaBoxGreen}>
            <h3>Izinhlelo Zokusekela Umphakathi</h3>
            <p>Public Support Programs</p>
            <button
              className={styles.ctaButton}
              onClick={() => openModal(updatesContent[0])}
            >
              Find Out More
            </button>
          </div>
          <div className={styles.ctaBoxBlack}>
            <h3>Newsletter</h3>
            <button
              className={styles.ctaButtonBlack}
              onClick={() => openModal(updatesContent[1])}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={closeModal} content={modalContent} onFormSubmit={handleFormSubmit} />
      )}
    </section>
  );
};

export default UpdatesAndInsights;
