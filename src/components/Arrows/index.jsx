import React, { useState } from "react";
import styles from "./styles.module.scss";
import arrow from "../../assets/icon/arrow.png";
import arrowInHover from "../../assets/icon/arrow-colored.png";
const Arrows = ({ onClick, isHovered }) => {
  const [isArrowHovered, setIsArrowHovered] = useState(false);
  return (
    <div
      className={styles.arrow}
      onMouseEnter={() => setIsArrowHovered(true)}
      onMouseLeave={() => setIsArrowHovered(false)}
    >
      <img
        src={isArrowHovered ? arrowInHover : arrow}
        alt={"icon flêche"}
        onClick={onClick}
      />
    </div>
  );
};

export default Arrows;
