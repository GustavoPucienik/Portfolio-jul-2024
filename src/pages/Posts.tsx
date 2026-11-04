import { posts } from "@/data";
import PostCard from "@/components/PostCard";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { Section } from "@/components/ui";

export default function Posts() {
  return (
    <>
      <Seo
        title="Posts — Gustavo Gomes"
        description="Posts técnicos de Gustavo Gomes sobre TypeScript, Node.js, Java, SQL, infraestrutura e IA."
        path="/posts"
      />
      <Section eyebrow="// posts" title="Posts">
        <p className="-mt-6 mb-10 max-w-2xl text-muted">
          Textos curtos sobre as tecnologias que uso no dia a dia e como elas entram no meu trabalho.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 80}>
              <PostCard post={p} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
