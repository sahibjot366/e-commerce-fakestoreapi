import {createSlice} from '@reduxjs/toolkit'
import type { Product } from './product'
import product from './product';
type CartItem={
    product:Product,
    amount:number;
}
type CartState= {
    cart:CartItem[]
  }


const initialState: CartState = {
    cart:[]
  }

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem:(state,action)=>{
            state.cart=[...state.cart,action.payload]
        },
        removeItem:(state,action)=>{
            state.cart=state.cart.filter(item=>item.product.id!=action.payload)
        },
        incrementAmount:(state,action)=>{
            state.cart=state.cart.map(item=>{
                if(item.product.id==action.payload){
                    const newItem={...item,amount:item.amount+1}
                    return newItem;
                }
                return item;
            })
        },
        decrementAmount:(state,action)=>{
            state.cart=state.cart.map(item=>{
                if(item.product.id==action.payload){
                    const newItem={...item,amount:item.amount-1}
                    return newItem;
                }
                return item;
            })
        },
        clearCart:(state,action)=>{
            state.cart=[]
        }

    }

})

export const {addItem,removeItem,incrementAmount,decrementAmount,clearCart}=cartSlice.actions

export default cartSlice.reducer;
