import React, { useState, useEffect } from "react";
import styles from "./MyServices.module.css";
import { getImageUrl } from "./././../../utils"

export const MyServices = () => {
  const services = [
    {
      name: "Free Vision Screening",
      images: [
        getImageUrl("us/vision1.jpg"),
        getImageUrl("us/vision2.jpg"),
        getImageUrl("us/vision3.jpg"),
        getImageUrl("us/vision4.jpg"),
        getImageUrl("us/vision5.jpg"),
        getImageUrl("us/vision6.jpg"),
      ],
      description: `
        Our vision screening service is dedicated to helping individuals maintain optimal eye health. 
        Through our free screenings, we ensure that every participant has access to resources and referrals for improved vision.
      `,
    },
    {
      name: "Health Screenings & Preventative Tests",
      images: [
        getImageUrl("us/health1.jpg"),
        getImageUrl("us/health2.jpg"),
        getImageUrl("us/health3.jpg"),
        getImageUrl("us/health4.jpg"),
        getImageUrl("us/health5.jpg"),
        getImageUrl("us/health6.jpg"),
      ],
      description: `
        We provide comprehensive health screenings and preventative tests to promote early detection and intervention. 
        Our team works to ensure that everyone has access to essential health care services.
      `,
    },
    {
      name: "Senior Citizen Fitness Program",
      images: [
        getImageUrl("us/fitness1.jpg"),
        getImageUrl("us/fitness2.jpg"),
        getImageUrl("us/fitness3.jpg"),
        getImageUrl("us/fitness4.jpg"),
        getImageUrl("us/fitness5.jpg"),
        getImageUrl("us/fitness6.jpg"),
      ],
      description: `
        Our fitness program is designed to support senior citizens in staying active and healthy. 
        By offering tailored physical activities, we promote improved well-being and quality of life for our elders.
      `,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services[0].images.length);
    }, 3000); // Transition every 3 seconds
    return () => clearInterval(interval);
  }, [services]);

  const getVisibleImages = (images) => {
    const total = images.length;
    return [
      images[currentIndex % total],
      images[(currentIndex + 1) % total],
      images[(currentIndex + 2) % total],
    ];
  };

  return (
    <div className={styles.servicesContainer}>
      {services.map((service, index) => (
        <div key={index} className={styles.serviceCard}>
          <h2 className={styles.serviceTitle}>{service.name}</h2>

          {/* Carousel */}
          <div className={styles.carouselContainer}>
            {getVisibleImages(service.images).map((image, i) => (
              <img
                key={i}
                src={image}
                alt={`${service.name} Image ${i + 1}`}
                className={styles.carouselImage}
              />
            ))}
          </div>

          {/* Service Description */}
          <p className={styles.serviceDescription}>{service.description}</p>

          {/* CTA Button */}
          <button className={styles.learnMoreButton}>Sign Up</button>
        </div>
      ))}
    </div>
  );
};

export default MyServices;
