// Styles
import styles from "./styles.module.scss";
// // Images
// import picthome from "../../assets/images/picthome.jpg";
// Composant GlitchContainer pour afficher le conteneur glitch avec les images glitch
function GlitchContainer({ imageUrl, numImages }) {
  // Générer un tableau d'éléments div pour les images glitch en utilisant la fonction `map`
  const glitchImages = Array.from({ length: numImages }).map((_, index) => (
    // Chaque élément div a une classe "c-glitch__img" et une image de fond spécifiée par l'URL fournie
    <div
      key={index} // Utiliser l'index comme clé unique pour chaque élément
      className={styles.container_glitch__img}
    ></div>
  ));
  // Rendu du conteneur glitch avec les images glitch générées
  return <div className={styles.container_glitch}>{glitchImages}</div>;
}

const GlitchImg = () => {
  // URL de l'image glitch
  const glitchImageUrl = "../../assets/images/picthome.jpg";

  return (
    <main>
      {/* Utilisation du composant GlitchContainer avec l'URL de l'image glitch et le nombre d'images glitch */}
      <GlitchContainer imageUrl={glitchImageUrl} numImages={5} />
    </main>
  );
};

export default GlitchImg;
