import React, { useState, useRef } from "react";
import Formulaire from "../Formulaire";
import Arrows from "../Arrows";
// Assets
import IconContact from "../IconContact";
// Styles
import styles from "./styles.module.scss";

const Contact = ({ title, text, logo, altLogo }) => {
  const [visible, setVisible] = useState(false);
  const formRef = useRef(null);

  const toggleElmt = () => {
    setVisible(!visible);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={styles.contact}>
      <div className={styles.__container_contact}>
        <div className={styles.__box}>
          <div className={styles.__infoBox}>
            <h3>{title}</h3>
            <p>{text}</p>
            <div className={styles.__logo}>
              <img src={logo} alt={altLogo} />
            </div>
            <Arrows onClick={toggleElmt} />
          </div>
          <div className={styles.__icons}>
            <IconContact />
          </div>
        </div>
        <div className={styles.__form} ref={formRef}>
          <Formulaire />
        </div>
      </div>
    </div>
  );
};

export default Contact;
