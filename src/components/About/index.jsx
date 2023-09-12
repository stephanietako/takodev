// Styles
import styles from "./styles.module.scss";
// Imports
import GlitchImg from "../GlitchImg";
// Assets
import chevronleft from "../../assets/icon/chevronleft.svg";
import chevronright from "../../assets/icon/chevronright.svg";

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
            <div className={styles.__text_mobile}>
              <span>
                <h1>{title}</h1>
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
