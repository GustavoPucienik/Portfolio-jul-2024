import ContactSection from "componentes/Contact/ContactSection";
import { Helmet } from 'react-helmet-async';

export default function Contatos() {
  return <>
    <Helmet>
      <title>Contatos — Gustavo Gomes</title>
      <meta name="description" content="Entre em contato com Gustavo Gomes, desenvolvedor Fullstack. Disponível para projetos, oportunidades e colaborações." />
      <link rel="canonical" href="https://portfolio-gustavo-sepia.vercel.app/contatos" />
    </Helmet>
    <ContactSection />
  </>
}