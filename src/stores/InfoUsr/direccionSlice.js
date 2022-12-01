import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    direccion: {}
}

export const direccionSlice = createSlice({
    name: 'direccion',
    initialState,
    reducers: {
        setDireccion: (state, action) => {
            return {direccion: action.payload}
        },
        clearDireccion: (state) => {
            return {direccion: {}}
        }
    }
})

export const getDireccion = state => state.direccion.direccion

export const {setDireccion, clearDireccion} = direccionSlice.actions

export default direccionSlice.reducer