import React from "react";
import styles from "./MissionSection.module.css";
import { getImageUrl } from "../../../utils";

export const MissionSection = () => {
    return (
        <section className={styles.missionSection}>
            <h2 className={styles.title}>OUR MISSION</h2>
            <p className={styles.subtitle}>Empowering communities for health, wellness, and safety</p>
            <div className={styles.missionItems}>
                <div className={styles.missionItem}>
                    <div className={styles.iconHeart}></div>
                    <p className={styles.description}>
                        Providing accessible eye care and essential healthcare services to those in need.
                    </p>
                </div>
                <div className={styles.missionItem}>
                    <div className={styles.iconGlobe}></div>
                    <p className={styles.description}>
                        Creating inclusive spaces for community exercise, fostering wellness and connection.
                    </p>
                </div>
                <div className={styles.missionItem}>
                    <div className={styles.iconHand}></div>
                    <p className={styles.description}>
                        Supporting community safety through watch programs and assistance with local cases.
                    </p>
                </div>
            </div>
            <button className={styles.button}>Learn more about Our Mission</button>
        </section>
    );
};

export default MissionSection;
