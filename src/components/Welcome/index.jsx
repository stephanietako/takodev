import styles from "./styles.module.scss";
// Components
import ButtonStyle from "../Button";
// import Tentacles from "../Tentacles";

const Welcome = ({ text, textmobile, logo, altLogo }) => {
  const linkToAbout = {
    name: "Contact",
    target: "#contact",
  };

  return (
    <div className={styles.welcome}>
      <div className={styles.main_container}>
        <div className={styles.logo_container}>
          <div className={styles.__logo}>
            <img src={logo} alt={altLogo} />
          </div>
        </div>
        <div className={styles.__container}>
          <div className={styles.text}>
            <span className={styles.__regular_text}>
              <p>{text}</p>
            </span>
            <span className={styles.__text_mobile}>
              <p>{textmobile}</p>
            </span>
          </div>
          <div className={styles.__button_box}>
            <ButtonStyle link={linkToAbout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
