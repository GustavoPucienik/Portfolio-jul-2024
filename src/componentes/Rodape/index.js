import styles from './Rodape.module.css';

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div>
        Desenvolvido por Gustavo
      </div>
      {encodeURI("gomespucienik@gmail.com")}
    </footer>
  );
}