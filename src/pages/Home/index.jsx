import Navbar from "../../components/Navbar";
import Welcome from "../../components/Welcome";
import LinesSection from "../../components/LinesSection";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
// Logos
import logotako from "../../assets/logo/takodev-logo-white.png";
// Images
import picthome from "../../assets/images/picthome.jpg";
// Styles
import styles from "./styles.module.scss";

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
              "Je suis Stéphanie, la fondatrice de Tako Dev, un studio de développement web spécialisé dans l'utilisation de technologies de pointe telles que React et Node.js.\nMon parcours en histoire de l'art me permet de saisir les aspects culturels et esthétiques de chaque projet. Associant cette sensibilité artistique à mes compétences techniques en programmation JavaScript, je crée des solutions numériques performantes, évolutives, esthétiques et fonctionnelles.\nLa technologie devient ainsi un puissant levier de créativité.\nCette synergie unique nous permet d'apporter une perspective innovante à chacun de vos projets, tout en prenant en compte vos préférences et désirs en matière de design.\nQue ce soit pour un site web réactif, une application web sur mesure ou une refonte complète, nous avons l'expertise nécessaire pour sublimer votre présence en ligne."
            }
            textmobile={
              "Je suis Stéphanie, la fondatrice de Tako Dev, un studio de développement web spécialisé dans l'utilisation de technologies de pointe telles que React et Node.js.\nMon parcours en histoire de l'art me permet de saisir les aspects culturels et esthétiques de chaque projet. Associant cette sensibilité artistique à mes compétences techniques en programmation JavaScript, je crée des solutions numériques performantes, évolutives, esthétiques et fonctionnelles.\nLa technologie devient ainsi un puissant levier de créativité.\nCette synergie unique nous permet d'apporter une perspective innovante à chacun de vos projets, tout en prenant en compte vos préférences et désirs en matière de design.\nQue ce soit pour un site web réactif, une application web sur mesure ou une refonte complète, nous avons l'expertise nécessaire pour sublimer votre présence en ligne."
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
          <Contact />
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
