import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid, Typography } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';

import { FILTER_ACTIONS, FilterState } from '../../context/FilterContext';
import hotel1 from '../../images/hotels/hotel1.jpeg';
import hotel2 from '../../images/hotels/hotel2.jpeg';
import hotel3 from '../../images/hotels/hotel3.jpg';
import hotel4 from '../../images/hotels/hotel4.jpeg';
import hotel5 from '../../images/hotels/hotel5.jpeg';
import hotel6 from '../../images/hotels/hotel6.jpeg';
import hotel7 from '../../images/hotels/hotel7.jpeg';

const hotels = [hotel1, hotel2, hotel3, hotel4, hotel5, hotel6, hotel7];
function FilterSideBar({ City }) {
    const { state, OrganisedFilterDispatch } = FilterState();
    console.log(state);
    const data = state.FiltredHotels;
    return (
        <Grid container spacing={2}>
            <Grid item xs={3}  >
                <h1 style={{ marginLeft: 10 }}>Filter List :</h1>
                <div style={{ marginLeft: 20 }}>
                    <h2 >Stars <span style={{ fontSize: 15 }}>(Rating)</span>  : </h2>

                    <input type="radio" id="1star" name="rating" value="start1" checked={state.radiosCheked.radioStars.start1} onChange={(e) => OrganisedFilterDispatch(e, FILTER_ACTIONS.STARS)} />
                    <label htmlFor="1star">1 Star</label><br /><br />

                    <input type="radio" id="2star" name="rating" value="start2" checked={state.radiosCheked.radioStars.start2} onChange={(e) => OrganisedFilterDispatch(e, FILTER_ACTIONS.STARS)} />
                    <label htmlFor="2star">2 Stars</label><br /><br />

                    <input type="radio" id="3star" name="rating" value="start3" checked={state.radiosCheked.radioStars.start3} onChange={(e) => OrganisedFilterDispatch(e, FILTER_ACTIONS.STARS)} />
                    <label htmlFor="3star">3 Stars</label><br /><br />

                    <input type="radio" id="4star" name="rating" value="start4" checked={state.radiosCheked.radioStars.start4} onChange={(e) => OrganisedFilterDispatch(e, FILTER_ACTIONS.STARS)} />
                    <label htmlFor="4star">4 Stars</label><br /><br />

                    <input type="radio" id="5star" name="rating" value="start5" checked={state.radiosCheked.radioStars.start5} onChange={(e) => OrganisedFilterDispatch(e, FILTER_ACTIONS.STARS)} />
                    <label htmlFor="5star">5 Stars</label><br /><br />

                    <h2>Price : </h2>
                    <input type="radio" id="ascend" name="Price" value="ascending" checked={state.radiosCheked.radioPrice.ascending} onChange={(e) => OrganisedFilterDispatch(e, FILTER_ACTIONS.PRICE)} />
                    <label htmlFor="ascend">Ascending</label><br /><br />

                    <input type="radio" id="descend" name="Price" value="descending" checked={state.radiosCheked.radioPrice.descending} onChange={(e) => OrganisedFilterDispatch(e, FILTER_ACTIONS.PRICE)} />
                    <label htmlFor="descend">Descending</label><br /><br />


                    <h2>Type : </h2>
                    <input type="radio" id="motels" name="Type" checked={state.radiosCheked.radioType.motels} value="motels" onChange={(e) => OrganisedFilterDispatch(e, FILTER_ACTIONS.TYPE)} />
                    <label htmlFor="motels">Motels</label><br /><br />

                    <input type="radio" id="boutique" name="Type" checked={state.radiosCheked.radioType.boutique} value="boutique" onChange={(e) => OrganisedFilterDispatch(e, FILTER_ACTIONS.TYPE)} />
                    <label htmlFor="boutique">Boutique Hotel</label><br /><br />


                    <input type="radio" id="chain" name="Type" checked={state.radiosCheked.radioType.chain} value="chain hotels" onChange={(e) => OrganisedFilterDispatch(e, FILTER_ACTIONS.TYPE)} />
                    <label htmlFor="chain">Chain hotels</label><br /><br />

                    <input type="radio" id="resorts" name="Type" checked={state.radiosCheked.radioType.resorts} value="resorts" onChange={(e) => OrganisedFilterDispatch(e, FILTER_ACTIONS.TYPE)} />
                    <label htmlFor="resorts">Resorts</label><br /><br />

                    <input type="radio" id="innHot" name="Type" checked={state.radiosCheked.radioType.inn} value="inn" onChange={(e) => OrganisedFilterDispatch(e, FILTER_ACTIONS.TYPE)} />
                    <label htmlFor="innHot">Inn</label><br /><br />
                    
                    <h2>Delete Filter :</h2>
                    <input type="button" id="Dely" name="Delete" value="delete Filter" style={{marginLeft:15, backgroundColor:"red", border : "none", padding:7, borderRadius:5}} onClick={(e) => OrganisedFilterDispatch(e, FILTER_ACTIONS.DELETE)} />
                </div>

            </Grid>
            <Grid item xs={9} >
                <>
                    <h1>List of Hotels in {City} :</h1>
                    {data && data.map((hotel, index) => (
                        <Grid container spacing={2} key={hotel._id} sx={{ border: "1px solid gray", p: 2 }}>
                            <Grid item xs={3} >
                                <Link to={`/hotel/${hotel._id}`} style={{ textDecoration: "none" }} ><img src={hotels[index]} width={220} height={220} style={{ paddingBottom: 15 }} alt={hotel.name} id='imageProd' /></Link>
                            </Grid>
                            <Grid item xs={6} style={{ backgroundColor: "#fff" }}>
                                <Link to={`/hotel/${hotel._id}`} style={{ textDecoration: "none" }} ><p>{hotel.name}</p></Link>
                                <p>Type : {hotel.type}</p>
                                <p><PlaceIcon />{hotel.city}</p>
                                <p>{hotel.description.slice(0, 80)} ...</p>

                                <Typography variant='h6' component={Link} to={`/hotel/room_types/${hotel?._id}`} sx={{ textDecoration: "none" }}>Show Rooms</Typography>

                            </Grid>
                            <Grid item xs={3} style={{ backgroundColor: "#fff" }}>
                                <p>Rating : <span style={{ color: hotel.rating?.number ? "green" : "red" }}>{hotel.rating ? hotel.rating.number.toFixed(2) : "not yet rated"} </span></p>
                                <p> {hotel.rating ? `Number of Ratings : ${hotel.rating.total_ratings}` : ""} </p>
                                <p>number of Rooms : {hotel.rooms.length}</p>
                                <p>cheapest Price : {hotel.cheapestPrice} DT</p>
                                <Button variant='contained'>check availability</Button>
                            </Grid>
                        </Grid>
                    ))
                    }
                </>

            </Grid>
        </Grid>

    )
}

export default FilterSideBar