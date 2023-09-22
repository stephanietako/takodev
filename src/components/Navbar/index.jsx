import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import logo from "../../assets/logo/takodev-logo-white.png";
import menu from "../../assets/icon/menu.svg";
import cross from "../../assets/icon/cross.svg";
import Links from "../Links";
import styles from "./styles.module.scss";

const Navbar = () => {
  const navbarElement = useRef(null);
  const navigationHeight = useRef(0); // Utilisez useRef ici

  useEffect(() => {
    navigationHeight.current = navbarElement.current.offsetHeight;
    console.info("Navbar height:", navbarElement.current.offsetHeight);
    navbarElement.current.style.setProperty(
      "--scroll-padding",
      navigationHeight.current
    );
  }, [navbarElement]);

  const [fix, setFix] = useState(false);

  const setFixed = () => {
    if (window.scrollY >= 114) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener("scroll", setFixed);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "Accueil", target: "#welcome" },
    { name: "Projets", target: "#projects" },
    { name: "A Propos", target: "#about" },
    { name: "Contact", target: "#contact" },
  ];

  return (
    <nav
      ref={navbarElement}
      className={fix ? `${styles.navbar} ${styles.fixed}` : `${styles.navbar}`}
    >
      <a href="#welcome">
        <img className={styles.__logo} src={logo} alt="Tako dev logo" />
      </a>
      <div className={styles.__nav_menu}>
        {links.map((link) => (
          <Links key={uuidv4()} link={link} onClick={toggleMenu} />
        ))}
      </div>
      <div className={styles.__nav_burger_menu}>
        <button
          className={styles.__summ}
          onClick={toggleMenu}
          onMouseEnter={toggleMenu}
        >
          <img src={isOpen ? cross : menu} alt={isOpen ? "Menu" : "Cross"} />
        </button>
        {isOpen && (
          <div className={styles.__menu_mobile}>
            {links.map((link) => (
              <Links key={uuidv4()} link={link} onClick={toggleMenu} />
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
