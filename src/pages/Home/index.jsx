import Navbar from "../../components/Navbar";
import Welcome from "../../components/Welcome";
// Logos
import logotako from "../../assets/logo/takodev-logo-white.png";
// Images
import picthome from "../../assets/images/picthome.jpg";
// Styles
import styles from "./styles.module.scss";
import Projects from "../../components/Projects";

const Home = () => {
  return (
    <>
      <Navbar />
      <section id="welcome">
        <div className={styles.sections}>
          <Welcome
            text={"votre partenaire en développement web sur mesure"}
            textmobile={"votre partenaire en développement web sur mesure"}
            logo={logotako}
            altLogo="logo Tako Dev"
            img={picthome}
            alt="présentation créatrice su studio Tako Dev"
          />
        </div>
      </section>
      <section id="about">
        <div className={styles.sections}></div>
      </section>
      <section id="prices">
        <div className={styles.sections}></div>
      </section>
      <section id="projects">
        <div className={styles.sections}>
          <Projects />
        </div>
      </section>
      <section id="contact">
        <div className={styles.sections}></div>
      </section>
      <section id="exemple1">
        <div className={styles.sections}></div>
      </section>
      <section id="exemple2">
        <div className={styles.sections}></div>
      </section>
      <section id="exemple3">
        <div className={styles.sections}></div>
      </section>
    </>
  );
};

export default Home;
