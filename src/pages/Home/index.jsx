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
            text={"Je suis sur le composant ABOUT"}
            textmobile={"Je suis sur le composant ABOUT"}
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
