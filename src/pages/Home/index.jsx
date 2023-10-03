import Navbar from "../../components/Navbar";
import Welcome from "../../components/Welcome";
import LinesSection from "../../components/LinesSection";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
// Logos
import logotako from "../../assets/logo/takodev-logo-black.png";
// Images
// import picthome from "../../assets/images/picthome.jpg";
// Styles
import styles from "./styles.module.scss";

const Home = () => {
  // Utilisez la fonction pour convertir une valeur en pixels en vh

  const sections = [
    {
      id: "welcome",
      content: (
        <div className={styles.sections} id="welcome">
          <Welcome
            title={"Votre créateur de solutions web "}
            text={
              "La technologie comme un puissant levier de créativité\nQue vous souhaitiez concevoir un site web réactif\nDévelopper une application web sur mesure\nTako Dev possède l'expertise nécessaire"
            }
            textmobile={
              "La technologie comme un puissant levier de créativité\nQue vous souhaitiez concevoir un site web réactif\nDévelopper une application web sur mesure\nTako Dev possède l'expertise nécessaire"
            }
            logo={logotako}
            altLogo="logo Tako Dev"
            // img={picthome}
            // alt="présentation créatrice su studio Tako Dev"
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
              "Je suis Stéphanie, la fondatrice de Tako Dev, un studio de développement web.\nGrâce à ma maîtrise technique de la programmation JavaScript spécialisée dans l'utilisation de technologies performantes comme React et Node.js, je suis en mesure de concevoir des solutions numériques alliant performance, esthétique et fonctionnalité. Dotées d’un système conçu de manière à être évolutif, ce qui signifie qu'il peut facilement s'adapter à vos besoins futurs sans nécessiter de refonte majeure. \nReact est utilisé par des entreprises de renom telles que Facebook, Instagram, Airbnb, Uber, Netflix, Spotify ou encore Gmail. Et Node.js se distingue par sa stabilité, sa sécurité et sa rapidité. Aussi, mon parcours dans le domaine artistique me permet de comprendre les enjeux culturels et esthétiques de chaque projet. Cette combinaison unique de compétences apporte une perspective innovante tout en tenant compte de vos préférences et de vos désirs en matière de design."
            }
            textmobile={
              "Je suis Stéphanie, la fondatrice de Tako Dev, un studio de développement web.\nGrâce à ma maîtrise technique de la programmation JavaScript spécialisée dans l'utilisation de technologies performantes comme React et Node.js, je suis en mesure de concevoir des solutions numériques alliant performance, esthétique et fonctionnalité. Dotées d’un système conçu de manière à être évolutif, ce qui signifie qu'il peut facilement s'adapter à vos besoins futurs sans nécessiter de refonte majeure. \nReact est utilisé par des entreprises de renom telles que Facebook, Instagram, Airbnb, Uber, Netflix, Spotify ou encore Gmail. Et Node.js se distingue par sa stabilité, sa sécurité et sa rapidité. Aussi, mon parcours dans le domaine artistique me permet de comprendre les enjeux culturels et esthétiques de chaque projet. Cette combinaison unique de compétences apporte une perspective innovante tout en tenant compte de vos préférences et de vos désirs en matière de design."
            }
            logo={logotako}
            altLogo="logo Tako Dev"
            // img={picthome}
            // alt="présentation créatrice su studio Tako Dev"
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
