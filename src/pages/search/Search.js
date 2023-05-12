import React, { useRef } from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import useFetch from '../../hooks/fetchData';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { getItem } from '../../utils/utilFunctions';
import SearchResult from '../../components/searchResult/SearchResult';
import { RES_ACTIONS, ReservationState } from '../../context/RoomReservationContext';
import axios from 'axios';

const myStyle = { padding: 10, marginTop: 5 };

function Search() {
  const { data, loading, error } = useFetch("/hotels/cities");
  const { resState, reservationDispatch } = ReservationState();
  const { inputs: { destination, arrival_date, departure_date } } = resState;
  const Item = getItem();
  const errorRef = useRef();

  const handleSearch = async() => {
    if (!arrival_date.length) {
      return errorRef.current.textContent = "The Arrival date is Empty !";
    } else if (!departure_date.length) {
      return errorRef.current.textContent = "The Departure date is Empty !";
    }
    
    const arrival = new Date(arrival_date);
    const departure = new Date(departure_date);
    console.log(arrival, departure, destination );
    if (arrival > departure) {
      return errorRef.current.textContent = "The arrival date must be earlier than the departure date!";
    } else {
      errorRef.current.textContent = "";
    }
    reservationDispatch({ type: RES_ACTIONS.START_SEARCH });
    let Hotels;

    try {
      const response = await axios.post("/rooms/filter_by_dates", {city : destination, arrival : arrival, departure : departure })

      reservationDispatch({ type: RES_ACTIONS.SUCCESS_SEARCH, payload : response.data });
    } catch (error) {
      reservationDispatch({ type: RES_ACTIONS.FAIL_SEARCH, payload : error  });
    }
    console.log();
  }

  return (
    <Container>
      <h2>Search </h2>
      <h4>Enter your dates and choose from Tunisian hotels : </h4>
      <Grid container spacing={2} sx={{ bgcolor: "silver", p: 1 }}>
        <Grid item xs={12} md={4} sx={{ py: 5 }}>
          <Item sx={{ p: 4 }} >
            <label htmlFor="hotels" style={{ fontSize: 20, fontWeight: "bold" }}><LocationOnIcon />Destination:</label><br />
            <select name="hotels" id="hotels" style={myStyle} onClick={(e) => reservationDispatch({ type: RES_ACTIONS.INIT_DESTINATION, payload: e.target.value })}>
              {data?.cities.map((city, index) => (
                <option key={index} value={city} >{city} : {data.citiesList[index]} Hotels</option>
              ))}
            </select>
          </Item>
        </Grid>
        <Grid item xs={12} md={4} sx={{ py: 5 }}>
          <Item sx={{ p: 4 }}>
            <label htmlFor="arrival_date" style={{ fontSize: 20, fontWeight: "bold" }}>arrival date : </label><br />
            <input type="date" id="arrival" name="arrival" style={myStyle} value={resState.inputs.arrival_date} onChange={(e) => reservationDispatch({ type: RES_ACTIONS.INIT_ARRIVAL_DATE, payload: e.target.value })} />
          </Item>
        </Grid>
        <Grid item xs={12} md={4} sx={{ py: 5 }} >
          <Item sx={{ p: 4 }}>
            <label htmlFor="departure_date" style={{ fontSize: 20, fontWeight: "bold" }}>Date of departure : </label>
            <input type="date" id="departure" name="departure" style={myStyle} value={resState.inputs.departure_date} onChange={(e) => reservationDispatch({ type: RES_ACTIONS.INIT_DEPARTURE_DATE, payload: e.target.value })} />
          </Item>
        </Grid>
        <Typography sx={{ color: 'red', textAlign: "center", width: '100%', my: 2 }} ref={errorRef}></Typography>
        <Button variant='contained' sx={{ mx: "45%", px: 5, mb: 2 }} onClick={handleSearch} >Search</Button>
      </Grid>
      <SearchResult Searching_result={resState.search_result} />
    </Container>
  )
}

export default Search