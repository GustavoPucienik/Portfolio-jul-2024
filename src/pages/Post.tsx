import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { capaPost, posts, resumoPost, tempoLeitura } from "@/data";
import Seo from "@/components/Seo";
import { Container } from "@/components/ui";
import NotFound from "./NotFound";

export default function Post() {
  const { id } = useParams();
  const idx = posts.findIndex((p) => p.id === Number(id));
  if (idx === -1) return <NotFound />;

  const post = posts[idx];
  const proximo = posts[(idx + 1) % posts.length];

  return (
    <>
      <Seo title={`${post.titulo} — Gustavo Gomes`} description={resumoPost(post, 155)} path={`/posts/${post.id}`} />
      <article className="py-12 sm:py-16">
        <Container className="max-w-3xl">
          <Link to="/posts" className="mb-8 inline-flex items-center gap-2 text-sm text-muted hover:text-fg">
            <FiArrowLeft /> Todos os posts
          </Link>
          <p className="mb-3 font-mono text-sm text-accent">{tempoLeitura(post)} min de leitura</p>
          <h1 className="mb-8 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">{post.titulo}</h1>
          <img
            src={capaPost(post)}
            alt=""
            className="mb-10 aspect-video w-full rounded-2xl border border-border object-cover"
          />
          <div className="prose prose-lg max-w-none prose-headings:tracking-tight prose-a:text-accent prose-img:rounded-xl prose-code:before:content-none prose-code:after:content-none [--tw-prose-body:var(--c-text)] [--tw-prose-bold:var(--c-text)] [--tw-prose-bullets:var(--c-accent)] [--tw-prose-code:var(--c-text)] [--tw-prose-headings:var(--c-text)] [--tw-prose-hr:var(--c-border)] [--tw-prose-pre-bg:var(--c-surface-2)] [--tw-prose-pre-code:var(--c-text)] [--tw-prose-quote-borders:var(--c-accent)] [--tw-prose-quotes:var(--c-muted)]">
            <ReactMarkdown>{post.texto}</ReactMarkdown>
          </div>

          <Link
            to={`/posts/${proximo.id}`}
            className="group mt-16 flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent"
          >
            <div>
              <p className="text-sm text-muted">Próximo post</p>
              <p className="font-semibold">{proximo.titulo}</p>
            </div>
            <FiArrowRight className="shrink-0 text-accent transition-transform group-hover:translate-x-1" />
          </Link>
        </Container>
      </article>
    </>
  );
}
