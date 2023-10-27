import React, { useState, useRef } from "react";
import styles from "./styles.module.scss";
import Cards from "../Cards";
import Arrows from "../Arrows";
// Assets
import imgCard1 from "../../assets/logo/bb-logo-noir-crop.png";
import imgCard2 from "../../assets/images/nasa.jpg";
import imgCard3 from "../../assets/images/nasa.jpg";

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
        title: "B&B Italia Saint-Tropez",
        content:
          " Site web Showroom de mobilier design contemporain indoor et outdoor",
        image: imgCard1,
        link: "https://www.bebitaliasainttropez.com/",
      },
      {
        title: "Projet",
        content: "Projet en cours",
        image: imgCard2,
        link: "/",
      },
      {
        title: "Projet",
        content: "Projet en cours",
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
            <h3>{title}</h3>
            <p>{text}</p>
            <div className={styles.__logo}>
              <img src={logo} alt={altLogo} />
            </div>
          </div>
        </div>
        <Arrows onClick={toggleElmt} />
        <div className={styles.__container_cards} ref={formRef}>
          {generateCards()}
        </div>
      </div>
    </div>
  );
};
export default Projects;
