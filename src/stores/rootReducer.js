import { combineReducers } from "redux";
import cartReducer from "./carrito/carSlice";
import productoReducer from "./menu/productosSlice";


const rootReducer = combineReducers(
    {
        carrito: cartReducer,
        productos: productoReducer
    }
);

export default rootReducer;
