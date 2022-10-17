import {createSlice} from "@reduxjs/toolkit";


const initialState = [{id:1 , name:'Abbas' , phone:"09178272816"}
    , {id:2 , name:'Alireza' , phone:"09121221202"}
    , {id:3 , name:'Reza' , phone:"09108002435"}]

export const contactSlice = createSlice({
    name:"contactAction",
    initialState,
    reducers:{
        deleteContact : ( state, action) =>{
            const contact = state.findIndex(item => item.id === action.payload);
            state.splice(contact , 1);
        },
        addContact : (state , action) =>{
            alert(action.payload)
            state.push(action.payload);
            
        }
    }
})


export const { deleteContact } = contactSlice.actions

export default contactSlice.reducer;