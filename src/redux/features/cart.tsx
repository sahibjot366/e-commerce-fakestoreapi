import {createSlice} from '@reduxjs/toolkit'
import type { Product } from './product'
import product from './product';
export type CartItem={
    product:Product,
    amount:number;
}
export type CartState= {
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
            let itemFound=false;
            const newCart=state.cart.map(item=>{
                if(item.product.id==action.payload.product.id){
                    itemFound=true;
                    return {...item,amount:item.amount+action.payload.amount}
                }
                return item
            })

            if(!itemFound)
                state.cart=[...state.cart,action.payload]
            else 
                state.cart=newCart
        },
        removeItem:(state,action)=>{
            state.cart=state.cart.filter(item=>item.product.id!=action.payload)
        },
        updateAmount:(state,action)=>{
            state.cart=state.cart.map(item=>{
                if(item.product.id===action.payload.id){
                    const newItem={...item,amount:action.payload.updatedAmount}
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

export const {addItem,removeItem,updateAmount,clearCart}=cartSlice.actions

export default cartSlice.reducer;
