import { BrowserRouter, Routes, Route } from "react-router-dom";
import SectionCards from "paginas/Inicio";
import SobreMim from "paginas/SobreMim";
import Menu from "componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";
import Contatos from "paginas/Contatos";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Menu />

      <Routes>
      <Route path="/" element={<PaginaPadrao />}> 
        <Route index element={<SectionCards/>}/>
        <Route path="/sobremim" element={<SobreMim/>}/> 
        <Route path="/projetos" element={<SectionCards/>}/> 
        <Route path="/contatos" element={<Contatos/>}/> 
      </Route>
      
        <Route path="/posts/:id" element={<Post/>}/> 
        <Route path="*" element={<NaoEncontrada />}/>
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
