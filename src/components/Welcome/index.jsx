import styles from "./styles.module.scss";
// Components
import ButtonStyle from "../Button";
// import Tentacles from "../Tentacles";

const Welcome = ({ title, text, textmobile, logo, altLogo }) => {
  const linkToAbout = {
    name: "Contact",
    target: "#contact",
  };

  return (
    <div className={styles.welcome}>
      <div className={styles.__container}>
        <div className={styles.__welcome_container}>
          <div className={styles.logo_container}>
            <div className={styles.__logo}>
              <img src={logo} alt={altLogo} />
            </div>
          </div>
          <div className={styles.text}>
            <span className={styles.__regular_text}>
              <h1>{title}</h1>
              <br />
              <p>{text}</p>
            </span>
            <span className={styles.__text_mobile}>
              <h1>{title}</h1>
              <p>{textmobile}</p>
            </span>
            <div className={styles.__button_box}>
              <ButtonStyle link={linkToAbout} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
