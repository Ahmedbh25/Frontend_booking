import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const inputStyling = {
    padding: "10px",
    width: "100%",
}
function Login() {
    const { loading, dispatch } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const errorRef = useRef();

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const responce = await axios.post("/auth/login", { username: username, password: password });
            dispatch({ type: "LOGIN_SUCCESS", payload: responce.data.details });
            navigate("/");
        } catch (error) {
            errorRef.current.textContent = error.response.data.message;
            setTimeout(() => {
                errorRef.current.textContent = "";
            }, 3000);
            dispatch({ type: "LOGIN_FAILURE", payload: error.response.data.message });
        }
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            navigate('/profile');
        } else {
            setIsLoading(false);
        }
    }, []);

    if (isLoading) {
        return <div style={{ textAlign: "center", marginTop: 10 }}>Redirection To Profile Page...</div>;
    }

    return (
        <div style={{ border: "1px solid gray", backgroundColor: "silver", borderRadius: "5px", margin: "5% 25%", paddingTop: "20px", paddingBottom: "50px" }}>
            <h1 style={{ textAlign: "center" }}>SIGN IN : </h1>
            <div style={{ width: "50%", margin: "auto" }}>
                <label htmlFor="username">username : </label>
                <input type='text' name="username" placeholder='Username ...' style={inputStyling} onChange={(e) => setUsername(e.target.value)} /><br /><br />
                <label htmlFor="password">Password : </label>
                <input type='password' name="password" placeholder='Password ...' style={inputStyling} onChange={(e) => setPassword(e.target.value)} />
                <p ref={errorRef} style={{ color: "red" }}></p>
                <Button variant='contained' disabled={loading} color='success' sx={{ m: "5% 25%" }} onClick={handleLogin}>Login</Button>
            </div>
        </div>
    )
}

export default Login