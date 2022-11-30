const DetalleProducto = ({producto}) => {
    return (
        <div className="p-4 rounded-lg bg-slate-50">
            <div className="flex items-center justify-between">
                <h2 className="text-5xl">{producto.nombre}</h2>
                <p className="text-3xl text-gray-500">
                    {producto.descripcion}
                </p>
                <div className="flex items-center justify-between">
                    <div className="text-3xl text-black">{producto.precio}</div>
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
                <img src={producto.imageUrl} alt={producto.nombre} className="w-40 h-40 rounded-xl object-cover" />
            </div>
        </div>
    )
}

export default DetalleProducto;