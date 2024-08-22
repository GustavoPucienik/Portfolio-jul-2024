import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "img/sobre_mim_capa.png";
import fotoSobreMim from "img/sobre_mim_foto.jpg";

export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
    >

    <h3 className={styles.subtitulo}>
      Olá eu sou o Gustavo!
    </h3>

    <img 
      src={fotoSobreMim} 
      alt="Foto do Gustavo" 
      className={styles.fotoSobreMim}
    />

    <p className={styles.paragrafo}>
      Oi, tudo bem? Eu sou estudante e desenvolvedor, estou dentro desse mundo há 2 anos. Desde que comecei, me apaixonei pela tecnologia e pela capacidade de criar soluções inovadoras.
    </p>

    <p className={styles.paragrafo}>
      Ao longo desses anos, me dediquei a aprender diversas linguagens e frameworks, incluindo SQL, Node.js, React, PHP, Python e Java. Cada um desses cursos me ajudou a entender melhor diferentes aspectos do desenvolvimento e a aprimorar minhas habilidades técnicas. Alguns desses projetos estão no meu <a href="https://github.com/GustavoPucienik" target="_blank" rel="noreferrer">github</a>.
    </p>

    <p className={styles.paragrafo}>E também estudei por 1 ano na <a href="https://cursos.alura.com.br/user/gomespucienik" target="_blank" rel="noopener noreferrer">alura</a>, concluindo varios cursos de programação.</p>

    <p className={styles.paragrafo}>
      Um dos meus maiores projetos até agora foi a criação de um sistema de ordens de serviço para a empresa Apwinner. Esse projeto foi um desafio incrível e me proporcionou uma experiência prática valiosa na resolução de problemas do mundo real.
    </p>

    <p className={styles.paragrafo}>
      Estou sempre buscando aprender mais e me manter atualizado com as últimas tendências e tecnologias. Acredito que o aprendizado contínuo é essencial para qualquer desenvolvedor que deseja se destacar no mercado e criar soluções eficientes e inovadoras.
    </p>
    <p className={styles.paragrafo}>
      Fora do mundo da tecnologia, gosto de jogar video game, ler livros e assitir séries, o que me ajuda a manter um equilíbrio entre trabalho e lazer.
    </p>

    </PostModelo>
  );
}