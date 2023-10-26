import React, { useRef, useEffect, useState } from "react";
// Styles
import styles from "./styles.module.scss";
// Assets
import logo from "../../assets/logo/takodev-logo-white.png";

const GlitchImg = ({ setImgVisible }) => {
  const GlitchContainer = ({ numImages }) => {
    const glitchRef = useRef(null);
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
      const glitchContainer = glitchRef.current;

      const observerOptions = {
        root: document.querySelector(".main"),
        rootMargin: "10px",
        threshold: 0.4,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          // Afficher les valeurs de chaque entry
          const { isIntersecting, intersectionRatio } = entry;
          if (isIntersecting && intersectionRatio >= 0.1) {
            setIsAnimating(true);
            glitchContainer.classList.add("active");
            setImgVisible(true);
          } else {
            setIsAnimating(false);
            glitchContainer.classList.remove("active"); // / Sinon retire la classe 'active' quand je nettoie
            setImgVisible(false);
          }
        });
      }, observerOptions);

      observer.observe(glitchContainer);

      return () => {
        observer.unobserve(glitchContainer);
        setIsAnimating(false);
        glitchContainer.classList.remove("active"); // Retire la classe 'active' quand je nettoie
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
      <img className={styles.__logo} src={logo} alt="logo tako dev "></img>
      <main className={`${styles.container} ${styles.activeAnimation}`}>
        <GlitchContainer numImages={5} />
      </main>
    </div>
  );
};

export default GlitchImg;
