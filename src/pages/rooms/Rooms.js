import React from 'react'
import useFetch from '../../hooks/fetchData'
import { Link, useParams } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import { Box, Button, Container, Grid } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import room1 from '../../images/rooms/room1.jpeg';
import room2 from '../../images/rooms/room2.jpeg';
import room3 from '../../images/rooms/room3.jpeg';
import room4 from '../../images/rooms/room4.jpeg';
import room5 from '../../images/rooms/room5.jpeg';

const rooms = [room1, room2, room3, room4, room5];

function Rooms() {
    const { hotelID } = useParams();
    const { data, loading, error } = useFetch(`/rooms/all/${hotelID}`);
    console.log(data, loading, error);
    const navigate = useNavigate();
    return (
        <Container sx={{ mt: 5 }}>
            <h1>List of all hotel room types : </h1>
            {loading ?
                <Loading />
                :
                <>
                    {data?.rooms.map((room, index) => (
                        <Grid key={room._id} container spacing={2} sx={{ borderBottom: "2px solid gray", borderRadius: 1, p: 3 }}>
                            <Grid item xs={4}>
                                <img src={rooms[index]} height={340} width={350} alt="room1" id='imageProd' />
                            </Grid>
                            <Grid item xs={8}>
                                <h2>Type : <Link to={`/hotel/room_types/${hotelID}/${room._id}`} style={{ textDecoration: "none", color:"gray" }}>{room.name} </Link> </h2>
                                <h4>Price : {room.price} </h4>
                                <h4>Max Number of People : {room.maxPeople} </h4>
                                <h4>Number of Rooms : {room.room_numbers.length}</h4>
                                <p> description : {room.description}</p>
                                <h4><Link to={`/hotel/room_types/${hotelID}/${room._id}`} style={{ textDecoration: "none" }}>Show Rooms</Link></h4>
                            </Grid>
                        </Grid>
                    ))}
                </>
            }
            {data?.rooms.length < 1 &&  <h3 style={{color:"red", border:"1px Solid red", padding:15, borderRadius:5, width:"50%", margin:"auto"}}>Sorry, but room information for this hotel has not been added yet.</h3>}
        </Container>


    )
}

export default Rooms