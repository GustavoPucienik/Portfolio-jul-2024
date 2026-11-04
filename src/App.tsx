import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";

const Projetos = lazy(() => import("@/pages/Projetos"));
const Posts = lazy(() => import("@/pages/Posts"));
const Post = lazy(() => import("@/pages/Post"));
const Sobre = lazy(() => import("@/pages/Sobre"));
const Contatos = lazy(() => import("@/pages/Contatos"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#conteudo"
        className="sr-only z-50 rounded-lg bg-accent px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo" className="flex-1">
        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projetos" element={<Projetos />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<Post />} />
          <Route path="sobremim" element={<Sobre />} />
          <Route path="sobre" element={<Navigate to="/sobremim" replace />} />
          <Route path="contatos" element={<Contatos />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
