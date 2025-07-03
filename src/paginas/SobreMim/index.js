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
      Olá, eu sou o Gustavo!
    </h3>

    <img 
      src={fotoSobreMim} 
      alt="Foto do Gustavo" 
      className={styles.fotoSobreMim}
    />

    <p className={styles.paragrafo}>
      Oi, tudo bem? Eu sou programador e formado em engenharia de software, estou dentro desse mundo há 3 anos. Desde que comecei, me apaixonei pela tecnologia e pela capacidade de desenvolver soluções e otimizar processos.
    </p>

    <p className={styles.paragrafo}>
       Ao longo desses anos, me dediquei a aprender diversas linguagens e frameworks. Também estudei durante 1 ano na <a href="https://cursos.alura.com.br/user/gomespucienik" target="_blank" rel="noopener noreferrer">Alura</a>, onde concluí vários cursos de programação. Alguns dos meus projetos estão disponíveis no meu <a href="https://github.com/GustavoPucienik" target="_blank" rel="noreferrer">GitHub</a>.
    </p>

    <p className={styles.paragrafo}>
      Um dos meus projetos mais relevantes foi o desenvolvimento de um sistema de ordens de serviço para a empresa Apwinner, onde tive a oportunidade de aplicar meus conhecimentos em um contexto real e trazer melhorias para o processo interno da empresa.
    </p>

    <p className={styles.paragrafo}>
      Atualmente, atuo como desenvolvedor na Pontamed Farmacêutica, trabalhando em projetos de maior escala, que envolvem integrações com múltiplos módulos e exigem soluções robustas. Tenho aprendido muito com os desafios do dia a dia e com a colaboração em equipe.
    </p>

    <p className={styles.paragrafo}>
      Sou movido por aprendizado contínuo e gosto de estar sempre por dentro das tendências da área de tecnologia. Acredito que a curiosidade e a prática constante são essenciais para quem quer crescer como desenvolvedor e entregar resultados de valor.
    </p>

    <p className={styles.paragrafo}>
      Fora do mundo da programação, gosto de jogar videogame, assistir séries e ler livros — momentos que me ajudam a recarregar as energias e manter o equilíbrio.
    </p>

    </PostModelo>
  );
}
