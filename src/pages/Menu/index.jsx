import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductos, selecProductos } from "../../stores/menu/productosSlice";
import DetalleProducto from "../../components/DetalleProducto";
import { Tabs } from "../../components/Tabs";

const Menu = () => {
    const dispatch = useDispatch();
    const productos = useSelector(selecProductos);
    const [activeTab, setActiveTab] = useState('');
    

    useEffect(() => {
        dispatch(fetchProductos())
    }, [])
    
    return(
        <div className="bg-white">
            {
                productos.status !== 'fulfilled' ?
                <div>Cargando...</div> :
                <div className="menu-wrapper">
                    {
                        productos.productos && 
                        <Tabs
                            list={productos.productos.map((producto) => producto.nombre.nombre )}
                            activeTab={activeTab}
                            onTabSwitch={setActiveTab}
                            />
                    }
                    {
                        productos.productos && productos.productos[0].productos.map((producto, index ) => {
                            return (
                                <DetalleProducto key={index} producto={producto}/>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Menu;