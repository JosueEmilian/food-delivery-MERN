import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    productos: [],
    error: null,
    status: 'idle'
}

export const productosSlice = createSlice({
    name: 'productos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProductos.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.productos = [...action.payload.data]
        });
        builder.addCase(fetchProductos.pending, (state, action) => {
            state.status = 'pending'
        })
    }
})

export const {getProductos} = productosSlice.actions

export default productosSlice.reducer

export const fetchProductos = createAsyncThunk('productos/fetchProductos', async () => {
    const response = await fetch('http://localhost:8080/api/productos-by-categorias')
    const data = await response.json()
    return data
})

export const selecProductos = state => state.productos

