import Navbar from "../../components/Navbar";
import Welcome from "../../components/Welcome";
import LinesSection from "../../components/LinesSection";
import About from "../../components/About";
// Logos
import logotako from "../../assets/logo/takodev-logo-white.png";
// Images
import picthome from "../../assets/images/picthome.jpg";
// Styles
import styles from "./styles.module.scss";
import Projects from "../../components/Projects";

const Home = () => {
  const sections = [
    {
      id: "welcome",
      content: (
        <div className={styles.sections} id="welcome">
          <Welcome
            text={"Votre créateur de solutions web "}
            textmobile={"Votre créateur de solutions web "}
            logo={logotako}
            altLogo="logo Tako Dev"
            img={picthome}
            alt="présentation créatrice su studio Tako Dev"
          />
        </div>
      ),
    },

    {
      id: "about",
      content: (
        <div className={styles.sections} id="about">
          <About
            title={"Studio de développement web"}
            subtitle={
              "Mettre l'art et la technologie\nau service de vos projets"
            }
            text={
              "Je suis Stéphanie, la fondatrice de Tako Dev.\n Ma formation en histoire de l'art me permet de comprendre les enjeux culturels et esthétiques de chaque projet. Tandis que mes compétences techniques en programmation javascript me permettent de réaliser des solutions numériques performantes, évolutives, esthétiques et fonctionnelles.\n La technologie peut être un outil puissant pour la créativité.\n J'utilise mes compétences techniques et ma formation artistique pour créer des interfaces intuitives et attrayantes afin de répondre à vos besoins.\n L’atout de Tako Dev réside dans la fusion entre expertise artistique et compétences techniques. \n Cette synergie unique permet d'apporter une perspective innovante à chacun de vos projets, tout en tenant compte de vos préférences et envies en matière de design. "
            }
            textmobile={
              "Je suis Stéphanie, la fondatrice de Tako Dev.\n Ma formation en histoire de l'art me permet de comprendre les enjeux culturels et esthétiques de chaque projet. Tandis que mes compétences techniques en programmation javascript me permettent de réaliser des solutions numériques performantes, évolutives, esthétiques et fonctionnelles.\n La technologie peut être un outil puissant pour la créativité.\n J'utilise mes compétences techniques et ma formation artistique pour créer des interfaces intuitives et attrayantes afin de répondre à vos besoins. L’atout de Tako Dev réside dans la fusion entre expertise artistique et compétences techniques. \n Cette synergie unique permet d'apporter une perspective innovante à chacun de vos projets, tout en tenant compte de vos préférences et envies en matière de design."
            }
            logo={logotako}
            altLogo="logo Tako Dev"
            img={picthome}
            alt="présentation créatrice su studio Tako Dev"
          />
        </div>
      ),
    },

    {
      id: "projects",
      content: (
        <div className={styles.sections} id="projects">
          <Projects />
        </div>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <div>
        <LinesSection sections={sections} />
      </div>
    </>
  );
};

export default Home;
