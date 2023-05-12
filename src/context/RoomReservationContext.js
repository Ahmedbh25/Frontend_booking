import React, {createContext, useContext, useReducer } from 'react';
import { reservationReducer } from './reducers';
const ReservationContext = createContext();

export const RES_ACTIONS = {
    INIT_DESTINATION : "initialize destination",
    INIT_ARRIVAL_DATE : "initialize arrival date",
    INIT_DEPARTURE_DATE : "initialize departure date",
    START_SEARCH : "start searching",
    SUCCESS_SEARCH : "success_search",
    FAIL_SEARCH : "fail_search"
}

const initState = {
    inputs : {
        destination : "",
        arrival_date : "",
        departure_date : "",
    },
    search_result : {
        data : null,
        loading : false,
        error : false,
    },
}

function ReservationContextProvider({children}) {
    const [resState, reservationDispatch] = useReducer(reservationReducer, initState);
    return (
        <ReservationContext.Provider value={{resState, reservationDispatch}}>
            {children}
        </ReservationContext.Provider>
    )
}

export default ReservationContextProvider

export const ReservationState = () =>{
    return useContext(ReservationContext);
}