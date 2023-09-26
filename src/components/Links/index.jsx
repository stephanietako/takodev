import { useState } from "react";
// Styles
import styles from "./styles.module.scss";
// Assets
import crossImage from "../../assets/icon/crossgray.svg";

const Links = ({ link, onClick, isMobileMenuActive }) => {
  const { name, target } = link;
  const [isHovered, setIsHovered] = useState(false); // État pour gérer le survol

  return (
    <li
      className={styles.link}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isMobileMenuActive ? (
        <a
          href={target}
          onClick={onClick}
          style={{ color: isHovered ? "blue" : "white" }}
        >
          {name}
        </a>
      ) : (
        <>
          <a href={target} onClick={onClick}>
            {name}
          </a>
          {!isMobileMenuActive && isHovered && (
            <img className={styles.__hoverImage} src={crossImage} alt="Cross" />
          )}
        </>
      )}
    </li>
  );
};

export default Links;
