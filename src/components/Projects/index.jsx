import styles from "./styles.module.scss";
import Cards from "../Cards";
import imgCard1 from "../../assets/logo/takodev-logo-black.png";
import imgCard2 from "../../assets/images/nasa.jpg";
import imgCard3 from "../../assets/images/nasa.jpg";

const Projects = () => {
  const generateCards = () => {
    const cardData = [
      {
        title: "Carte 1",
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
  return <div className={styles.__container_cards}> {generateCards()}</div>;
};
export default Projects;
