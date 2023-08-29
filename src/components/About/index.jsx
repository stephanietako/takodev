// Styles
import styles from "./styles.module.scss";
// Imports
// import logo from "../../assets/logo/takodev-logo-white.png";
import GlitchImg from "../GlitchImg";

const About = ({ text, textmobile }) => {
  return (
    <div className={styles.about} id="about">
      <div className={styles.__container}>
        <div className={styles.__about_content}>
          {/* <div className={styles.__logo}>
            <img src={logo} alt=" logo Tako Dev" />
          </div> */}
          <div className={styles.__img}>
            <GlitchImg />
          </div>
          <div className={styles.__text}>
            <p>{text}</p>
          </div>
          <div className={styles.__text_mobile}>
            <p>{textmobile}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
