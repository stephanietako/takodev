// Styles
import styles from "./styles.module.scss";

const Tentacles = () => {
  const renderDivs = (n) => {
    if (n > 0) {
      return (
        // <div className={styles.__renderTentacles} key={n}>
        <div
          className={`${styles.__renderTentacles} ${styles.__tentacles} `}
          key={n}
        >
          {renderDivs(n - 1)}
        </div>
      ); // Rendu récursif
    }
    return null; // Retourne null lorsque n atteint 0
  };

  const tentacles = 1;
  let n = tentacles; // Déclaration de n avec let pour pouvoir le modifier

  const tentacleElements = []; // Je stocke les éléments de tentacules

  // Boucle while pour générer les éléments de tentacules
  while (n > 0) {
    tentacleElements.push(
      <div className={`_${tentacles - n + 1} ${styles.tentacle}`} key={n}>
        {renderDivs(75)}
        {/* Appel de la fonction pour générer des div imbriqués */}
      </div>
    );
    n--; // Décrémentation de n à chaque itération
  }

  return (
    <div className={styles.octopus}>
      <div className={styles.container}>{tentacleElements}</div>{" "}
    </div>
  );
};

export default Tentacles;
