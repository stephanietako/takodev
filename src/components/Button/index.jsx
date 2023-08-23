// Styles
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const ButtonStyle = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <button className={styles.__btn} type="button">
          <span>contact</span>
        </button>
      </Link>
    </div>
  );
};

export default ButtonStyle;
