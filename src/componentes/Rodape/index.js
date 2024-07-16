import styles from './Rodape.module.css';
import { ReactComponent as MarcaRegistrada } from 'img/marca_registrada.svg';

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <MarcaRegistrada />
      Desenvolvido por Gustavo.
    </footer>
  );
}