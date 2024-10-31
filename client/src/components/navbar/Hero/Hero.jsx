"use client";
import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../../utils"
import { TextHeroCard } from "../TextRevealCard/TextHeroCard";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <div className={styles.content}>

      <img
        src={getImageUrl("hero/logo (3).png")}
        alt="logo"
      />
       
        <TextHeroCard />
       
        
      
        <div className={styles.btnGroup}>
          <a href="#" className={styles.btn}>
          <h2 className="text-black font-bold">12+</h2>
        <h3 className="text-white semibold">Iminyaka Yokwakha Umphakathi</h3>
        <p className="text-gray-500">Years of community building</p>
          </a>
          <a href="#contact" className={styles.btn}>
          <h2 className="text-black font-bold">800+</h2>
        <h3 className="text-white font-semibold">Izivivinyo Zamehlo Ezenziwe</h3>
        <p className="text-gray-500">Eye tests done</p>
          </a>
        </div>
      </div>

      <img
       className={styles.heroImage}
        src={getImageUrl("hero/homepage.jpeg")}
        alt="Hero image of me"
      />
      
    </section>
  );
};