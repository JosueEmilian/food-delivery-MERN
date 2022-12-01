import { useSelector } from "react-redux"
import { carritoProductos } from "../stores/carrito/carSlice";
import { ResumenProductosTarjeta } from "./ResumenProductosTarjeta";

export const ResumenProductos = () => {
    const carrito = useSelector(carritoProductos);

    return (
        <div className="flex flex-col">
            {carrito && carrito?.map((producto, index) => {
                return (
                    <ResumenProductosTarjeta producto={producto} key={index}/>
                )
            })}
        </div>
    )
}