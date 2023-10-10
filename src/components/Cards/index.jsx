// Styles
import styles from "./styles.module.scss";

const Cards = ({ title, content, image, alt, link }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.__image}>
          <img src={image} alt={alt} />
        </div>
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
