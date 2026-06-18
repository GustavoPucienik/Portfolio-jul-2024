import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import { Helmet } from 'react-helmet-async';
import fotoCapa from "img/sobre_mim_capa.png";
import fotoSobreMim from "img/sobre_mim_foto.jpg";

const roadmap = [
  {
    ano: "2022",
    eventos: [
      "Início do curso de Bacharelado em Engenharia de Software — Unopar",
      "Aprendiz de gestão industrial/manutenção na Apwinner: suporte ao setor de manutenção e desenvolvimento do primeiro sistema interno (ordens de serviço)"
    ]
  },
  {
    ano: "2023",
    eventos: [
      "1 ano de estudos intensivos na Alura: desenvolvimento web full-stack, APIs REST, segurança em APIs, Git e muito mais"
    ]
  },
  {
    ano: "2024",
    eventos: [
      "Aprendiz de TI na Pontamed Farmacêutica: desenvolvimento de sistemas web, APIs, modelagem de banco de dados, suporte técnico e infraestrutura de TI"
    ]
  },
  {
    ano: "2025",
    eventos: [
      "Formado — Bacharel em Engenharia de Software",
      "Início da Pós-graduação em Ciência e Análise de Dados — Unopar"
    ]
  },
  {
    ano: "2026",
    eventos: [
      "Assistente de TI na TRC Distribuição: desenvolvimento de sistemas, APIs, banco de dados, suporte a ERP SAP (posição atual)",
      "Conclusão da Pós-graduação em Ciência e Análise de Dados — Unopar",
      "Início da Pós-graduação em Segurança e Proteção de Dados na Nuvem"
    ]
  }
];

export default function SobreMim() {
  return (
    <>
    <Helmet>
      <title>Sobre Mim — Gustavo Gomes</title>
      <meta name="description" content="Conheça a trajetória de Gustavo Gomes: desenvolvedor Fullstack formado em Engenharia de Software, com experiência em TypeScript, Node.js, Java e SQL." />
      <link rel="canonical" href="https://portfolio-gustavo-sepia.vercel.app/sobremim" />
    </Helmet>
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
      Oi, tudo bem? Sou desenvolvedor e formado em Engenharia de Software, estou dentro desse mundo há 4 anos. Desde que comecei, me apaixonei pela tecnologia e pela capacidade de desenvolver soluções e otimizar processos.
    </p>

    <p className={styles.paragrafo}>
      Ao longo desses anos, trabalhei com <strong>TypeScript</strong>, <strong>Node.js</strong>, <strong>JavaScript</strong>, <strong>Java</strong>, <strong>SQL</strong>, <strong>MySQL</strong>, <strong>SQL Server</strong>, além de tecnologias de infra como <strong>nginx</strong>, <strong>pm2</strong> e <strong>Apache</strong>. Também utilizo ferramentas de IA como <strong>Claude</strong> e <strong>GPT</strong> no dia a dia para aumentar a produtividade. Alguns dos meus projetos estão disponíveis no meu <a href="https://github.com/GustavoPucienik" target="_blank" rel="noreferrer">GitHub</a>.
    </p>

    <p className={styles.paragrafo}>
      Dediquei 1 ano de estudos intensivos na <a href="https://cursos.alura.com.br/user/gomespucienik" target="_blank" rel="noopener noreferrer">Alura</a>, focado em desenvolvimento full-stack, APIs REST e segurança. Esse período foi fundamental para consolidar minha base técnica.
    </p>

    <p className={styles.paragrafo}>
      Atualmente atuo como <strong>Assistente de TI na TRC Distribuição</strong>, onde desenvolvo sistemas, APIs, trabalho com banco de dados e dou suporte ao ERP SAP. Concluí a Pós-graduação em Ciência e Análise de Dados e estou cursando Pós-graduação em Segurança e Proteção de Dados na Nuvem, expandindo meu conhecimento para as áreas de dados e segurança.
    </p>

    <p className={styles.paragrafo}>
      Sou movido por aprendizado contínuo e gosto de estar sempre por dentro das tendências da área. Acredito que curiosidade e prática constante são essenciais para crescer como desenvolvedor.
    </p>

    <p className={styles.paragrafo}>
      Fora da programação, gosto de jogar videogame, assistir séries e ler — momentos que me ajudam a recarregar as energias.
    </p>

    <h3 className={styles.roadmapTitulo}>Minha trajetória</h3>

    <div className={styles.roadmap}>
      {roadmap.map((item) => (
        <div key={item.ano} className={styles.roadmapItem}>
          <div className={styles.roadmapAno}>{item.ano}</div>
          <div className={styles.roadmapLinha}>
            <div className={styles.roadmapPonto} />
            <div className={styles.roadmapConteudo}>
              {item.eventos.map((ev, i) => (
                <p key={i} className={styles.roadmapEvento}>{ev}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>

    </PostModelo>
    </>
  );
}
