import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import BotaoPrincipal from 'componentes/BotaoPrincipal';

export default function Card( {some, type} ) {
  const tipo = type === 'posts' ? '.png': '.jpeg';
  const linkDestino = type === "posts" ? `/posts/${some.id}` : some.url;

  return(
    <Link to={linkDestino}>
      <div className={styles.card}>
        <img 
          className={styles.capa}
          src={`assets/${type}/${some.id}/capa${tipo}`}
          alt={`card de ${type}: ${some.id}`} 
        />

        <h2 className={styles.titulo}>{some.titulo}</h2>

        <BotaoPrincipal >
          Ler
        </BotaoPrincipal>
      </div>
    </Link>
  );
};
