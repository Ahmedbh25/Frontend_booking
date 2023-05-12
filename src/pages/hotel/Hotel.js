import React from 'react'
import useFetch from '../../hooks/fetchData'
import { Link, useParams } from 'react-router-dom';
import hotel1 from '../../images/hotels/hotel1.jpeg';
import { Button, Container, Grid, Typography } from '@mui/material';
import Loading from '../../components/loading/Loading';

function Hotel() {
    const { hotelID } = useParams();
    const { data, loading, error } = useFetch(`/hotels/${hotelID}`);
    console.log(data, loading, error)

    return (
        <Container sx={{ my: 10 }}>
            {loading ?
                <Loading />
                :
                <>
                    <Typography sx={{mb:5}} variant='h5'>Informations About The Hotel : </Typography>
                    <Grid container spacing={1} sx={{ border: "1px solid silver", borderRadius: 1, p: 3 }}>

                        <Grid item xs={4} >
                            <Link to={`/hotel/room_types/${data?._id}`} >
                                <img src={hotel1} alt='hotel' width={350} height={350} />
                            </Link>
                        </Grid>
                        <Grid item xs={8} >
                            <Typography variant='h6' component={Link} to={`/hotel/room_types/${data?._id}`} sx={{ textDecoration: "none" }}>Name : {data?.name}</Typography>
                            <p>Title : {data?.title}</p>
                            <p>City : {data?.city}</p>
                            <p>Cheapest Price : {data?.cheapestPrice}</p>
                            <p>Type : {data?.type}</p>
                            <p>Number of Room Types : {data?.rooms.length}</p>
                            <p>address : {data?.address}</p>
                            <p style={{lineHeight:2}}>Description : {data?.description}</p>
                        </Grid>
                    </Grid>
                </>
            }

        </Container>
    )
}

export default Hotel