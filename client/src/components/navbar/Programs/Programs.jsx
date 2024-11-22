import React, { useState } from "react";
import styles from "./Programs.module.css";

const Modal = ({ onClose, onFormSubmit, programName, programDescription }) => {
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
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
        {!isSubmitted ? (
          <div>
            <h2 className={styles.modalTitle}>{programName}</h2>
            <p className={styles.modalDescription}>{programDescription}</p>
            <form onSubmit={handleSubmit} className={styles.modalForm}>
              <h3>Enter Your Details to Sign Up</h3>
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
          </div>
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
  const [selectedProgram, setSelectedProgram] = useState({});

  const programs = [
    {
      id: 1,
      name: "Eye Clinic",
      localName: "Umtholampilo Wamehlo",
      description: "We provide free eye testing and treatments to the community.",
    },
    {
      id: 2,
      name: "Fitness Class",
      localName: "Isifundo Sokuzivocavoca",
      description: "Join us in staying active and healthy as a community.",
    },
    {
      id: 3,
      name: "Police Assistance",
      localName: "Usizo Lwamaphoyisa",
      description:
        "We work together with local police to keep our community safe and united.",
    },
  ];

  const openModal = (program) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleFormSubmit = (formData) => {
    console.log("User details:", formData);
  };

  return (
    <section className={styles.container} id="services">
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Izinhlelo</h2>
        <p className={styles.subheading}>Programs</p>
        <p className={styles.description}>
          We have a wide variety of programs we offer to our community and
          accept all volunteers for anyone interested in supporting us.
        </p>
      </div>

      <div className={styles.programsContainer}>
        {programs.map((program) => (
          <div
            className={
              program.id % 2 === 0
                ? styles.programBoxBlack
                : styles.programBoxGreen
            }
            key={program.id}
          >
            <h3>{program.localName}</h3>
            <h2>{program.name}</h2>
            <p>{program.description}</p>
            <button
              className={styles.ctaButton}
              onClick={() => openModal(program)}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <Modal
          onClose={closeModal}
          onFormSubmit={handleFormSubmit}
          programName={selectedProgram.name}
          programDescription={selectedProgram.description}
        />
      )}
    </section>
  );
};

export default Programs;
