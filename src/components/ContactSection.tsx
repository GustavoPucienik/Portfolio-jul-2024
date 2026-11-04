import { FiMail } from "react-icons/fi";
import { EMAIL } from "@/data/perfil";
import ContactForm from "./ContactForm";
import { Sociais } from "./Footer";
import Reveal from "./Reveal";
import { Section } from "./ui";

export default function ContactSection({ titulo = "Vamos conversar?" }: { titulo?: string }) {
  return (
    <Section id="contato" eyebrow="// contato" title={titulo}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <Reveal className="flex flex-col gap-6">
          <p className="max-w-md text-lg text-muted">
            Tem uma oportunidade, um projeto ou só quer trocar uma ideia sobre tecnologia? Me mande uma mensagem — respondo
            o mais rápido possível.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-3 self-start rounded-lg border border-border bg-surface px-4 py-3 text-sm transition-colors hover:border-accent"
          >
            <FiMail className="text-accent" /> {EMAIL}
          </a>
          <Sociais />
        </Reveal>
        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
