import { configureStore } from '@reduxjs/toolkit'
import contactReducer from './Reducers/contactSlice/contact.slice'

export const store = configureStore({
    reducer: {
        action : contactReducer,
    },
})