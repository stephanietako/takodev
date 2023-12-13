import React, { useState } from "react";
import styles from "./styles.module.scss";

const isValidUrl = (url) => {
  try {
    const parsed = new URL(url);
    return ["https:", "http:"].includes(parsed.protocol);
  } catch (error) {
    return false;
  }
};

const Cards = ({ title, content, image, alt, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInfoBoxOpen, setIsInfoBoxOpen] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const toggleInfoBox = () => {
    setIsInfoBoxOpen(!isInfoBoxOpen);
  };

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
      <div
        className={`${styles.card} ${isHovered ? styles.hovered : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={toggleInfoBox}
      >
        <div className={styles.__image}>
          <img src={image} alt={alt} />
        </div>
        {isInfoBoxOpen && (
          <div className={styles.__infoBox}>
            <h2>{title}</h2>
            <p>{content}</p>
            <a
              href={isValidUrl(link) ? link : "#"}
              rel="noopener noreferrer"
              className={styles.__btn_link}
            >
              {domain}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
