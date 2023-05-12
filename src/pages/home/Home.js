import React from "react";
import { Container } from "@mui/material";
import Cities from "../../components/cities/Cities";
import './style.css';

const Home = () => {
  
  return (
    <Container sx={{my:7}}>
      <Cities />      
    </Container>
  );
};

export default Home;