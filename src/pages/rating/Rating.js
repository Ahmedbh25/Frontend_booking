import React, { useState } from 'react';
import axios from "axios";
import { Container, Grid } from '@mui/material';
import { FETCH_ACTIONS, FetchDataState } from '../../context/FetchDataContext';
import Loading from '../../components/loading/Loading';
import hotelIMG from "../../images/hotels/hotel1.jpeg";
import RatingModal from '../../components/ratingModal/RatingModal';

function Rating() {
  const { data, loading, error, fetchDispatch } = FetchDataState();
  
  const handleChange = async (e) => {
    const hotel = e.target.value;
    console.log(hotel.length);
    if (hotel.length > 2) {
      fetchDispatch({ type: FETCH_ACTIONS.START });
      try {
        const res = await axios.post("/hotels/by_name", { name: hotel });
        fetchDispatch({ type: FETCH_ACTIONS.SUCCESS, payload: res.data });
        return console.log(data)
      } catch (error) {
        fetchDispatch({ type: FETCH_ACTIONS.ERROR, payload: error });
      }
    }
  }
  console.log(data, loading, error);
  return (
    <Container sx={{ ml: 10 }}>
      <div style={{ width: "50%", margin: "auto" }}>
        <h1>Search Hotel To rated it : </h1>
        <label htmlFor='hotel' style={{ marginLeft: "5vh" }}>Hotel : </label>
        <input type="text" name="hotel" onChange={handleChange} style={{ padding: 4, fontSize: 16 }} />
      </div>

      {loading ?
        <Loading />
        :
        <Grid container spacing={2} sx={{mt:5}}>
        {data?.map(hotel => (
            <Grid item xs={4} key={hotel._id} sx={{textAlign:"center", mb:5}}>
              <img src={hotelIMG} height={340} width={350} alt="room1" />
              <h4 style={{}}>name : {hotel.name} </h4>
              <RatingModal hotel = {hotel} image = {hotelIMG} />
            </Grid>

          ))
        }
        </Grid>
      }
    </Container>
  )
}

export default Rating