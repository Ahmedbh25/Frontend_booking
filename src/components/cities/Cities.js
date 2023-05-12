import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import useFetch from "../../hooks/fetchData";
import sousse from "../../images/cities/sousse.jpeg";
import mounastir from "../../images/cities/mounastir.jpeg";
import kelibia from "../../images/cities/kelibia.jpeg";
import hammamet from "../../images/cities/hammamet.jpeg";
import tunis from "../../images/cities/tunis.jpg";
import Loading from '../loading/Loading';
import { Container } from '@mui/material';
import { getItem } from '../../utils/utilFunctions';

const cities = [hammamet, mounastir, sousse, tunis, kelibia];

function Cities() {
    const { data, loading, error } = useFetch("/hotels/cities");
    console.log(data, loading)
    const Item = getItem();
    return (
        <div style={{ paddingTop: "5px", marginBottom: "15px", }}>
            <h1 className="homeTitle">Top destinations for Tunisia city trips :  </h1>
            <p>Find hotels in some of the most popular cities in Tunisia</p>
            {loading ? (
                <Loading />
            )
                :
                (
                    <Container>
                    <Grid container spacing={2}>
                        {data?.cities.map((city, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Item sx={{ border: "1px solid gray" }}>
                                    <img src={cities[index]} alt='photo' id='imageProd' style={{ width: '100%', height: "250px" }} />
                                    <h2><Link to={`/hotels/${city}`} style={{ textDecoration: "none" }}>
                                        {city}
                                    </Link></h2>
                                    <h3>{data.citiesList[index]} Hotels available</h3>
                                </Item>
                            </Grid>
                        ))}
                    </Grid>
                    </Container>
                )

            }

        </div>
    )
}

export default Cities