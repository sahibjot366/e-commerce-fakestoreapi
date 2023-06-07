import {createSlice} from '@reduxjs/toolkit'
import type { Product } from './product'
type CartItem={
    product:Product,
    amount:number;
}
type CartState= {
    cart:CartItem[]
  }
  
  // Define the initial state using that type
  const initialState: CartState = {
    cart:[]
  }

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{

    }

})

export const {}=cartSlice.actions

export default cartSlice.reducer;
