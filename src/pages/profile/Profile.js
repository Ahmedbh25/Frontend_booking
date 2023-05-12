import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Container } from '@mui/material';
import userImage from "../../images/user.jpg"
import { useNavigate } from 'react-router-dom';
function Profile() {
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'));
    if(!user){
      navigate("/login");
    }else{
      setIsLoading(false);
    }
  }, []);

  console.log(localStorage.getItem("user"));
  if (isLoading) {
    return <div style={{textAlign:"center", marginTop:10}}>Redirection To Login Page...</div>;
  }

  return (
    <div style={{marginLeft:50}}>
      <h2>Welcome In Your Profile : </h2>
      <Container>
        <h3>
          <img src={userImage} style={{ borderRadius: "50%", border: "2px solid gray", width: "7%", height: "7%" }} />
          <span style={{ position: "relative", bottom: 32, marginLeft: 10 }}>{user?.username}</span>
        </h3>
        <h3><span style={{ color: "purple" }}>Country :</span> {user?.country}</h3>
        <h3><span style={{ color: "purple" }}>City : </span> {user?.city}</h3>
        <h3><span style={{ color: "purple" }}>Phone : </span> {user?.phone}</h3>

      </Container>
    </div>

  )
}

export default Profile