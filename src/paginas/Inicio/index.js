import styles from "./Inicio.module.css";
import Card from "componentes/Card";
import posts from 'json/posts.json';
import projetos from 'json/projetos.json';
import { useLocation } from "react-router-dom";

export default function SectionCards() {
  const param = useLocation().pathname === '/projetos' ? 'projetos' : 'posts';
  const lista = param === "projetos" ? projetos : posts;
  return (
    <main>  
      <ul className={styles.posts}>
        {lista.map((item) => (
          <li key={item.id}>
            <Card some={item} type={param}/>
          </li>
        ))}
      </ul>
    </main>
  );
}