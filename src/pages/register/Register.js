import React, { useRef, useEffect, useState } from 'react';
import { Button, Grid } from '@mui/material';
import { REG_ACTIONS, RegisterState } from '../../context/RegisterContext';
import { Register_Verification } from '../../utils/utilFunctions';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const inputStyling = {
    padding: "10px",
}

function Register() {
    const [isLoading, setIsLoading] = useState(true);
    const { state, user_infos, loading, success, error, dispatch } = RegisterState();
    const navigate = useNavigate();
    const usernameRef = useRef();
    const emailRef = useRef();
    const fullnameRef = useRef();
    const passwordRef = useRef();
    const ageRef = useRef();
    const countryRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const phoneRef = useRef();
    const error_responce = useRef();

    const inputsOptions = [
        { name: "email", ref: emailRef, type: "email" },
        { name: "password", ref: passwordRef, type: "password" },
        { name: "username", ref: usernameRef, type: "text" },
        { name: "full_name", ref: fullnameRef, type: "text" },
        { name: "age", ref: ageRef, type: "number" },
        { name: "country", ref: countryRef, type: "text" },
        { name: "state", ref: stateRef, type: "text" },
        { name: "city", ref: cityRef, type: "text" },
        { name: "phone", ref: phoneRef, type: "phone" },
    ];

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            navigate('/profile');
        }else {
            setIsLoading(false);
        }
    }, []);
    if (isLoading) {
        return <div style={{ textAlign: "center", marginTop: 10 }}>Redirection To Profile Page...</div>;
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        if (error_responce.current.textContent) {
            error_responce.current.textContent = "";
        }
        const fetch_error = Register_Verification(user_infos, usernameRef, emailRef, passwordRef, fullnameRef, ageRef, cityRef, stateRef, countryRef, phoneRef);
        console.log(fetch_error);
        if (fetch_error) {
            return
        }
        dispatch({ type: REG_ACTIONS.START_REQ });
        try {
            const res = await axios.post("/auth/register", user_infos);
            dispatch({ type: REG_ACTIONS.SUCCESS_REQ, payload: res.data });
            localStorage.setItem("user", JSON.stringify(res.data));
            window.location.href = '/profile';
        } catch (error) {
            error_responce.current.textContent = error.response.data;
            dispatch({ type: REG_ACTIONS.FAIL_REQ, payload: error.response.data })
        }

    }
    const handleDispatch = (e) => {
        dispatch({
            type: REG_ACTIONS.UPDATING_INPUTS,
            payload: { name: e.target.name, value: e.target.value }
        })
    }
    console.log(state)
    return (
        <form style={{ marginLeft: "10vh" }} onSubmit={handleRegister}>
            <h1>Register:</h1>
            <Grid container spacing={2}>
                {inputsOptions.map((option, i) => (
                    <Grid item xs={4} key={i}>
                        <label htmlFor={option.name}>{option.name} : </label>
                        <input type={option.type} name={option.name} placeholder={`${option.name} ....`} style={inputStyling} onChange={handleDispatch} /><br /><br />
                        <p ref={option.ref} style={{ color: "red" }} ></p>
                    </Grid>
                ))}
            </Grid>
            <p ref={error_responce} style={{ color: "red", textAlign: "center", fontSize: 18 }}></p>
            <Button variant='contained' type="submit" color="success" disabled={loading} sx={{ mx: "auto", display: "block" }}>Register</Button>
        </form>
    )
}

export default Register