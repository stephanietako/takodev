import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// Styles
import styles from "./styles.module.scss";

const Links = ({ link, onClick }) => {
  const { name, target, dropdown } = link;

  const [isOpen, setIsOpen] = useState(false);

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setIsOpen(false);
    onClick();
  };

  if (dropdown) {
    return (
      <details
        open={isOpen}
        className={styles.dropdown}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(isOpen)}
      >
        <summary onClick={() => setIsOpen(!isOpen)}>{name}</summary>
        <ul
          onClick={() => {
            handleClick();
            onClick();
          }}
        ></ul>
      </details>
    );
  } else {
    return (
      <li className={styles.link}>
        <a href={target} onClick={onClick}>
          {name}
        </a>
      </li>
    );
  }
};
export default Links;
