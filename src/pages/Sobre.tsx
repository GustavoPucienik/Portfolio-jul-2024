import fotoSobreMim from "@/img/sobre_mim_foto.jpg";
import { redes, stack } from "@/data/perfil";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import Trajetoria from "@/components/Trajetoria";
import { Badge, ButtonLink, Section } from "@/components/ui";

export default function Sobre() {
  return (
    <>
      <Seo
        title="Sobre mim — Gustavo Gomes"
        description="Conheça a trajetória de Gustavo Gomes: desenvolvedor Fullstack formado em Engenharia de Software, com experiência em TypeScript, Node.js, Java e SQL."
        path="/sobremim"
      />
      <Section eyebrow="// sobre mim" title="Olá, eu sou o Gustavo!">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <Reveal>
            <img
              src={fotoSobreMim}
              alt="Foto de Gustavo Gomes"
              className="w-full max-w-sm rounded-3xl border border-border object-cover lg:sticky lg:top-24"
            />
          </Reveal>

          <Reveal delay={100} className="flex flex-col gap-5 text-lg leading-relaxed text-muted [&_strong]:text-fg [&_a]:text-accent [&_a]:underline-offset-4 hover:[&_a]:underline">
            <p>
              Sou desenvolvedor e formado em Engenharia de Software, e estou nesse mundo há 4 anos. Desde que comecei, me
              apaixonei pela tecnologia e pela capacidade de desenvolver soluções e otimizar processos.
            </p>
            <p>
              Ao longo desses anos trabalhei com <strong>TypeScript</strong>, <strong>Node.js</strong>,{" "}
              <strong>JavaScript</strong>, <strong>Java</strong>, <strong>SQL</strong>, <strong>MySQL</strong> e{" "}
              <strong>SQL Server</strong>, além de infraestrutura com <strong>nginx</strong>, <strong>pm2</strong> e{" "}
              <strong>Apache</strong>. Também uso ferramentas de IA como <strong>Claude</strong> e <strong>GPT</strong> no
              dia a dia para aumentar a produtividade. Alguns projetos estão no meu{" "}
              <a href={redes.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              .
            </p>
            <p>
              Dediquei 1 ano de estudos intensivos na{" "}
              <a href={redes.alura} target="_blank" rel="noopener noreferrer">
                Alura
              </a>
              , focado em desenvolvimento full-stack, APIs REST e segurança — período fundamental para consolidar minha base
              técnica.
            </p>
            <p>
              Hoje atuo como <strong>Assistente de TI na TRC Distribuição</strong>, onde desenvolvo sistemas, APIs, trabalho
              com banco de dados e dou suporte ao ERP SAP. Concluí a Pós-graduação em Ciência e Análise de Dados e estou
              cursando Pós-graduação em Segurança e Proteção de Dados na Nuvem.
            </p>
            <p>
              Sou movido por aprendizado contínuo. Fora da programação, gosto de jogar videogame, assistir séries e ler —
              momentos que me ajudam a recarregar as energias.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-2">
              {stack.flatMap((g) => g.itens).map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <ButtonLink to="/contatos">Entrar em contato</ButtonLink>
              <ButtonLink href={redes.linkedin} variant="ghost">
                LinkedIn
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section eyebrow="// trajetória" title="Minha trajetória" className="pt-0 sm:pt-0">
        <Trajetoria />
      </Section>
    </>
  );
}
