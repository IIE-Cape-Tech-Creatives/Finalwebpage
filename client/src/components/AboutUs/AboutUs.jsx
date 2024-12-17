import React, { useEffect } from "react";
import styles from "./AboutUs.module.css";
import { getImageUrl } from "./././../../utils";
import Donate from "../Donate/Donate";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export const AboutUs = () => { 
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Animation triggers only once
    });
  }, []);

  return (
    <div className={styles.aboutUsContainer}>
      {/* About Us Heading */}
      <h1 data-aos="fade-down">Mayelana Nathi</h1>
      <h2 data-aos="fade-up">About Us</h2>
      <p data-aos="fade-right">
        Welcome to the Phumlani Dube Foundation. Our mission is to make a positive impact in our community by focusing on 
        education, empowerment, and equal opportunities for everyone. We strive to create a better future together.
      </p>
      <p data-aos="fade-left">
        Our team is dedicated to providing resources and support for those in need, while fostering collaboration and 
        innovation to drive real change. Thank you for joining us on this journey!
      </p>
      <div className={styles.imageAbout} data-aos="zoom-in">
        <img src={getImageUrl("hero/home1.jpeg")} alt="About Us" />
      </div>

      {/* Who Are We Section */}
      <div className={styles.section}> 
        <h1 data-aos="fade-down">Singobani</h1>
        <h2 data-aos="fade-up">Who Are We</h2>
        <div className={styles.sectionContent}>
          <div className={styles.text} data-aos="fade-right">
            <p>
              The Phumlani Dube Foundation is a registered non-profit organization committed to uplifting marginalized communities. 
              Founded in 2016, our mission is to promote a healthier, more active lifestyle while ensuring access to healthcare and 
              educational resources for all.
            </p>
            <p>
              We focus on empowering individuals to live better lives through meaningful programs and partnerships, impacting 
              thousands of lives across KwaZulu-Natal and beyond.
            </p>
          </div>
          <div className={styles.image} data-aos="fade-left">
            <img src={getImageUrl("events/event1.jpg")} alt="Who Are We" />
          </div>
        </div>
      </div>

      {/* Where Are We Section */}
      <div className={styles.section}>
        <h1 data-aos="fade-down">Sikuphi</h1>
        <h2 data-aos="fade-up">Where Are We</h2>
        <div className={styles.sectionContent}>
          <div className={styles.mapContainer} data-aos="fade-right">
            <iframe
              className={styles.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115344.60603212377!2d31.021840!3d-29.858680!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9516f57e0e7b27%3A0x54820b0bc55e1e29!2sDurban%2C%20KwaZulu-Natal%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1689036499982!5m2!1sen!2sus"
              title="Google Maps Location"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className={styles.text} data-aos="fade-left">
            <p>
              Our foundation is headquartered in KwaZulu-Natal, South Africa. We operate in various local communities, focusing 
              on areas that need the most support. Through our health and education initiatives, we aim to bring transformation 
              where it is needed the most.
            </p>
            <p>
              Visit us or get in touch to learn more about our ongoing projects and how you can contribute.
            </p>
          </div>
        </div>
      </div>

      {/* How We Do It Section */}
      <div className={styles.section}>
        <h1 data-aos="fade-down">Sikwenzela Kanjani</h1>
        <h2 data-aos="fade-up">How We Do It</h2>
        <div className={styles.sectionContent}>
          <div className={styles.text} data-aos="fade-right">
            <p>
              At the heart of our operations are impactful programs that address pressing community needs. We achieve this through:
            </p>
            <ul>
              <li>Providing free health screenings and preventative care.</li>
              <li>Organizing workshops to raise awareness about active and healthy living.</li>
              <li>Collaborating with partners and sponsors to maximize outreach.</li>
            </ul>
          </div>
          <div className={styles.image} data-aos="fade-left">
            <img src={getImageUrl("events/hmm.jpeg")} alt="How We Do It" />
          </div>
        </div>
      </div>

      {/* Donate Button */}
      <div className={styles.donateSection} data-aos="zoom-in">
        <button className={styles.donateButton}>Donate</button>
      </div>
      <Donate />
    </div>
  );
};

export default AboutUs;
