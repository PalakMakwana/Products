import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Redux/Reducer/cartReducer";


const store = configureStore({
    reducer: {
       cart: cartReducer
    }
})




 export default store;


