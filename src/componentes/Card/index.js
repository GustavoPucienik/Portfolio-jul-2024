import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import BotaoPrincipal from 'componentes/BotaoPrincipal';

export default function Card( {some, type} ) {
  const [modalAberto, setModalAberto] = useState(false);
  const tipo = type === 'posts' ? '.png': '.jpeg';

  if (type === 'posts') {
    return (
      <Link to={`/posts/${some.id}`}>
        <div className={styles.card}>
          <img
            className={styles.capa}
            src={`assets/${type}/${some.id}/capa${tipo}`}
            alt={`card de ${type}: ${some.id}`}
          />
          <h2 className={styles.titulo}>{some.titulo}</h2>
          <BotaoPrincipal>Ler</BotaoPrincipal>
        </div>
      </Link>
    );
  }

  if (some.private) {
    return (
      <>
        <div className={styles.card} onClick={() => setModalAberto(true)} style={{cursor: 'pointer'}}>
          <img
            className={styles.capa}
            src={`assets/${type}/${some.id}/capa${tipo}`}
            alt={`card de ${type}: ${some.id}`}
          />
          <h2 className={styles.titulo}>{some.titulo}</h2>
          <BotaoPrincipal>Ver</BotaoPrincipal>
        </div>

        {modalAberto && (
          <div className={styles.overlay} onClick={() => setModalAberto(false)}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <button className={styles.fechar} onClick={() => setModalAberto(false)}>✕</button>
              <h3 className={styles.modalTitulo}>{some.titulo}</h3>
              <p className={styles.modalDescricao}>{some.descricao}</p>
              <div className={styles.modalBotaoWrapper}>
                <a href={some.url} target="_blank" rel="noopener noreferrer">
                  <BotaoPrincipal>Ver projeto</BotaoPrincipal>
                </a>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <a href={some.url} target="_blank" rel="noopener noreferrer">
      <div className={styles.card}>
        <img
          className={styles.capa}
          src={`assets/${type}/${some.id}/capa${tipo}`}
          alt={`card de ${type}: ${some.id}`}
        />
        <h2 className={styles.titulo}>{some.titulo}</h2>
        <BotaoPrincipal>Ver</BotaoPrincipal>
      </div>
    </a>
  );
}
