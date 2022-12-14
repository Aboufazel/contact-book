import {createSlice} from "@reduxjs/toolkit";

const initialState = [{id:1 , name:'Abbas' , phone:"09178272816"}
    , {id:2 , name:'Alireza' , phone:"09121221202"}
    , {id:3 , name:'Reza' , phone:"09108002435"}]

export const contactSlice = createSlice({
    name:"contactAction",
    initialState,
    reducers:{
      deleteContact : ( state, action) =>{
          const {payload} = action
        const contact = state.findIndex(item=>item.id===payload)
          state.splice(contact,1)
          alert("contact delete complete")
      },
        addContact : (state , action) =>{
          state.push( action.payload);
           alert("New contact Add")
        },
        editContact : (state, action) =>{
          const index=state.findIndex(item=>item.id===action.payload.id)
          state[index]=action.payload;
            alert("Contact Edit")
        }
    }
})


export const { deleteContact  , addContact , editContact} = contactSlice.actions

export default contactSlice.reducer;


