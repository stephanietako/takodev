import React, { useRef, useEffect, useState } from "react";
// Styles
import styles from "./styles.module.scss";

const GlitchImg = () => {
  const GlitchContainer = ({ numImages }) => {
    const glitchRef = useRef(null);
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
      const glitchContainer = glitchRef.current;

      const observerOptions = {
        root: document.querySelector(".main"),
        rootMargin: "10px",
        threshold: 0.2,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const { isIntersecting, intersectionRatio } = entry;
          if (isIntersecting && intersectionRatio >= 0.1) {
            setIsAnimating(true);
            console.log("Element fully visible");
          } else {
            setIsAnimating(false);
            console.log("Element not fully visible");
          }
        });
      }, observerOptions);

      observer.observe(glitchContainer);

      return () => {
        observer.unobserve(glitchContainer);
        setIsAnimating(false);
        console.log("Animation observer cleaned up");
      };
    }, []);

    const glitchImages = Array.from({ length: numImages }).map((_, index) => {
      const isActive = isAnimating;

      return (
        <div
          key={index}
          id={styles.glitchImage}
          className={`${styles.container_glitch__img} ${
            isActive ? styles.activeAnimation : ""
          }`}
        ></div>
      );
    });

    return (
      <div ref={glitchRef} className={styles.container_glitch}>
        {glitchImages}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <main className={`${styles.container} ${styles.activeAnimation}`}>
        <GlitchContainer numImages={5} />
      </main>
    </div>
  );
};

export default GlitchImg;
