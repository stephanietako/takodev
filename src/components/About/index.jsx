import React, { useRef, useEffect } from "react";
// Styles
import styles from "./styles.module.scss";
// Imports
import GlitchImg from "../GlitchImg";
// Assets
import chevronleft from "../../assets/icon/chevronleft.svg";
import chevronright from "../../assets/icon/chevronright.svg";
///////////////
const scrollToRef = (ref) => {
  if (ref && ref.current) {
    ref.current.scrollIntoView({
      behavior: "smooth", // Pour un défilement fluide
      block: "start", // Défilement pour afficher le haut de l'élément
    });
  }
};

/////////////////
const About = ({ title, subtitle, text, textmobile }) => {
  ////////////////////
  const scrollToTxt = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToRef(scrollToTxt);
    }, 2000); // Déclenche le défilement après 2 secondes

    return () => clearTimeout(timer); // Nettoie le timer si le composant est démonté avant l'échéance
  }, []);
  console.log("MYREF !!!!", scrollToTxt.current);
  /////////////////////////
  return (
    <div className={styles.about} id="about">
      <div className={styles.__container}>
        <div className={styles.__about_content}>
          <div className={`${styles.box} ${styles.__anime_container} `}>
            <div className={styles.__anime}>
              <GlitchImg />
            </div>
          </div>
          <div className={`${styles.box} ${styles.__text} `}>
            <div className={styles.__regular_text}>
              <span>
                <img
                  className={styles.__icon_left}
                  src={chevronleft}
                  alt="icon left chevron "
                />
                <h1> {title}</h1>
                <img
                  className={styles.__icon_right}
                  src={chevronright}
                  alt="icon right chevron "
                />
                <br></br>
              </span>
              <span>
                <h2>{subtitle}</h2>
              </span>
              <p>{text}</p>
            </div>
            <div
              ref={scrollToTxt}
              className={styles.__text_mobile}
              // id={styles.textAboutMobile}
            >
              <span>
                <img
                  className={styles.__icon_left}
                  src={chevronleft}
                  alt="icon left chevron "
                />
                <h1>{title}</h1>
                <img
                  className={styles.__icon_right}
                  src={chevronright}
                  alt="icon right chevron "
                />
              </span>
              <span>
                <h2>{subtitle}</h2>
              </span>
              <p>{textmobile}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
