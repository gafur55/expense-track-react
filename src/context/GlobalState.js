import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer';

// initial state
const initialState = {
    transactions: [
        {id: 1, Text: 'Flower', amount:-20}, 
        {id: 2, Text: 'Salary', amount:300}, 
        {id: 3, Text: 'Book', amount:-10}, 
        {id: 4, Text: 'Camera', amount:190}, 
    ]
}

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(<GlobalContext.Provider value={{
        transactions:state.transactions
    }}>
        {children}
    </GlobalContext.Provider>)
}