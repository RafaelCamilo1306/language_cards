import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login"
function App() {
  return (
    <BrowserRouter> {/* Lib para navegar no JS sem recarregar a página e controlar a url */}
      <Routes>
        
       <Route path="/Login"element={<Login/>}></Route>  {/*Cria a rota padrão para o login */}
       <Route path="/Dashboard" element={<Dashboard/>}></Route>{/*controla a URL e direciona ao Dashboard*/}

      
      </Routes>

    </BrowserRouter>
  );
}

export default App  ;
