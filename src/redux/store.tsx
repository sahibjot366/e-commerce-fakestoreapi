import { configureStore } from "@reduxjs/toolkit";
import { userReducer,productReducer,cartReducer } from "./features";

//Types
import type { userState } from "./features/user";
import type { productState } from "./features/product";
import type { CartState } from "./features/cart";

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