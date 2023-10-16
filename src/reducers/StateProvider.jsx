import { useContext, createContext, useReducer } from "react";

// Creating the data layer

export const StateContext = createContext()

// Pulling the data;

export const StateProvider = ({initalState, reducer, children}) => (
    <StateContext.Provider value={useReducer(reducer, initalState)}>
        {children}
    </StateContext.Provider>
)

// Passing the data;

export const useStateValue = () => useContext(StateContext)