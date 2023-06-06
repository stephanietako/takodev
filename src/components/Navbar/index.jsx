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
  ////////////////////////////////////////////////////////
  // navbar color state change managment
  const [fix, setFix] = useState(false);
  const setFixed = () => {
    if (window.scrollY >= 111) {
      setFix(true);
    } else {
      setFix(false);
    }
  };
  window.addEventListener("scroll", setFixed);
  ///////////////////////////////////////////////////////////
  // menu state change management
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  ///////////////////////////////////////////////////////////////
  // Main navbar menu
  const links = [
    { name: "Accueil", target: "#welcome" },
    { name: "A propos", target: "#about" },
    { name: "Projets", target: "#projects" },
    { name: "Produits", target: "", dropdown: true },
    { name: "Contact", target: "#contact" },
  ];
  // Main navbar menu for mobile
  const linksMobile = [
    { name: "Accueil", target: "#welcome" },
    { name: "A propos", target: "#about" },
    { name: "Projets", target: "#projects" },
    {
      name: "Produits",
      target: "",
      dropdown: true,
    },
    { name: "Contact", target: "#contact" },
  ];

  // Sub links navbar menu
  const sublinks = [
    [
      { name: "exemple1", target: "#exemple1" },
      { name: "exemple2", target: "#exemple2" },
      { name: "exemple3", target: "#exemple3" },
    ],
  ];

  return (
    <nav
      ref={navbarElement}
      className={fix ? `${styles.navbar} ${styles.fixed}` : `${styles.navbar}`}
    >
      <a href="#welcome">
        <img className={styles.__logo} src={logo} alt="Tako dev logo" />
      </a>
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
          <div>
            {linksMobile.map((link, index) => {
              return (
                <Links
                  key={uuidv4()}
                  link={link}
                  sublinks={sublinks}
                  dropdownPosition={0}
                  onClick={toggleMenu}
                />
              );
            })}
          </div>
        )}
      </div>
      {/* DESKTOP MENU */}
      <div className={styles.__nav_menu}>
        {links.map((link, index) => {
          let dropdownPosition = 0;
          const ddList = links.filter((lnk) => lnk.dropdown === true);
          ddList.map((lnk, index) => {
            if (link.name === lnk.name) dropdownPosition = index;
            return null;
          });
          return (
            <Links
              key={uuidv4()}
              link={link}
              sublinks={sublinks}
              dropdownPosition={dropdownPosition}
              onClick={toggleMenu}
            />
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
