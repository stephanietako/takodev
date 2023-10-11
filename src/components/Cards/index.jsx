// Styles
import styles from "./styles.module.scss";

const Cards = ({ title, content, image, alt, link }) => {
  let domain = "";
  // Gérer les erreurs potentielles liées à la construction de l'objet URL
  try {
    const url = new URL(link);
    domain = url.hostname;
  } catch (error) {
    domain = "URL en attente";
  }

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
            {domain}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
