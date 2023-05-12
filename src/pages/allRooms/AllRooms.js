import React from 'react'
import useFetch from '../../hooks/fetchData'
import { useParams } from 'react-router-dom';
import { Container, Grid, Button } from '@mui/material';
import room1 from '../../images/rooms/room1.jpeg';
import room2 from '../../images/rooms/room2.jpeg';
import room3 from '../../images/rooms/room3.jpeg';
import room4 from '../../images/rooms/room4.jpeg';
import room5 from '../../images/rooms/room5.jpeg';
import Loading from '../../components/loading/Loading';

const rooms = [room1, room2, room3, room4, room5];

function AllRooms() {
  const { hotelID, roomID } = useParams();
  const { data, loading, error } = useFetch(`/rooms/all/single_rooms/${hotelID}/${roomID}`);
  console.log(data);
  return (
    <Container>
      <h2>List of All Rooms : </h2>
      {loading ?
        <Loading />
        :
        <Grid container spacing={2}>
          {data?.rooms.map((room, index) => (
            <Grid item xs={12} md={4} key={index} sx={{ border: "1px solid silver", m: 1, borderRadius: 2 }}>
              <img src={rooms[index]} alt="rooms" width="95%" height="60%" id='imageProd' />
              <h4 style={{ textAlign: "center" }}>Room Number : {room.number}</h4>
              <p>Unavailable Dates :
                {room.unavailableDates.length === 0 ? <span > No reservation yet for this room </span>
                  :
                  room.unavailableDates.map(date => {
                    <>
                      <span>{date}</span>
                    </>
                  })
                }
              </p>
              <Button variant='contained' sx={{ mb: 2, mx: "25%" }}>Make Reservation</Button>

            </Grid>
          ))}
        </Grid>
      }
      
    </Container >
  )
}

export default AllRooms