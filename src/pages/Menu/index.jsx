import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductos, selecProductos } from "../../stores/menu/productosSlice";
import DetalleProducto from "../../components/DetalleProducto";
import { Tabs } from "../../components/Tabs";
import { agregaCarrito } from "../../stores/carrito/carSlice";

const Menu = () => {
    const dispatch = useDispatch();
    const productos = useSelector(selecProductos);
    const [activeTab, setActiveTab] = useState('');
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    

    useEffect(() => {
        dispatch(fetchProductos())
    }, [])

    const onAddProduct = (producto) => {
        dispatch(agregaCarrito(producto))
    }

    const onTabSwitch = (newActiveTab) => {
        setActiveTab(newActiveTab);
        let categorias = productos.productos.map((producto) => producto.nombre.nombre);
        let index = categorias.findIndex(categoria => newActiveTab === categoria);
        console.log(index);
        if(index > -1 ){
            setActiveTabIndex(index);
        }else {
            setActiveTabIndex(0); 
        }
    }
    
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
                            onTabSwitch={onTabSwitch}
                            />
                    }
                    
                    <div className="flex flex-row mx-3">
                        {
                            productos.productos && productos.productos[activeTabIndex].productos.map((producto, index ) => {
                                return (
                                    <DetalleProducto key={index} producto={producto} onAddProduct={onAddProduct}/>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default Menu;