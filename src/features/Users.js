import {createSlice} from '@reduxjs/toolkit';
import { UsersData } from '../Data';

export const UserSlice = createSlice({
    name: "users",
    initialState: {value: UsersData},
    reducers:{
        addUser:(state,action)=>{
            state.value.push(action.payload); 
        },
        deleteUser: (state,action) => {
            state.value= state.value.filter((user)=> user.id !== action.payload.id); 
        },
        updateUsername: (state,action)=>{
            state.value.map((user)=>{
                if(user.id === action.payload.id){
                    user.username = action .payload.username;
                }
            })
        }
    }
})
export const { addUser,deleteUser, updateUsername }= UserSlice.actions;
export default UserSlice.reducer;