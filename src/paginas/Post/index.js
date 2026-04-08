import "./post.css";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import { Helmet } from 'react-helmet-async';

export default function Post() {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return (
      <NaoEncontrada />
    )
  }

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route index element={
        <>
          <Helmet>
            <title>{post.titulo} — Gustavo Gomes</title>
            <meta name="description" content={post.texto.replace(/[#*\n]/g, ' ').slice(0, 155).trim()} />
            <link rel="canonical" href={`https://portfolio-gustavo-sepia.vercel.app/posts/${post.id}`} />
          </Helmet>
          <PostModelo
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
          >
            <div className="post-markdown-container">
              <ReactMarkdown>
              {post.texto}
              </ReactMarkdown>
            </div>
          </PostModelo>
        </>
      } />
      </Route>
    </Routes>
  );
};
