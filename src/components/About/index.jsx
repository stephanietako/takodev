import React, { useRef, useState, useEffect } from "react";
// Styles
import styles from "./styles.module.scss";
// Imports
import GlitchImg from "../GlitchImg";
// Assets
import chevronleft from "../../assets/icon/chevronleft.svg";
import chevronright from "../../assets/icon/chevronright.svg";

const About = ({ title, subtitle, text, textmobile }) => {
  const [imgVisible, setImgVisible] = useState(false);
  const ref = useRef(null);
  let timer;

  const triggerAbout = () => {
    timer = setTimeout(() => {
      scrollToRef(ref);
    }, 2000); // Déclenche le défilement après 2 secondes
  };

  const scrollToRef = () => ref.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.8) {
          setImgVisible(true);
        } else {
          setImgVisible(false);
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.8 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (imgVisible) {
      triggerAbout();
    }
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [imgVisible]);

  return (
    <div className={styles.about} id="about">
      <div className={styles.__container}>
        <div className={styles.__about_content}>
          <div className={`${styles.box} ${styles.__anime_container} `}>
            <div className={styles.__anime}>
              <GlitchImg setImgVisible={setImgVisible} />
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
                <span className={styles.__slash}></span>
                <img
                  className={styles.__icon_right}
                  src={chevronright}
                  alt="icon right chevron "
                />
              </span>
              <br />
              <span>
                <h2>{subtitle}</h2>
              </span>
              <p>{text}</p>
            </div>
            <div ref={ref} className={styles.__text_mobile}>
              <span>
                <img
                  className={styles.__icon_left}
                  src={chevronleft}
                  alt="icon left chevron "
                />
                <h1>{title}</h1>
                <span className={styles.__slash}></span>
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
