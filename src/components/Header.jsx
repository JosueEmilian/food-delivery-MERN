import foody from "../assets/images/logo-restaurant.png";
import iconCarrito from "../assets/icons/new-cart.svg";
import { Link } from "react-router-dom";

export const Header = ({cartCount}) => {
    return(
        <nav id="header" className="bg-stone-900 text-white">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="logo-wrapper pl-4 flex items-center">
                    <Link to="/" className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                        <img src={foody} alt="logo" className="w-40 h-40 object-cover"/>
                    </Link>
                </div>
                <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
                    <Link to="/" className="text-xl">Inicio</Link>
                    <Link to="#acercadDe" className="text-xl">Acerca de</Link>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <Link to="/carrito" className="mr-4 relative">
                        <img src={iconCarrito} alt="icon" />
                        {cartCount > 0 ? <div className="rounded-full bg-entorno text-white inline-flex justify-center items-center w-full absolute -top-1 -right-1 ">{cartCount}</div> : null}
                    </Link>
                    <Link to="/login">Inicio Sesion</Link>
                    <Link to="/registrarse">Registrarse</Link>
                </div>
            </div>
        </nav>
    )
}