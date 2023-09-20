// Styles
import styles from "./styles.module.scss";
// import imgCard1 from "../../assets/images/nasa.jpg";
const Cards = ({ title, content, image, alt, link }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img src={image} alt={alt}></img>
        <div className={styles.__infoBox}>
          <h2>{title}</h2>
          <p>{content}</p>
          <a href={link} className={styles.__btn_link}>
            Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
