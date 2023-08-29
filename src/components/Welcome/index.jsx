import styles from "./styles.module.scss";
// Components
import ButtonStyle from "../Button";

const Welcome = ({ text, textmobile, logo, altLogo }) => {
  const linkToAbout = {
    name: "À propos",
    target: "#about",
  };

  return (
    <div className={styles.blocs}>
      <div className={styles.__container}>
        <div className={styles.__bloc}>
          <div className={`${styles.box} ${styles.logo_container} `}>
            <div className={styles.__logo}>
              <img src={logo} alt={altLogo} />
            </div>
          </div>
          <div className={`${styles.box} ${styles.button_box} `}>
            <ButtonStyle link={linkToAbout} />
          </div>
          <div className={`${styles.box} ${styles.home_text} `}>
            <span className={styles.__regular_text}>
              <p>{text}</p>
            </span>
            <span className={styles.__text_mobile}>
              <p>{textmobile}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
