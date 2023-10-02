// Styles
import styles from "./styles.module.scss";
// Imports
import Formulaire from "../Formulaire";
// Assets
import imgcontact from "../../assets/logo/takodev-logo-white.png";

const Contact = () => {
  return (
    <div className={styles.__container_contact}>
      <Formulaire
        content={"Vous avez un projet ?\nDes questions ?"}
        title={"Ecrivez-moi"}
        image={imgcontact}
      />
    </div>
  );
};

export default Contact;
