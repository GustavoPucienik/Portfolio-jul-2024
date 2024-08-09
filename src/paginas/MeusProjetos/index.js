import Projeto from "componentes/Projeto";
import styles from "./MeusProjetos.module.css";
import projetos from "json/projetos.json"

export default function MeusProjetos() {
  return (
  <main>
    <ul className={styles.projetos}>        
    {projetos.map((projeto) => (
          <li key={projeto.id}>
            <Projeto projeto={projeto}/>
          </li>
        ))}
    </ul>
  </main>
  )
}