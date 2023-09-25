// Styles
import styles from "./styles.module.scss";
// Imports
import Form from "../Form";
// Assets
import imgcontact from "../../assets/images/nasa.jpg";

const Contact = () => {
  return (
    <div className={styles.__container_contact}>
      <Form
        content={"LEFT CONTENT Paragraphe"}
        title={"TITRE"}
        image={imgcontact}
      />
    </div>
  );
};

export default Contact;
