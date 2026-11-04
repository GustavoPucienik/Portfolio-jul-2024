import { useEffect, useState } from "react";
import { FiArrowUpRight, FiLock, FiX } from "react-icons/fi";
import { capaProjeto, type Projeto } from "@/data";
import { Badge, ButtonLink, cx } from "./ui";

export default function ProjectCard({ projeto, destaque = false }: { projeto: Projeto; destaque?: boolean }) {
  const [aberto, setAberto] = useState(false);

  return (
    <>
      <button
        onClick={() => setAberto(true)}
        className={cx(
          "group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-surface text-left transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10",
          destaque && "md:flex-row",
        )}
      >
        <div
          className={cx(
            "relative shrink-0 overflow-hidden bg-surface-2",
            destaque ? "aspect-video md:aspect-auto md:w-1/2" : "aspect-video",
          )}
        >
          <img
            src={capaProjeto(projeto)}
            alt=""
            loading="lazy"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {projeto.private && (
            <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-md bg-black/70 px-2 py-1 text-xs font-medium text-white backdrop-blur">
              <FiLock aria-hidden /> Privado
            </span>
          )}
        </div>
        <div className={cx("flex flex-1 flex-col gap-3 p-5", destaque && "md:justify-center md:p-8")}>
          <h3 className={cx("font-semibold leading-snug", destaque ? "text-xl sm:text-2xl" : "text-lg")}>
            {projeto.titulo}
          </h3>
          <p className={cx("text-sm text-muted", destaque ? "line-clamp-4" : "line-clamp-3")}>{projeto.descricao}</p>
          <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
            {projeto.tags.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </div>
      </button>

      {aberto && <ProjectModal projeto={projeto} onClose={() => setAberto(false)} />}
    </>
  );
}

function ProjectModal({ projeto, onClose }: { projeto: Projeto; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`proj-${projeto.id}`}
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-border bg-surface sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video bg-surface-2">
          <img src={capaProjeto(projeto)} alt="" className="size-full object-cover" />
          <button
            onClick={onClose}
            autoFocus
            aria-label="Fechar"
            className="absolute right-3 top-3 grid size-10 place-items-center rounded-lg bg-black/60 text-white backdrop-blur hover:bg-black/80"
          >
            <FiX />
          </button>
        </div>
        <div className="flex flex-col gap-4 p-6 sm:p-8">
          <h3 id={`proj-${projeto.id}`} className="text-2xl font-bold">
            {projeto.titulo}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {projeto.tags.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
          <p className="leading-relaxed text-muted">{projeto.descricao}</p>
          {projeto.private || !projeto.url ? (
            <p className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-muted">
              <FiLock aria-hidden className="shrink-0" /> Projeto corporativo privado — código e acesso restritos à empresa.
            </p>
          ) : (
            <ButtonLink href={projeto.url} className="self-start">
              Ver projeto <FiArrowUpRight />
            </ButtonLink>
          )}
        </div>
      </div>
    </div>
  );
}
