import BotaoPrincipal from "componentes/BotaoPrincipal";
import styles from "./Projeto.module.css";

export default function ProjetoCard({projeto}) {
  return(
    <a href={projeto.url} target="_blank" rel="noopener noreferrer">
        <div className={styles.projeto}>
        <img 
          className={styles.capa}
          src={`assets/projetos/${projeto.id}/capa.jpeg`}
          alt={`projeto: ${projeto.id}`} 
        />

        <h2 className={styles.titulo}>{projeto.titulo}</h2>

        <BotaoPrincipal >
          Ler
        </BotaoPrincipal>
        </div>
    </a>
  )
};
