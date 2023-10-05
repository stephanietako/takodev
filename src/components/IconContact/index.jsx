// Assets
import mail from "../../assets/icon/at-clear.png";
import linkedin from "../../assets/icon/linkedin.png";
// Styles
import styles from "./styles.module.scss";

const IconContact = () => {
  return (
    <div className={styles.__iconBox}>
      <a href="/">
        <button type="button" className={styles.unit}>
          {" "}
          <img className={styles.icon} src={mail} alt="icon mail" />
        </button>
      </a>

      <a href="/">
        <button type="button" className={styles.unit}>
          {" "}
          <img className={styles.icon} src={linkedin} alt="icon likl" />
        </button>
      </a>
    </div>
  );
};

export default IconContact;
