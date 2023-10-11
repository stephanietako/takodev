// Styles
import styles from "./styles.module.scss";

const Links = ({ link, onClick, isMobileMenuActive }) => {
  const { name, target } = link;

  return (
    <li className={isMobileMenuActive ? styles.__link_mobile : styles.__link}>
      <a href={target} onClick={onClick}>
        {name}
      </a>
    </li>
  );
};

export default Links;
