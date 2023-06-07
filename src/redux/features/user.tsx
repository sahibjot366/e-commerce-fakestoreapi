import {createSlice} from '@reduxjs/toolkit'


type User={
    name:string;
    address:string;
    email:string;
    phonenumber:string;
}

type userState={
    userDetails:User;
    jwttoken:string;
}


const initialState:userState ={
    userDetails:{
        name:'',
        address:'',
        email:'',
        phonenumber:''
    },
    jwttoken:''
}


const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{

    },

})

export const {}=userSlice.actions

export default userSlice.reducer