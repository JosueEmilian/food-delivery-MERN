import { AgregaProductos } from "./AgregaProductos";

export const MuestraCarritoProductos = ({producto, onAddProduct}) => {

    const addProduct = () => {
        onAddProduct(producto)
    }
    return (
        <div className="w-ful p-4 m-2 rounded text-white bg-gradient-to-b from-slate-600 to-transparent text-center">
            <img src={producto.imageUrl} alt={producto.nombre} />
            <h2 className="pb-2 text-lg">{producto.nombre}</h2>
            <p className="mb-2 h-20 line-clamp-4">{producto.descripcion}</p>
            <AgregaProductos onAddProduct={addProduct}/>
        </div>
    )
}