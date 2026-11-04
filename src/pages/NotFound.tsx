import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import erro404 from "@/img/erro_404.png";
import Seo from "@/components/Seo";
import { Button, ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  const navegar = useNavigate();
  return (
    <Container className="grid min-h-[70vh] items-center gap-10 py-16 md:grid-cols-2">
      <Seo title="Página não encontrada — Gustavo Gomes" description="Página não encontrada." path="/404" />
      <div className="flex flex-col gap-5">
        <span className="text-gradient font-mono text-7xl font-bold sm:text-8xl">404</span>
        <h1 className="text-3xl font-bold tracking-tight">Ops! Página não encontrada.</h1>
        <p className="text-muted">Tem certeza que era isso que você estava procurando? Talvez o link esteja quebrado.</p>
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => navegar(-1)}>
            <FiArrowLeft /> Voltar
          </Button>
          <ButtonLink to="/" variant="ghost">
            Ir para o início
          </ButtonLink>
        </div>
      </div>
      <img src={erro404} alt="Cachorro de óculos vestido como um humano" className="mx-auto w-full max-w-sm" />
    </Container>
  );
}
