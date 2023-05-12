import React from 'react'
import { Typography, Toolbar} from '@mui/material';
import BookingLogo from '../../../images/HotelBookingLogo.png';
import { Link } from 'react-router-dom';

function Toolbars() {
    return (
        <Toolbar>
            <img src={BookingLogo} alt="IMG BOOKING" id="bookingLogo"/>
            <Typography
                variant="h6"
                noWrap
                component={Link}
                to="/"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',

                }}
            >
                ahmed_Booking
            </Typography>
        </Toolbar>
    )
}

export default Toolbars