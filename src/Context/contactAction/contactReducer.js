

const contactReducer = (state , action)=>{
    const {type , payload} = action;

    switch (type){
        case contactAction.edit:{
            return state.map(contact => (contact.id === payload.id ? payload : contact));

        }

        case contactAction.delete:{
            return state.filter(item => item.id !== payload.id);

        }
        case contactAction.add:{
            return [...state , {id:Math.floor(Math.random()*1000 , ...payload)}];

        }
        case contactAction.search:{
            return state.filter
        }
        default:
            return state;
    }
}






export const contactAction ={
    add:"Add",
    edit:"Edit",
    delete:"Delete",
    search:"Search"
};


export default contactReducer;