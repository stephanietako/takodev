import styles from "./styles.module.scss";
import GlitchImg from "../GlitchImg";
const Welcome = ({ img, alt, text, textmobile, logo, altLogo, link }) => {
  return (
    <div className={styles.blocs}>
      <div className={styles.__container}>
        <div className={styles.__bloc}>
          <div className={styles.logo_box}>
            <div className={styles.__logo}>
              <a href={link}>
                <img src={logo} alt={altLogo} />
              </a>
            </div>
          </div>
          <div className={styles.__img}>
            <GlitchImg />
          </div>

          <div className={styles.__text}>
            <p>{text}</p>
          </div>
          {/* <div className={styles.__text_mobile}>
            <p>{textmobile}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
