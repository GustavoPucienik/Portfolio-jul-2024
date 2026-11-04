import { useState } from "react";
import { projetos } from "@/data";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { Section, cx } from "@/components/ui";

const filtros = [
  { id: "todos", label: "Todos", teste: () => true },
  { id: "corporativos", label: "Corporativos", teste: (p: (typeof projetos)[number]) => p.private },
  { id: "abertos", label: "Código aberto / Web", teste: (p: (typeof projetos)[number]) => !p.private },
] as const;

export default function Projetos() {
  const [filtro, setFiltro] = useState<(typeof filtros)[number]["id"]>("todos");
  const lista = projetos.filter(filtros.find((f) => f.id === filtro)!.teste);

  return (
    <>
      <Seo
        title="Projetos — Gustavo Gomes"
        description="Projetos desenvolvidos por Gustavo Gomes: sistemas corporativos, APIs REST e aplicações fullstack."
        path="/projetos"
      />
      <Section eyebrow="// projetos" title="Projetos">
        <p className="-mt-6 mb-8 max-w-2xl text-muted">
          Sistemas corporativos em produção, APIs e projetos pessoais. Clique em um card para ver os detalhes.
        </p>
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar projetos">
          {filtros.map((f) => (
            <button
              key={f.id}
              onClick={() => setFiltro(f.id)}
              aria-pressed={filtro === f.id}
              className={cx(
                "min-h-10 rounded-full border px-4 text-sm font-medium transition-colors",
                filtro === f.id ? "border-accent bg-accent text-white" : "border-border text-muted hover:text-fg",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 80}>
              <ProjectCard projeto={p} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
