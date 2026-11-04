import { FiArrowRight } from "react-icons/fi";
import minhaFoto from "@/img/minha_foto.jpg";
import { posts, projetos } from "@/data";
import { numeros, stack } from "@/data/perfil";
import ContactSection from "@/components/ContactSection";
import { Sociais } from "@/components/Footer";
import PostCard from "@/components/PostCard";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import Trajetoria from "@/components/Trajetoria";
import { Badge, ButtonLink, Container, Section } from "@/components/ui";

const [principal, ...outros] = projetos;

export default function Home() {
  return (
    <>
      <Seo
        title="Gustavo Gomes — Desenvolvedor Fullstack"
        description="Portfólio de Gustavo Gomes, desenvolvedor Fullstack com experiência em TypeScript, Node.js, React, Java, SQL e integração com SAP Business One."
        path="/"
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
        <div
          className="pointer-events-none absolute -top-40 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]"
          aria-hidden
        />
        <Container className="relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 self-start rounded-full border border-border bg-surface/70 px-3 py-1 text-xs text-muted">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              Assistente de TI na TRC Distribuição
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Olá, eu sou o Gustavo.
              <br />
              <span className="text-gradient">Desenvolvedor Fullstack.</span>
            </h1>
            <p className="max-w-xl text-lg text-muted">
              Engenheiro de Software que constrói sistemas corporativos de ponta a ponta — de APIs em Node.js e TypeScript a
              interfaces em React, com integração ao ERP SAP Business One.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink to="/projetos">
                Ver projetos <FiArrowRight />
              </ButtonLink>
              <ButtonLink to="/contatos" variant="ghost">
                Entrar em contato
              </ButtonLink>
            </div>
            <Sociais />
          </Reveal>

          <Reveal delay={150} className="mx-auto w-full max-w-xs lg:max-w-sm">
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-accent to-accent-2 opacity-60 blur-lg" aria-hidden />
              <img
                src={minhaFoto}
                alt="Foto de Gustavo Gomes"
                className="relative aspect-square w-full rounded-3xl border border-border object-cover"
              />
            </div>
          </Reveal>
        </Container>

        {/* Números */}
        <Container className="relative pb-8">
          <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {numeros.map((n, i) => (
              <Reveal key={n.rotulo} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border bg-surface/70 p-5 backdrop-blur">
                  <dt className="sr-only">{n.rotulo}</dt>
                  <dd className="text-gradient font-mono text-3xl font-bold">{n.valor}</dd>
                  <dd className="mt-1 text-sm text-muted">{n.rotulo}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      {/* Projetos */}
      <Section
        id="projetos"
        eyebrow="// projetos"
        title="Projetos em destaque"
        action={
          <ButtonLink to="/projetos" variant="ghost">
            Ver todos <FiArrowRight />
          </ButtonLink>
        }
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Reveal className="md:col-span-2 lg:col-span-3">
            <ProjectCard projeto={principal} destaque />
          </Reveal>
          {outros.slice(0, 3).map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <ProjectCard projeto={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Stack */}
      <Section eyebrow="// stack" title="Tecnologias que uso">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((g, i) => (
            <Reveal key={g.grupo} delay={i * 60}>
              <div className="h-full rounded-2xl border border-border bg-surface p-5">
                <h3 className="mb-3 font-semibold">{g.grupo}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {g.itens.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Trajetória */}
      <Section eyebrow="// trajetória" title="De 2022 até aqui">
        <Trajetoria />
      </Section>

      {/* Posts */}
      <Section
        eyebrow="// posts"
        title="Últimos posts"
        action={
          <ButtonLink to="/posts" variant="ghost">
            Ver todos <FiArrowRight />
          </ButtonLink>
        }
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <PostCard post={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      <ContactSection />
    </>
  );
}
