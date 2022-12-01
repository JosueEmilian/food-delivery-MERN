import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import Inicio from '../pages/Inicio';
import Login from '../pages/Login';
import Registrarse from '../pages/Registrarse';
import Menu from '../pages/Menu';
import Carrito from '../pages/Carrito';
import Pagos from '../pages/Pagos';
import { useSelector } from "react-redux";
import { carritoProductos } from "../stores/carrito/carSlice";
import { Footer } from "../components/Footer";

const Navegacion = () => {
    const productsInCart = useSelector(carritoProductos);

    return(
        <BrowserRouter>
            <Header cartCount={productsInCart ? productsInCart.length : 0}/>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registrarse" element={<Registrarse/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/carrito" element={<Carrito/>}/>
                <Route path="/pagos" element={<Pagos/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Navegacion;