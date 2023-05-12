import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Rating, Button, Box, Typography, Modal } from '@mui/material';
import { FETCH_ACTIONS, FetchDataState } from '../../context/FetchDataContext';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'rgba(0,0,0,0.8)',
    color: "white",
    border: '2px solid #000',
    boxShadow: 24,
    px: "5%",
    py: "5%",
    textAlign:"center"
};

export default function RatingModal({hotel, image}) {
    const {data, loading, error, fetchDispatch} = FetchDataState();
    const [rating, setRating] = useState(0);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const handleRate = async(e) =>{
        e.stopPropagation();
        const hotel_name = hotel._id;
        const user_id = JSON.parse(localStorage.getItem("user"))._id;

        const rating_number = Number(rating);
        fetchDispatch({type:FETCH_ACTIONS.START});
        try{
            await axios.put(`/hotels/update_hotel/${hotel_name}/${user_id}`, {rating : rating_number});
            fetchDispatch({type:FETCH_ACTIONS.SUCCESS, payload : null });
        }catch(error){
            fetchDispatch({type:FETCH_ACTIONS.ERROR, payload : error.response.data });
        }
    }
    console.log(typeof rating)
    return (
        <div>
            <Button variant='contained' onClick={handleOpen} >Rate This Hotel</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6"  sx={{mb:1, fontSize:17}}>
                         {hotel.name} : 
                    </Typography>
                    <img src={image} alt="hotel" width={150} height={200} style={{borderRadius:5}} />
                    <Box
                        sx={{
                            '& > legend': { mt: 2 },
                        }}
                    >
                        <Typography component="legend">Rate This Hotel :</Typography>
                        <Rating
                            name="simple-controlled"
                            sx={{ bgcolor: 'white', p:1, mt:2, borderRadius:2 }}
                            rating= {rating}
                            onChange={(e, value) =>{
                                setRating(value)
                            }}
                        /><br/>
                        <Button variant='contained' sx={{mt:2}} onClick={handleRate}>Rate</Button>
                    </Box>

                </Box>
            </Modal>
        </div>
    );
}