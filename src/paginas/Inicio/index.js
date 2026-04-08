import styles from "./Inicio.module.css";
import Card from "componentes/Card";
import posts from 'json/posts.json';
import projetos from 'json/projetos.json';
import { useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

export default function SectionCards() {
  const param = useLocation().pathname === '/projetos' ? 'projetos' : 'posts';
  const lista = param === "projetos" ? projetos : posts;
  const isProjetos = param === 'projetos';
  return (
    <main>
      <Helmet>
        <title>{isProjetos ? 'Projetos' : 'Posts'} — Gustavo Gomes</title>
        <meta name="description" content={isProjetos
          ? 'Projetos desenvolvidos por Gustavo Gomes: sistemas web, APIs REST e aplicações fullstack.'
          : 'Posts técnicos de Gustavo Gomes sobre TypeScript, Node.js, Java, SQL e desenvolvimento web.'
        } />
        <link rel="canonical" href={`https://portfolio-gustavo-sepia.vercel.app/${isProjetos ? 'projetos' : ''}`} />
      </Helmet>
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