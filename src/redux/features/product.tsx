import {createSlice} from '@reduxjs/toolkit'


export type Product={
    id:number;
    title:string;
    price:number;
    category:string;
    description:string;
    image:string;
}

type productState={
    products:Product[]
}
const initialState:productState ={
    products:[]
}

const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{

    }
})

export const {}=productSlice.actions


export default productSlice.reducer
