import { configureStore } from '@reduxjs/toolkit'
import contactReducer from './Reducers/contactSlice/contact.slice';
import logger from 'redux-logger';
import { applyMiddleware} from 'redux'; 



export const store = configureStore({
    reducer: {
        action : contactReducer,
    },
    middleware : [ logger , applyMiddleware],
    
})