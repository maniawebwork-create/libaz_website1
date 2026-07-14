"use client";
import { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';

const slides = [
  { id: 1, image: "/images/hero_bridal.png", title: "HERITAGE REIMAGINED", subtitle: "CELEBRATING THE RICH TAPESTRY OF INDIAN CRAFTSMANSHIP" },
  { id: 2, image: "/images/hero_bridal_2.png", title: "ROYAL KARIGARI", subtitle: "EMBRACE THE MAJESTY OF TRADITIONAL INDIAN COUTURE" },
  { id: 3, image: "/images/hero_bridal_3.png", title: "MODERN ETHNIC", subtitle: "WHERE AGE-OLD TRADITION MEETS CONTEMPORARY ELEGANCE" },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${slides[currentSlide].image})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'background-image 0.5s ease-in-out' }}>
      <div className={styles.imageOverlay}></div>
      <button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevSlide}>&#10094;</button>
      
      <div className={styles.heroContent}>
        <p className={styles.subtitle}>{slides[currentSlide].subtitle}</p>
        <h2 className={styles.title}>{slides[currentSlide].title}</h2>
      </div>

      <button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextSlide}>&#10095;</button>
    </section>
  );
}
