import React, { useRef, useEffect } from "react";
import styles from "./styles.module.scss";

function GlitchContainer({ imageUrl, numImages }) {
  const glitchRef = useRef(null);

  useEffect(() => {
    const glitchContainer = glitchRef.current;

    if (glitchContainer) {
      const glitchImages = glitchContainer.querySelectorAll(
        `.${styles.container_glitch__img}`
      );

      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust the threshold as needed
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const { isIntersecting, target } = entry;

          if (isIntersecting) {
            target.classList.add(styles.animate);
            console.log("running");
          } else {
            target.classList.remove(styles.animate);
            console.log("paused");
          }
        });
      }, observerOptions);

      glitchImages.forEach((image) => {
        observer.observe(image); // Observe each glitch image
      });

      observer.observe(glitchContainer); // Observe the glitch container itself
    }
  }, []);

  const glitchImages = Array.from({ length: numImages }).map((_, index) => (
    <div key={index} className={styles.container_glitch__img}></div>
  ));

  return (
    <div ref={glitchRef} className={styles.container_glitch}>
      {glitchImages}
    </div>
  );
}

const GlitchImg = () => {
  const glitchImageUrl = "../../assets/images/picthome.jpg";

  return (
    <main>
      <GlitchContainer imageUrl={glitchImageUrl} numImages={5} />
    </main>
  );
};

export default GlitchImg;
