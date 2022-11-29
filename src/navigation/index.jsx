import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import Inicio from '../pages/Inicio';
import Login from '../pages/Login';
import Registrarse from '../pages/Registrarse';
import Menu from '../pages/Menu';
import Carrito from '../pages/Carrito';
import Pagos from '../pages/Pagos';


const Navegacion = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registrarse" element={<Registrarse/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/carrito" element={<Carrito/>}/>
                <Route path="/pagos" element={<Pagos/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Navegacion;