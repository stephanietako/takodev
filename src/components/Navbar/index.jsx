import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
// Assets
import logo from "../../assets/logo/takodev-logo-white.png";
import menu from "../../assets/icon/menu.svg";
import cross from "../../assets/icon/cross.svg";
// Components
import Links from "../Links";
// Styles
import styles from "./styles.module.scss";

const Navbar = () => {
  const navbarElement = useRef(null);
  let navigationHeight = 0;

  useEffect(() => {
    // eslint-disable-next-line
    navigationHeight = navbarElement.current.offsetHeight;
    console.info("Navbar height:", navbarElement.current.offsetHeight);
    navbarElement.current.style.setProperty(
      "--scroll-padding",
      navigationHeight
    );
  }, [navbarElement]);

  //navbar color state change managment
  const [fix, setFix] = useState(false);
  const setFixed = () => {
    if (window.scrollY >= 114) {
      setFix(true);
    } else {
      setFix(false);
    }
  };
  window.addEventListener("scroll", setFixed);

  // menu state change management
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Main navbar menu
  const links = [
    { name: "Accueil", target: "#welcome" },
    { name: "Projets", target: "#projects" },
    { name: "Contact", target: "#contact" },
  ];
  // Main navbar menu for mobile
  const linksMobile = [
    { name: "Accueil", target: "#welcome" },
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
      {/* DESKTOP MENU */}
      <div className={styles.__nav_menu}>
        {links.map((link) => {
          return <Links key={uuidv4()} link={link} onClick={toggleMenu} />;
        })}
      </div>
      {/* MOBILE MENU */}
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
            {linksMobile.map((link) => {
              return <Links key={uuidv4()} link={link} onClick={toggleMenu} />;
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
