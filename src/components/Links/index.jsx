import { useState } from "react";
import crossImage from "../../assets/icon/cross.svg";
import styles from "./styles.module.scss";

const Links = ({ link, onClick }) => {
  const { name, target } = link;

  const [isHovered, setIsHovered] = useState(false); // État pour gérer le survol

  return (
    <>
      <li
        className={styles.link}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a href={target} onClick={onClick}>
          {name}
        </a>
        {isHovered && (
          <img className={styles.hoverImage} src={crossImage} alt="Cross" />
        )}
      </li>
    </>
  );
};

export default Links;
