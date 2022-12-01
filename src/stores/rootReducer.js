import { combineReducers } from "redux";
import cartReducer from "./carrito/carSlice";
import productoReducer from "./menu/productosSlice";
import direccionReducer from "./InfoUsr/direccionSlice";

const rootReducer = combineReducers(
    {
        carrito: cartReducer,
        productos: productoReducer,
        direccion: direccionReducer
    }
);

export default rootReducer;
