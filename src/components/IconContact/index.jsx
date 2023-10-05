// Assets
import mail from "../../assets/icon/at-clear.png";
// import linkedin from "../../assets/icon/linkedin.png";
// Styles
import styles from "./styles.module.scss";

const IconContact = () => {
  return (
    //     <div class="segment">
    //   <button class="unit" type="button"><i class="icon ion-md-arrow-back"></i></button>
    //   <button class="unit" type="button"><i class="icon ion-md-bookmark"></i></button>
    //   <button class="unit" type="button"><i class="icon ion-md-settings"></i></button>
    // </div>
    <div className={styles.__iconBox}>
      <a href="/">
        <button type="button" className={styles.unit}>
          {" "}
          <img className={styles.icon} src={mail} alt="icon mail" />
        </button>
      </a>

      {/* <a href="/">
        <img
          className={styles.__icon_linkedin}
          src={linkedin}
          alt="icon linkedin"
        />
      </a> */}
    </div>
  );
};

export default IconContact;
