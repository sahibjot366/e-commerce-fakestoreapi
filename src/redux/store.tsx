import { configureStore } from "@reduxjs/toolkit";
import { userReducer,productReducer,cartReducer } from "./features";

export const store=configureStore({
    reducer:{
        user:userReducer,
        product:productReducer,
        cart:cartReducer
    }
})