import React from "react";
import styles from "./MissionSection.module.css";
import { getImageUrl } from "../../../utils";

export const MissionSection = () => {
    return (
        <section className={styles.missionSection} id="mission">
            <h2 className={styles.title}>PHUMLANI DUBE FOUNDATION</h2>
            <p className={styles.subtitle}>Empowering Lives through Active Lifestyles and Accessible Healthcare</p>
            
            <div className={styles.content}>
                <p className={styles.text}>
                    The Phumlani Dube Foundation (Reg. No.: 178-034) is a registered non-profit organization dedicated to promoting a healthy and active lifestyle, especially among senior citizens. Since its inception in 2016 by media personality and health advocate Phumlani Dube, the foundation has focused on community-driven health and wellness initiatives.
                </p>
                <p className={styles.text}>
                    Driven by a personal journey following the passing of his parents from lifestyle-related illnesses, Phumlani Dube’s vision is to support marginalized communities in KwaZulu-Natal by providing essential health services and encouraging physical activity for a better quality of life.
                </p>
                <p className={styles.text}>
                    The foundation is Section 18A registered, making all donations tax-deductible, and has been featured on numerous media outlets, including eTV News, eNCA, and SABC. These platforms highlight the foundation's impact in reaching thousands of individuals from disadvantaged backgrounds.
                </p>
            </div>

            <h3 className={styles.servicesTitle}>Our Services</h3>
            <div className={styles.missionItems}>
                <div className={styles.missionItem}>
                    <div className={styles.imageCarousel}>
                        <img src={getImageUrl("us/vision1.jpg")} alt="Vision Screening 1" className={styles.carouselImage} />
                        <img src={getImageUrl("us/vision2.jpg")} alt="Vision Screening 2" className={styles.carouselImage} />
                        <img src={getImageUrl("us/vision3.jpg")} alt="Vision Screening 3" className={styles.carouselImage} />
                    </div>
                    <p className={styles.description}>Free Vision Screening</p>
                </div>

                <div className={styles.missionItem}>
                    <div className={styles.imageCarousel}>
                        <img src={getImageUrl("us/health1.jpg")} alt="Health Screening 1" className={styles.carouselImage} />
                        <img src={getImageUrl("us/health2.jpg")} alt="Health Screening 2" className={styles.carouselImage} />
                        <img src={getImageUrl("us/health3.jpg")} alt="Health Screening 3" className={styles.carouselImage} />
                    </div>
                    <p className={styles.description}>Health Screenings & Preventative Tests</p>
                </div>

                <div className={styles.missionItem}>
                    <div className={styles.imageCarousel}>
                        <img src={getImageUrl("us/fitness1.jpg")} alt="Fitness Program 1" className={styles.carouselImage} />
                        <img src={getImageUrl("us/fitness2.jpg")} alt="Fitness Program 2" className={styles.carouselImage} />
                        <img src={getImageUrl("us/fitness3.jpg")} alt="Fitness Program 3" className={styles.carouselImage} />
                    </div>
                    <p className={styles.description}>Senior Citizen Fitness Program</p>
                </div>
            </div>

            <button className={styles.button}>Learn more about us</button>
        </section>
    );
};

export default MissionSection;
