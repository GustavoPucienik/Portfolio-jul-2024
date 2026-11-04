import ContactSection from "@/components/ContactSection";
import Seo from "@/components/Seo";

export default function Contatos() {
  return (
    <>
      <Seo
        title="Contato — Gustavo Gomes"
        description="Entre em contato com Gustavo Gomes, desenvolvedor Fullstack. Disponível para projetos, oportunidades e colaborações."
        path="/contatos"
      />
      <ContactSection titulo="Entre em contato" />
    </>
  );
}
