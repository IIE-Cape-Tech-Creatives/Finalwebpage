import React, { useState } from "react";
import styles from "./ContactSection.module.css";
import { getImageUrl } from "../../../utils"

export const ContactSection = () => {
 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Form submitted:", formData);
   
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className={styles.sectionstyle}>
      <div className={styles.contactContainer}>
        <h2 className={styles.contactHeaderXhosa}>Xhumana nathi</h2>
        <p className={styles.contactHeaderEnglish}>Contact us</p>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className={styles.textAreaField}
          />
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
        <div className={styles.contactInfo}>
          <p> info@phumlanidudefoundation.org</p>
          <p> +27 123 456 789</p>
          <p> 123 Foundation St, Community City</p>
        </div>
        <div className={styles.socialLinks}>
                    <img src={getImageUrl("icons/facebook.png")} alt="Facebook" className={styles.icon} />
                    <img src={getImageUrl("icons/gmail.png")} alt="Gmail" className={styles.icon} />
                    <img src={getImageUrl("icons/youtube.png")} alt="YouTube" className={styles.icon} />
        </div>
      </div>
    </section>
  );
};
