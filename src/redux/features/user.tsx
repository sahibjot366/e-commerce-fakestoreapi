import {createSlice} from '@reduxjs/toolkit'


type User={
    name:string;
    address:string;
    email:string;
    phonenumber:string;
    jwttoken:string;
}

type userState={
    userDetails:User;
}


const initialState:userState ={
    userDetails:{
        jwttoken:'',
        name:'',
        address:'',
        email:'',
        phonenumber:''
    },
}


const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        setUserDetails:(state,action)=>{
            state.userDetails=action.payload
        }
    },

})

export const {setUserDetails}=userSlice.actions

export default userSlice.reducer