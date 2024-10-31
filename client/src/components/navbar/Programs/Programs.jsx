import React, { useState } from "react";
import styles from "./Programs.module.css";

const Modal = ({ onClose, onFormSubmit }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    onFormSubmit({ name, surname, phone });
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <h2>Enter Your Details</h2>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              Surname:
              <input
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                required
              />
            </label>
            <label>
              Phone Number:
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div className={styles.successMessage}>
            <p>Thank you! Your details have been submitted successfully.</p>
            <button onClick={onClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export const Programs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleFormSubmit = (formData) => {
    console.log("User details:", formData);
  };

  return (
    <section className={styles.container}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Izinhlelo</h2>
        <p className={styles.subheading}>Programs</p>
        <p className={styles.description}>
          We have a wide variety of programs we offer to our community and accept all volunteers for anyone interested in supporting us.
        </p>
      </div>

      <div className={styles.programsContainer}>
        <div className={styles.programBoxGreen}>
          <h3>Umtholampilo Wamehlo</h3>
          <h2>Eye Clinic</h2>
          <p>Free eye testing and clinic available</p>
          <button className={styles.ctaButton} onClick={openModal}>Book Now</button>
        </div>

        <div className={styles.programBoxBlack}>
          <h3>Isifundo Sokuzivocavoca</h3>
          <h2>Fitness Class</h2>
          <p>Stay active as a community with us</p>
          <button className={styles.ctaButton} onClick={openModal}>Book Now</button>
        </div>

        <div className={styles.programBoxGreen}>
          <h3>Usizo Lwamaphoyisa</h3>
          <h2>Police Assistance</h2>
          <p>Help us keep our community safe and keep our members united</p>
          <button className={styles.ctaButton} onClick={openModal}>Book Now</button>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={closeModal} onFormSubmit={handleFormSubmit} />
      )}
    </section>
  );
};

export default Programs;
