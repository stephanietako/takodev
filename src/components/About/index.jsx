// Styles
import styles from "./styles.module.scss";
// Imports
import GlitchImg from "../GlitchImg";

const About = ({ title, subtitle, text, textmobile }) => {
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
                <h1> {title}</h1>
                <br></br>
              </span>
              <span>
                <h2>{subtitle}</h2>
              </span>
              <p>{text}</p>
            </div>
            <div className={styles.__text_mobile}>
              <span>
                <h1>{title}</h1>
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
