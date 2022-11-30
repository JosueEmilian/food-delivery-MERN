import React, {useState, useEffect} from "react";
import { MuestraCarritoProductos } from "./MuestraCarritoProductos";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch } from "react-redux";
import { agregaCarrito } from "../stores/carrito/carSlice";


export const MuestraProductos = () => {
    const [productos, setProductos] = useState([]);
    const dispatch = useDispatch();

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    useEffect(() => {
        fetch('http://localhost:8080/api/productos')
            .then(response => response.json())
            .then(data => setProductos(data?.data))
            .catch(e => console.log(e))
    }, [])

    const onAddProduct = (producto) => {
      dispatch(agregaCarrito(producto))
    }
    return (
        <div className="container mx-auto pb-4 w-2/3 text-white bg-black">
            <Carousel responsive={responsive}>
                {
                    productos.length > 0 && productos.map((producto, index) => {
                        return (
                            <div className="w-full p-3">
                                <MuestraCarritoProductos key={index} producto={producto} onAddProduct={onAddProduct} className="w-full p-3"/>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}