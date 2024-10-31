"use client";
import React from "react";
import styles from "./TextHeroCard.module.css";
import {
  TextRevealCard,
  
} from "../TextRevealCard/text-reveal-card";

export function TextHeroCard() {

  return (
    
    <div className={styles.box}>
    <TextRevealCard>
    </TextRevealCard>
  </div>
   
  );
}
