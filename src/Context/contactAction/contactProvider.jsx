import React, { createContext, useReducer } from "react";
import {UsersDate} from "../../components/DataBase/UsersDate";
import contactReducer from "./contactReducer";


export const ContactContext = createContext({
    contactList:[],
    contactDispatch: () => {},
});

const ContactProvider = ({children}) =>{
    const [contactList ,contactDispatch ] = useReducer(
        contactReducer , [UsersDate]
    );
    return(
        <ContactContext.Provider
          value={{
              contactList,
              contactDispatch,
          }}
        >
            {children}
        </ContactContext.Provider>
    )
}


export default ContactProvider;