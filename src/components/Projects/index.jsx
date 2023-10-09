import React, { useState, useRef } from "react";
import styles from "./styles.module.scss";
import Cards from "../Cards";
// Assets
import imgCard1 from "../../assets/logo/takodev-logo-black.png";
import imgCard2 from "../../assets/images/nasa.jpg";
import imgCard3 from "../../assets/images/nasa.jpg";
import arrow from "../../assets/icon/arrowgray.png";

const Projects = ({ title, text, logo, altLogo }) => {
  const [visible, setVisible] = useState(false);
  const formRef = useRef(null);
  const toggleElmt = () => {
    setVisible(!visible);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const generateCards = () => {
    const cardData = [
      {
        title: "b&b Italia Saint-tropez",
        content: "Contenu de la carte 1",
        image: imgCard1,
        link: "/",
      },
      {
        title: "Carte 2",
        content: "Contenu de la carte 2",
        image: imgCard2,
        link: "/",
      },
      {
        title: "Carte 3",
        content: "Contenu de la carte 3",
        image: imgCard3,
        link: "/",
      },
    ];

    return cardData.map((data, index) => (
      <Cards
        key={index}
        title={data.title}
        content={data.content}
        image={data.image}
        link={data.link}
      />
    ));
  };
  return (
    <div className={styles.projects}>
      <div className={styles.__container}>
        <div className={styles.__box}>
          <div className={styles.__infoBox}>
            <p>{text}</p>
            <div className={styles.__logo}>
              <img src={logo} alt={altLogo} />
            </div>
            <h3>{title}</h3>
            <div className={styles.__arrow}>
              <img src={arrow} alt={"arrow icon"} onClick={toggleElmt} />
            </div>
          </div>
        </div>
        <div className={styles.__container_cards} ref={formRef}>
          {generateCards()}
        </div>
      </div>
    </div>
  );
};
export default Projects;
