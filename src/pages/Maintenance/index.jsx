// Assets
import logo from "../../assets/logo/takodev-logo-white.png";

// Styles
import styles from "./styles.module.scss";

const Maintenance = () => {
  return (
    <div className={styles.maintenance}>
      <div>
        <img src={logo} alt="Tako Dev logo" />
        <p>Bientôt le site de Tako Dev</p>
        <p>Développement en cours....</p>
      </div>
    </div>
  );
};

export default Maintenance;
