import React from "react";
import styles from "./Footer.module.css";
import { getImageUrl } from "./././../../utils"
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Contact Section */}
        <div className={styles.contactSection}>
          <h4>CONTACT</h4>
          <p>Phone: +1905-830-0413</p>
          <p>Email: info@equalopp.org</p>
          <p>Website: www.equalopp.org</p>

          <div>
                  <img
                  src={getImageUrl("hero/logo (3).png")} // Replace with your logo's path
                    alt="Phumlani Dube Foundation Logo"
                    className={styles.logo}
                  />
          </div>
        </div>

        {/* Links Section */}
        <div className={styles.linksSection}>
          <h4>LINKS</h4>
          <ul className={styles.linksList}>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Get Involved</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>



        </div>

        {/* Sign Up Section */}
        <div className={styles.signUpSection}>
          <h4>SIGN UP</h4>
          <p>Stay connected and join the movement:</p>
          <div className={styles.emailSignup}>
            <input type="email" placeholder="Your Email Address" />
            <button>&gt;</button>
          </div>
          <p className={styles.encryptionNote}>* Personal data will be encrypted</p>
          <div className={styles.socialIcons}>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fas fa-rss"></i></a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© Copyright 2019 Equal Opportunity Community Initiative. All Rights Reserved</p>
        <div className={styles.bottomLinks}>
          <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};
