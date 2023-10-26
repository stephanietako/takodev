import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Links from "../Links";
import IconContact from "../IconContact";
// Assets
import logo from "../../assets/logo/takodev-logo-white.png";
import menu from "../../assets/icon/menu.svg";
import cross from "../../assets/icon/cross.svg";
// Styles
import styles from "./styles.module.scss";

const Navbar = () => {
  const navbarElement = useRef(null);
  const navigationHeight = useRef(0);

  useEffect(() => {
    navigationHeight.current = navbarElement.current.offsetHeight;
    navbarElement.current.style.setProperty(
      "--scroll-padding",
      navigationHeight.current
    );
  }, []);

  const [fix, setFix] = useState(false);

  const setFixed = () => {
    if (window.scrollY >= 114) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setFixed);
    return () => {
      window.removeEventListener("scroll", setFixed);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "Accueil", target: "#welcome" },
    { name: "A Propos", target: "#about" },
    { name: "Projets", target: "#projects" },
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
        <div className={styles.__menu_content}>
          {links.map((link) => (
            <Links key={uuidv4()} link={link} onClick={toggleMenu} />
          ))}
          <div className={styles.__icons}>
            <IconContact />
          </div>
        </div>
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
              <Links
                key={uuidv4()}
                link={link}
                onClick={toggleMenu}
                isMobileMenuActive={isOpen}
                className={isOpen ? styles.link_menu : styles.link}
              />
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
