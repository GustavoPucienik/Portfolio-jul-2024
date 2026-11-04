import projetosJson from "@/json/projetos.json";
import postsJson from "@/json/posts.json";

export type Projeto = {
  id: number;
  titulo: string;
  descricao: string;
  capaExt?: string;
  url?: string;
  private: boolean;
  tags: string[];
};

export type Post = {
  id: number;
  titulo: string;
  texto: string;
};

export const projetos = projetosJson as Projeto[];
export const posts = postsJson as Post[];

export const capaProjeto = (p: Projeto) => `/assets/projetos/${p.id}/capa${p.capaExt ?? ".jpeg"}`;
export const capaPost = (p: Post) => `/assets/posts/${p.id}/capa.png`;

/** Primeiro parágrafo de texto do markdown, sem formatação. */
export function resumoPost(p: Post, max = 140) {
  const linha =
    p.texto
      .split("\n")
      .map((l) => l.trim())
      .find((l) => l && !l.startsWith("#") && !l.startsWith("-") && !l.startsWith("!")) ?? "";
  const limpo = linha.replace(/[*_`>[\]]/g, "").replace(/\(.*?\)/g, "");
  return limpo.length > max ? limpo.slice(0, max).trimEnd() + "…" : limpo;
}

export const tempoLeitura = (p: Post) => Math.max(1, Math.round(p.texto.split(/\s+/).length / 200));
