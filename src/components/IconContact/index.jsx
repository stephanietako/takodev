// Assets
import mail from "../../assets/icon/mail.png";
import linkedin from "../../assets/icon/linkedin.png";
// Styles
import styles from "./styles.module.scss";

const IconContact = () => {
  return (
    <span className={styles.__iconBox}>
      <a href="/">
        <img className={styles.__icon_mail} src={mail} alt="icon mail" />
      </a>

      <a href="/">
        <img
          className={styles.__icon_linkedin}
          src={linkedin}
          alt="icon linkedin"
        />
      </a>
    </span>
  );
};

export default IconContact;
