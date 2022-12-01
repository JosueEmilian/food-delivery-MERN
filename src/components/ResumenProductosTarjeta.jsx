import { useDispatch } from "react-redux";
import { incrementoProducto,decrementarProducto } from "../stores/carrito/carSlice";


export const ResumenProductosTarjeta = ({producto}) => {
    const dispatch = useDispatch();

    return (
        <div className="flex p-1 sm:p-2 border-b border-b-gray-200">
            <div className="producto-img mr-2 border-grey-200 rounded-lg w-full sm:w-1/3">
                <img src={producto.imageUrl} alt={producto.nombre} />
            </div>
            <div className="producto-info">
                <h3>{producto.nombre}</h3>
                <p className="text-gray-600">{producto.descripcion}</p>
            </div>
            <div className="producto-precio-qt flex flex-col items-center justify-center">
                <div className="precio">{`Q.${producto.precio}`}</div>
                <div className="cantidad flex">
                    <button className="p-1" disabled={producto.amount <= 0} onClick={() => dispatch(decrementarProducto(producto))}>-</button>
                    <span className="p-1">{producto.amount}</span>
                    <button className="p-1" onClick={() => dispatch(incrementoProducto(producto))}>+</button>
                </div>
            </div>
        </div>
    )
}