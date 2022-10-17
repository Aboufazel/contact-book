import {createSlice} from "@reduxjs/toolkit";

const initialState = [{id:1 , name:'Abbas' , phone:"09178272816"}
    , {id:2 , name:'Alireza' , phone:"09121221202"}
    , {id:3 , name:'Reza' , phone:"09108002435"}]

export const contactSlice = createSlice({
    name:"contactAction",
    initialState,
    reducers:{
      deleteContact : ( state, action) =>{
        const contact = state.indexOf(item => item.id === action.payload);
        state.splice(contact , 1);
      },
        addContact : (state , action) =>{
          state.push(action.payload)
        },
        editContact : (state, action) =>{
            state = state.map(item => item.id === action.payload ? action.payload :item)
        }
    }
})


export const { deleteContact  , addContact} = contactSlice.actions

export default contactSlice.reducer;


