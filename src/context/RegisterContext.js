import React, { createContext, useContext, useReducer, useEffect} from 'react'
import { RegisterReducer } from './reducers';

const initState = {
    USER_DATA: {
        username: "",
        full_name: "",
        email: "",
        age: "",
        city: "",
        state: "",
        country: "",
        phone: "",
        password: "",
    },
    FETCHING: {
        user: null,
        loading: false,
        error: null,
    }
}

const RegisterContext = createContext(initState);

export const REG_ACTIONS = {
    UPDATING_INPUTS: "updating user input",
    START_REQ: "start register",
    SUCCESS_REQ: "success register",
    FAIL_REQ: "fail register",
};


function RegisterContextProvider({ children }) {
    const [state, dispatch] = useReducer(RegisterReducer, initState);

    return (
        <RegisterContext.Provider value={{
            user_infos: state.USER_DATA,
            success: state.FETCHING.success,
            loading: state.FETCHING.loading,
            error: state.FETCHING.error,
            dispatch,
            state
        }}>
            {children}
        </RegisterContext.Provider>
    )
}

export default RegisterContextProvider;

export const RegisterState = () => {
    return useContext(RegisterContext);
}