import React, { useState, useRef } from "react";
import Formulaire from "../Formulaire";
import IconContact from "../IconContact";
// Assets
import arrow from "../../assets/icon/arrowgray.png";
// Styles
import styles from "./styles.module.scss";

const Contact = ({ title, text, logo, altLogo }) => {
  const [visible, setVisible] = useState(false);
  const formRef = useRef(null);
  const toggleText = () => {
    setVisible(!visible);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={styles.container_contact}>
      <div className={styles.__box}>
        <div className={styles.__infoBox}>
          <h3>{title}</h3>
          <p>{text}</p>
          <div className={styles.__logo}>
            <img src={logo} alt={altLogo} />
          </div>
          <div className={styles.__arrow}>
            <img src={arrow} alt={"arrow icon"} onClick={toggleText} />
          </div>
        </div>
        <div className={styles.__icons}>
          <IconContact />
        </div>
      </div>
      <div className={styles.__form} ref={formRef}>
        <Formulaire />
      </div>
    </div>
  );
};

export default Contact;
