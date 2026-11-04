import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { capaPost, resumoPost, tempoLeitura, type Post } from "@/data";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      to={`/posts/${post.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/60"
    >
      <div className="aspect-video overflow-hidden bg-surface-2">
        <img
          src={capaPost(post)}
          alt=""
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="font-mono text-xs text-muted">{tempoLeitura(post)} min de leitura</span>
        <h3 className="font-semibold leading-snug">{post.titulo}</h3>
        <p className="line-clamp-2 text-sm text-muted">{resumoPost(post)}</p>
        <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium text-accent">
          Ler post <FiArrowRight className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
