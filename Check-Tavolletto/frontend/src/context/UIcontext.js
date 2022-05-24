import react, { createContext, useReducer } from 'react'

import UIReducer from './UIReducer'

export const UIContext = createContext()
const initialState = {
    profiletoggle:false
}

const UIContextProvider = ({ children })=>{
    const [state,dispatch] = useReducer(UIReducer,initialState)
    const changeState = (value) => dispatch({type:'CHANGE_STATE',payload:value})
    const contextvalues = {
        ...state,
        changeState,
    }
    return <UIContext.Provider value={ contextvalues } >
        {
            children
        }
    </UIContext.Provider>
}

export default UIContextProvider;