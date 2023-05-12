import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { FilterReducer } from './reducers';
const FilterContext = createContext();

export const FILTER_ACTIONS = {
    INIT: "SET_INIT",
    STARS: "SET_STARS",
    PRICE: "SET_PRICE",
    TYPE: "SET_TYPE",
    DELETE: "SET_DELETE_FILTER",
}

export const radiosCheked = {
    radioStars: {
        start1: false,
        start2: false,
        start3: false,
        start4: false,
        start5: false,
    },
    radioPrice: {
        descending: false,
        ascending: false,
    },
    radioType: {
        motels: false,
        boutique: false,
        resorts: false,
        inn: false,
        chain: false,
    }
}

const initState = {
    hotels: [],
    FiltredHotels: [],
    radiosCheked : radiosCheked
}

function FilterContextProvider({ children, hotels, url }) {
    const [state, FilterDispatch] = useReducer(FilterReducer, initState);

    useEffect(() => {
        console.log(hotels);
        FilterDispatch({ type: FILTER_ACTIONS.INIT, payload: hotels });
    }, [url]);
    const OrganisedFilterDispatch = (event, ACTION_TYPE) => {
        FilterDispatch({ type: ACTION_TYPE, payload: { value: event.target.value} });
    }
    return (
        <FilterContext.Provider value={{ state, OrganisedFilterDispatch }}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider;

export const FilterState = () => {
    return useContext(FilterContext);
}