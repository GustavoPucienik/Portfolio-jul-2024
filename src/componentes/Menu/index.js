import { useState } from "react";
import styles from "./Menu.module.css";
import MenuLink from "../MenuLink";

export default function Menu() {
  const [aberto, setAberto] = useState(false);

  function fecharMenu() {
    setAberto(false);
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <button
          className={styles.hamburguer}
          onClick={() => setAberto((prev) => !prev)}
          aria-label="Abrir menu"
        >
          ☰
        </button>

        <ul className={`${styles.lista} ${aberto ? styles.aberta : ""}`}>
          <li>
            <MenuLink to="/" onClick={fecharMenu}>
              Início
            </MenuLink>
          </li>
          <li>
            <MenuLink to="/sobremim" onClick={fecharMenu}>
              Sobre mim
            </MenuLink>
          </li>
          <li>
            <MenuLink to="/projetos" onClick={fecharMenu}>
              Projetos
            </MenuLink>
          </li>
          <li>
            <MenuLink to="/contatos" onClick={fecharMenu}>
              Contatos
            </MenuLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
