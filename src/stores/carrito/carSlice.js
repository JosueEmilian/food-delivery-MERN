import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productos: []
}

export const carSlice = createSlice({
    name: 'carrito',
    initialState,
    reducers: {
        agregaCarrito: (state, action) => {
            return {productos: [...state.productos, {...action.payload, amount: 1}]}
        },
        eliminarCarrito: (state) => {
            return {productos: []}
        },
        incrementoProducto: (state, action) => {
            console.log('incremento')
            return {productos: state.productos.map(producto => producto.id === action.payload.id ? {...producto, amount: producto.amount + 1} : producto) }
        },
        decrementarProducto: (state, action) => {
            return {productos: state.productos.map(producto => producto.id === action.payload.id ? {...producto, amount: producto.amount - 1} : producto) }
        },
    }
})

export const carritoProductos = state => state.carrito.productos

export const {agregaCarrito, eliminarCarrito, incrementoProducto, decrementarProducto} = carSlice.actions

export default carSlice.reducer