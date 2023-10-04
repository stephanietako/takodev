import Formulaire from "../Formulaire";
// Styles
import styles from "./styles.module.scss";

const Contact = ({ title, text, logo, altLogo }) => {
  return (
    <div className={styles.container_contact}>
      <div className={styles.__box}>
        <div className={styles.__infoBox}>
          <h3>{title}</h3>
          <p>{text}</p>

          <div className={styles.__logo}>
            <img src={logo} alt={altLogo} />
          </div>
        </div>
      </div>

      <Formulaire />
    </div>
  );
};

export default Contact;
