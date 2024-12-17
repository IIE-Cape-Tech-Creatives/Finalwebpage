import React from "react";
import styles from "./MissionSection.module.css";
import { getImageUrl } from "../../../utils";

export const MissionSection = () => {
    return (
        <section className={styles.mainSection} id="mission">
            <div className={styles.missionSection} >
{/* Title and Description */}
<h2 className={styles.title}>PHUMLANI DUBE FOUNDATION</h2>
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

            {/* Static Image and Button */}
            <div className={styles.introSection}>
                <img
                    src={getImageUrl("hero/home1.jpeg")}
                    alt="Phumlani Dube Foundation"
                    className={styles.missionImage}
                />
                <button className={styles.getToKnowButton}>Get to Know Us</button>
            </div>

            {/* Services Section */}
            <h3 className={styles.servicesTitle}>Izinsizakalo Zethu</h3>
            <h3 className={styles.servicesTitle2}>Our Services</h3>
            <div className={styles.serviceCards}>
                {/* Service 1 with Carousel */}
                <div className={styles.serviceCard}>
                    <div className={styles.imageCarousel}>
                        <img
                            src={getImageUrl("us/vision1.jpg")}
                            alt="Vision Screening 1"
                            className={styles.carouselImage}
                        />
                        <img
                            src={getImageUrl("us/vision2.jpg")}
                            alt="Vision Screening 2"
                            className={styles.carouselImage}
                        />
                        <img
                            src={getImageUrl("us/vision3.jpg")}
                            alt="Vision Screening 3"
                            className={styles.carouselImage}
                        />
                    </div>
                    <h4 className={styles.serviceTitleBlack}>Free Vision Screening</h4>
                    <h5 className={styles.serviceTitleGreen}>Affordable Eye Care</h5>
                    <p className={styles.serviceDescription}>
                        Providing free vision screenings to communities with limited access to eye care services.
                    </p>
                    <button className={styles.serviceButton}>Learn More</button>
                </div>

                {/* Service 2 with Carousel */}
                <div className={styles.serviceCard}>
                    <div className={styles.imageCarousel}>
                        <img
                            src={getImageUrl("us/health1.jpg")}
                            alt="Health Screening 1"
                            className={styles.carouselImage}
                        />
                        <img
                            src={getImageUrl("us/health2.jpg")}
                            alt="Health Screening 2"
                            className={styles.carouselImage}
                        />
                        <img
                            src={getImageUrl("us/health3.jpg")}
                            alt="Health Screening 3"
                            className={styles.carouselImage}
                        />
                    </div>
                    <h4 className={styles.serviceTitleBlack}>Health Screenings</h4>
                    <h5 className={styles.serviceTitleGreen}>Preventative Care</h5>
                    <p className={styles.serviceDescription}>
                        Offering comprehensive health screenings to promote early detection and prevention.
                    </p>
                    <button className={styles.serviceButton}>Learn More</button>
                </div>

                {/* Service 3 with Carousel */}
                <div className={styles.serviceCard}>
                    <div className={styles.imageCarousel}>
                        <img
                            src={getImageUrl("us/fitness1.jpg")}
                            alt="Fitness Program 1"
                            className={styles.carouselImage}
                        />
                        <img
                            src={getImageUrl("us/fitness2.jpg")}
                            alt="Fitness Program 2"
                            className={styles.carouselImage}
                        />
                        <img
                            src={getImageUrl("us/fitness3.jpg")}
                            alt="Fitness Program 3"
                            className={styles.carouselImage}
                        />
                    </div>
                    <h4 className={styles.serviceTitleBlack}>Senior Fitness Programs</h4>
                    <h5 className={styles.serviceTitleGreen}>Active Aging</h5>
                    <p className={styles.serviceDescription}>
                        Engaging seniors in physical activities to enhance their health and overall well-being.
                    </p>
                    <button className={styles.serviceButton}>Learn More</button>
                </div>
            </div>
            </div>
            
        </section>
    );
};

export default MissionSection;
