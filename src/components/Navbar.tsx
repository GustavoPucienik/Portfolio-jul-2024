import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { Container, cx } from "./ui";

const links = [
  { to: "/", label: "Início" },
  { to: "/projetos", label: "Projetos" },
  { to: "/posts", label: "Posts" },
  { to: "/sobremim", label: "Sobre mim" },
  { to: "/contatos", label: "Contato" },
];

function useTema() {
  const [claro, setClaro] = useState(() => document.documentElement.classList.contains("light"));
  useEffect(() => {
    document.documentElement.classList.toggle("light", claro);
    localStorage.setItem("tema", claro ? "claro" : "escuro");
  }, [claro]);
  return [claro, () => setClaro((c) => !c)] as const;
}

export default function Navbar() {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);
  const [claro, alternarTema] = useTema();
  const { pathname } = useLocation();

  useEffect(() => {
    setAberto(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!aberto) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAberto(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [aberto]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cx(
      "rounded-md px-3 py-2 text-sm font-medium transition-colors",
      isActive ? "bg-surface-2 text-fg" : "text-muted hover:text-fg",
    );

  const botaoTema = (
    <button
      onClick={alternarTema}
      aria-label={claro ? "Ativar tema escuro" : "Ativar tema claro"}
      className="grid size-10 place-items-center rounded-lg border border-border text-muted transition-colors hover:border-accent hover:text-fg"
    >
      {claro ? <FiMoon /> : <FiSun />}
    </button>
  );

  return (
    <>
    <header
      className={cx(
        "sticky top-0 z-40 border-b transition-colors duration-300",
        rolou ? "border-border bg-bg/75 backdrop-blur-lg" : "border-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="font-mono text-sm font-medium">
          <span className="text-accent">&lt;</span>gustavo<span className="text-accent"> /&gt;</span>
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <div className="ml-3">{botaoTema}</div>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          {botaoTema}
          <button
            onClick={() => setAberto(true)}
            aria-label="Abrir menu"
            aria-expanded={aberto}
            aria-controls="menu-mobile"
            className="grid size-10 place-items-center rounded-lg border border-border"
          >
            <FiMenu />
          </button>
        </div>
      </Container>
    </header>

      {/* Gaveta mobile — fica FORA do <header>: o backdrop-filter do header vira
          containing block de elementos fixed e quebraria o posicionamento. */}
      <div
        className={cx(
          "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity md:hidden",
          aberto ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setAberto(false)}
        aria-hidden
      />
      <nav
        id="menu-mobile"
        aria-label="Menu mobile"
        inert={!aberto}
        className={cx(
          "fixed inset-y-0 right-0 z-50 flex w-72 max-w-[85vw] flex-col gap-1 border-l border-border bg-surface p-5 transition-transform duration-300 md:hidden",
          aberto ? "translate-x-0" : "translate-x-full",
        )}
      >
        <button
          onClick={() => setAberto(false)}
          aria-label="Fechar menu"
          className="mb-4 grid size-10 place-items-center self-end rounded-lg border border-border"
        >
          <FiX />
        </button>
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === "/"}
            onClick={() => setAberto(false)}
            className={({ isActive }) => cx(linkClass({ isActive }), "py-3 text-base")}
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </>
  );
}
