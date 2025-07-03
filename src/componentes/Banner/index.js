import styles from './Banner.module.css';
import circuloColorido from 'img/circulo_colorido.png';
import minhaFoto from 'img/minha_foto.jpg';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.aprentacao}>
        <h1 className={styles.titulo}>
          Olá, mundo!
        </h1>

        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou Gustavo Gomes, sou formado em engenharia de software e desenvolvedor Fullstack.
        </p>
      </div>

      <div className={styles.imagens}>
        <img 
          className={styles.circuloColorido}
          src={circuloColorido} alt="Circulo colorido"
          aria-hidden={true}
          />
        
      <img 
        className={styles.minhaFoto}
        src={minhaFoto} 
        alt="Foto do Gustavo"
        />
      </div>
    </div>
  )
}