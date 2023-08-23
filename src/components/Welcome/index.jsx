// Styles
import styles from "./styles.module.scss";
// Components
import GlitchImg from "../GlitchImg";
import ButtonStyle from "../Button";

const Welcome = ({ text, textmobile, logo, altLogo, link }) => {
  return (
    <div className={styles.blocs}>
      <div className={styles.__container}>
        <div className={styles.__bloc}>
          <div className={styles.logo_box}>
            <div className={styles.__logo}>
              <img src={logo} alt={altLogo} />
            </div>
          </div>
          <div className={styles.__img}>
            <GlitchImg />
          </div>
          <div className={styles.__text}>
            <span className={styles.home_text}>
              <p>{text}</p>
            </span>
            <span className={styles.__text_mobile}>
              <p>{textmobile}</p>
            </span>
          </div>
        </div>
      </div>
      <ButtonStyle />
      {/* <div className={styles.__btn_contact}>
        <button className={styles.__glow_on_hover} type="button">
          CONTACT
        </button>
      </div> */}
    </div>
  );
};

export default Welcome;
