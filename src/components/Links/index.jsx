import { useState } from "react";
// Styles
import styles from "./styles.module.scss";

const Links = ({ link, onClick, isMobileMenuActive }) => {
  const { name, target } = link;
  const [isHovered, setIsHovered] = useState(false);

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
          style={{ color: isHovered ? "silver" : "white" }}
        >
          {name}
        </a>
      ) : (
        <a href={target} onClick={onClick} className="link">
          {name}
        </a>
      )}
    </li>
  );
};

export default Links;
