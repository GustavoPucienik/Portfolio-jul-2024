import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { EMAIL, redes } from "@/data/perfil";
import { Container } from "./ui";

const sociais = [
  { href: redes.github, label: "GitHub", icon: FaGithub },
  { href: redes.linkedin, label: "LinkedIn", icon: FaLinkedin },
  { href: redes.instagram, label: "Instagram", icon: FaInstagram },
  { href: redes.whatsapp, label: "WhatsApp", icon: FaWhatsapp },
];

export function Sociais({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-2 ${className}`}>
      {sociais.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="grid size-11 place-items-center rounded-lg border border-border text-muted transition-colors hover:border-accent hover:text-fg"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Gustavo Gomes Pucienik ·{" "}
          <a href={`mailto:${EMAIL}`} className="hover:text-fg">
            {EMAIL}
          </a>
        </p>
        <Sociais />
      </Container>
    </footer>
  );
}
