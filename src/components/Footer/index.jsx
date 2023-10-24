import { Link } from "react-router-dom";
// Styles
import styles from "./styles.module.scss";
// Assets
import logo from "../../assets/logo/takodev-logo-white.png";
import KeepInTouch from "../KeepInTouch";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className={styles.footer}>
      <footer className={styles.__container}>
        <ul>
          <li>
            <a href="#welcome">
              <img
                className={styles.__logo}
                src={logo}
                alt="B&B Italia Saint-Tropez"
              />
            </a>
          </li>
          <li>
            <Link to="terms">Mentions légales</Link>
          </li>
          <li>
            <div className={styles.__copyright}>
              &#169; Copyright {currentYear} | Tako Dev
            </div>
          </li>
        </ul>
        <span>
          <KeepInTouch />
        </span>
      </footer>
    </div>
  );
};

export default Footer;
