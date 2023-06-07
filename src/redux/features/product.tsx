import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'


export type Product={
    id:number;
    title:string;
    price:number;
    category:string;
    description:string;
    image:string;
}

export type productState={
    products:Product[];
    isLoading:boolean;
    isError:boolean;
}
const initialState:productState ={
    products:[],
    isLoading:false,
    isError:false
}

//Actions
export const fetchProducts=createAsyncThunk('fetchProducts',async ()=>{
    const response=await fetch('https://fakestoreapi.com/products');
    return response.json();
})

const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.products=action.payload
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.isError=true;
            state.isLoading=false;
        })
    }
})

export const {}=productSlice.actions


export default productSlice.reducer
