import styles from "./Menu.module.css";
import MenuLink from "../MenuLink";

export default function Menu() {

  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/" >
            Inicio
        </MenuLink>
        <MenuLink to="/sobremim">
            Sobre mim
        </MenuLink>
        <MenuLink to="/projetos">
            Projetos
        </MenuLink>
      </nav>
    </header>
  );
}