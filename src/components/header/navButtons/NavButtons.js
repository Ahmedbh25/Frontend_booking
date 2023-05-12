import React, { useContext } from 'react'
import { Button, Divider } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext';

function NavButtons() {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () =>{
    //localStorage.removeItem("user");
    dispatch({type:"LOGOUT"})
    navigate("/");
  }

  return (
    <div style={{ position: "absolute", top: 0, right: 0 }}>
      <span style={{ fontWeight: "bold" }} >+216 58 859 246</span><br />
      {!user ?
        <>
          <Button color="secondary" onClick={() => navigate("/login")} >Login</Button>
          <Button color="secondary" onClick={() => navigate("/register")}>Register</Button>
        </>
        :
        <>
          <Button color="secondary" onClick={handleLogout} >Logout</Button>
          <Button color="secondary" onClick={()=> navigate("/profile")} >Profile</Button>
        </>

      }

    </div>

  )
}

export default NavButtons