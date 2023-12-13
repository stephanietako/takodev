import React, { useState, useRef } from "react";
import styles from "./styles.module.scss";
import Cards from "../Cards";
import Arrows from "../Arrows";
// Assets
import imgCard1 from "../../assets/logo/bb-logo-noir-crop.png";
import imgCard2 from "../../assets/logo/logoblack.png";
import imgCard3 from "../../assets/logo/jmlogo.png";

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
          " Site web Showroom de mobilier design contemporain indoor et outdoor.\nRéalisé avec React js et Node js.",
        image: imgCard1,
        link: "https://www.bebitaliasainttropez.com",
      },
      {
        title: "Lise Braun art",
        content:
          "Site web vitrine de Lise Braun, curation et évènements artistiques.\nRéalisé avec React js et Node js.",
        image: imgCard2,
        link: "https://www.lisebraun.art",
      },
      {
        title: "Jean-Marc Eliette",
        content:
          "Site web vitrine de Jean-Marc Eliette, graphisme, direction artistique et motion design.\nRéalisé avec React js et Three js.",
        image: imgCard3,
        link: "https://jmsite.vercel.app",
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
