// Assets
import mail from "../../assets/icon/mail.png";
import linkedin from "../../assets/icon/linkedin.png";
// Styles
import styles from "./styles.module.scss";

const IconContact = () => {
  return (
    <div className={styles.icons_contact}>
      <span className={styles.__iconBox}>
        <a href="/">
          <img className={styles.__icons} src={mail} alt="icon mail" />
        </a>

        <a href="/">
          <img className={styles.__icons} src={linkedin} alt="icon linkedin" />
        </a>
      </span>
    </div>
  );
};

export default IconContact;
