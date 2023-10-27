import Navbar from "../../components/Navbar";
import Welcome from "../../components/Welcome";
import LinesSection from "../../components/LinesSection";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
// Assets
import logotako from "../../assets/logo/takodev-logo-white.png";
// Styles
import styles from "./styles.module.scss";

const Home = () => {
  const sections = [
    {
      id: "welcome",
      content: (
        <div className={styles.sections} id="welcome">
          <Welcome
            title={"Votre créateur de solutions web "}
            text={
              "La technologie comme un puissant levier de créativité\nDe la conception d'un site web réactif\nAu développement d'une application web sur mesure\nTako Dev possède l'expertise nécessaire"
            }
            textmobile={
              "La technologie comme un puissant levier de créativité\nDe la conception d'un site web réactif\nAu développement d'une application web sur mesure\nTako Dev possède l'expertise nécessaire"
            }
            logo={logotako}
            altLogo="logo Tako Dev"
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
              "Je suis Stéphanie, la fondatrice de Tako Dev, un studio de développement web.\nMa maîtrise technique de la programmation JavaScript spécialisée dans l'utilisation de technologies performantes comme React et Node.js me permet de concevoir des solutions numériques alliant performance, esthétique et fonctionnalité.\nCelles-ci sont dotées d'un système conçu de manière à être évolutif. Cela signifie que votre projet pourra facilement s'adapter à vos besoins futurs sans nécessiter de refonte majeure.\nReact est utilisé par des entreprises de renom telles que Facebook, Instagram, Airbnb, Uber, Netflix, Spotify ou Gmail.\nEt Node.js se distingue par sa stabilité, sa sécurité et sa rapidité.\nMon parcours dans le domaine artistique me permet de comprendre les enjeux culturels et esthétiques de chaque projet.\nCette combinaison unique de compétences apporte une perspective innovante tout en tenant compte de vos préférences et désirs en matière de design."
            }
            textmobile={
              "Je suis Stéphanie, la fondatrice de Tako Dev, un studio de développement web.\nMa maîtrise technique de la programmation JavaScript spécialisée dans l'utilisation de technologies performantes comme React et Node.js me permet de concevoir des solutions numériques alliant performance, esthétique et fonctionnalité.\nCelles-ci sont dotées d'un système conçu de manière à être évolutif. Cela signifie que votre projet pourra facilement s'adapter à vos besoins futurs sans nécessiter de refonte majeure.\nReact est utilisé par des entreprises de renom telles que Facebook, Instagram, Airbnb, Uber, Netflix, Spotify ou Gmail.\nEt Node.js se distingue par sa stabilité, sa sécurité et sa rapidité.\nMon parcours dans le domaine artistique me permet de comprendre les enjeux culturels et esthétiques de chaque projet.\nCette combinaison unique de compétences apporte une perspective innovante tout en tenant compte de vos préférences et désirs en matière de design."
            }
            logo={logotako}
            altLogo="logo Tako Dev"
          />
        </div>
      ),
    },

    {
      id: "projects",
      content: (
        <div className={styles.sections} id="projects">
          <Projects
            text={
              "Conception du design personnalisé\nCréation de sites web réactifs sur tous les écrans\nOptimisation du référencement SEO\nTako Dev offre une approche globale à votre projet \nUne expérience utilisateur réactive pour une visibilité en ligne réussie"
            }
            logo={logotako}
            altLogo="logo Tako Dev"
            title={"projets"}
          />
        </div>
      ),
    },

    {
      id: "contact",
      content: (
        <div className={styles.sections} id="contact">
          <Contact
            title={"écrivez-moi"}
            text={
              "vous avez un projet ?\nDes questions ?\nVous avez besoin d'un devis ?"
            }
            logo={logotako}
            altLogo="logo Tako Dev"
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
