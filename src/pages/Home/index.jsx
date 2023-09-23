import Navbar from "../../components/Navbar";
import Welcome from "../../components/Welcome";
import LinesSection from "../../components/LinesSection";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";
// Logos
import logotako from "../../assets/logo/takodev-logo-white.png";
// Images
import picthome from "../../assets/images/picthome.jpg";
// Styles
import styles from "./styles.module.scss";
import Contact from "../../components/Contact";

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
              "Mettre l'art et la technologie au service de vos projets"
            }
            text={
              "Je suis Stéphanie, la fondatrice de Tako Dev.\nMa formation en histoire de l'art me permet de comprendre les enjeux culturels et esthétiques de chaque projet. Tandis que mes compétences techniques en programmation javascript me permettent de réaliser des solutions numériques performantes, évolutives, esthétiques et fonctionnelles.\nLa technologie peut être un outil puissant pour la créativité.\nJ'utilise mes compétences techniques et ma formation artistique pour créer des interfaces intuitives et attrayantes afin de répondre à vos besoins.\nL’atout de Tako Dev réside dans la fusion entre expertise artistique et compétences techniques.\nCette synergie unique permet d'apporter une perspective innovante à chacun de vos projets, tout en tenant compte de vos préférences et envies en matière de design."
            }
            textmobile={
              "Je suis Stéphanie, la fondatrice de Tako Dev.\nMa formation en histoire de l'art me permet de comprendre les enjeux culturels et esthétiques de chaque projet. Tandis que mes compétences techniques en programmation javascript me permettent de réaliser des solutions numériques performantes, évolutives, esthétiques et fonctionnelles.\nLa technologie peut être un outil puissant pour la créativité.\nJ'utilise mes compétences techniques et ma formation artistique pour créer des interfaces intuitives et attrayantes afin de répondre à vos besoins.\nL’atout de Tako Dev réside dans la fusion entre expertise artistique et compétences techniques.\nCette synergie unique permet d'apporter une perspective innovante à chacun de vos projets, tout en tenant compte de vos préférences et envies en matière de design."
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

    {
      id: "contact",
      content: (
        <div className={styles.sections} id="contact">
          <Contact
            title={"BOX GAUCHE CONTACT FORM"}
            content={"paragraphe  !!!!!"}
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <LinesSection sections={sections} />
      <Footer />
    </>
  );
};

export default Home;
