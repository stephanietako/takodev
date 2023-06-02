import Navbar from "../../components/Navbar";
import Welcome from "../../components/Welcome";
// Logos
import logotako from "../../assets/logo/takodev-logo-white.png";
// Images
import picthome from "../../assets/images/picthome.jpg";
// Styles
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <>
      <Navbar />
      <section id="welcome">
        <div className={styles.sections}>
          <Welcome
            text={
              "Tako Dev votre partenaire en développement web sur mesure. Des solutions web personnalisées, créées par notre équipe de développeurs expérimentés. Faites confiance à Tako Dev pour des résultats de qualité, adaptés à vos besoins."
            }
            // textmobile={
            //   " Tako Dev votre partenaire en développement web sur mesure. Des solutions web personnalisées, créées par notre équipe de développeurs expérimentés. Faites confiance à Tako Dev pour des résultats de qualité, adaptés à vos besoins.."
            // }
            logo={logotako}
            altLogo="logo Tako Dev"
            img={picthome}
            alt="photographie portrait de présentation"
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
        <div className={styles.sections}></div>
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
