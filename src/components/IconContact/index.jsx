import React, { useState } from "react";
// Assets
import mail from "../../assets/icon/at-clear.png";
import linkedin from "../../assets/icon/linkedin.png";
import mailHovered from "../../assets/icon/at-colored.png";
import linkedinHovered from "../../assets/icon/linkedin-colored.png";
// Styles
import styles from "./styles.module.scss";

const IconContact = () => {
  const [isMailHovered, setIsMailHovered] = useState(false);
  const [isLinkedinHovered, setIsLinkedinHovered] = useState(false);
  return (
    <div className={styles.__iconBox}>
      <a href="/">
        <button
          type="button"
          className={styles.unit}
          onMouseEnter={() => setIsMailHovered(true)}
          onMouseLeave={() => setIsMailHovered(false)}
        >
          {" "}
          <img
            className={styles.icon}
            src={isMailHovered ? mailHovered : mail}
            alt="icon mail"
          />
        </button>
      </a>

      <a href="/">
        <button
          type="button"
          className={styles.unit}
          onMouseEnter={() => setIsLinkedinHovered(true)}
          onMouseLeave={() => setIsLinkedinHovered(false)}
        >
          {" "}
          <img
            className={styles.icon}
            src={isLinkedinHovered ? linkedinHovered : linkedin}
            alt="icon linkedin"
          />
        </button>
      </a>
    </div>
  );
};

export default IconContact;
