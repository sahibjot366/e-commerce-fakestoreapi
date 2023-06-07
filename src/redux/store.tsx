import { configureStore } from "@reduxjs/toolkit";
import { userReducer,productReducer,cartReducer } from "./features";
import { userState } from "./features/user";
import { productState } from "./features/product";
import { CartState } from "./features/cart";

export type AppState={
    user:userState;
    product:productState;
    cart:CartState;
}

export const store=configureStore({
    reducer:{
        user:userReducer,
        product:productReducer,
        cart:cartReducer
    }
})