import React, { createContext, useContext, useReducer } from 'react';
import { FetchReducer } from './reducers';
const FetchDataContext = createContext();

export const FETCH_ACTIONS = {
    START : "start fetching",
    SUCCESS : "success fetch",
    ERROR: "fail fetch"
}

const initState = {
    data : null,
    loading: false,
    error : null
}

function FetchDataContextProvider({children}){
    const [fetchState, fetchDispatch] = useReducer(FetchReducer, initState);
  return (
    <FetchDataContext.Provider value={{fetchState, data : fetchState.data, loading : fetchState.loading, error : fetchState.error, fetchDispatch}}>
        {children}
    </FetchDataContext.Provider>
  )
}

export default FetchDataContextProvider

export const FetchDataState = ()=>{
    return useContext(FetchDataContext);
}
