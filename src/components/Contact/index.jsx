// Styles
import styles from "./styles.module.scss";
// Imports
import Form from "../Form";
// import imgCard1 from "../../assets/images/nasa.jpg";
const Contact = ({ title, content, image, alt }) => {
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={`${styles.box} ${styles.__left_container} `}>
          <img src={image} alt={alt}></img>
          <div className={styles.__infoBox}>
            <h2>{title}</h2>
            <p>{content}</p>
          </div>
        </div>
        <div className={`${styles.box} ${styles.__form_container} `}>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
