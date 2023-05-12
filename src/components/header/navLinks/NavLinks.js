import React, { useState } from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const pages = [
    {
        name : 'Home',
        url : '/',
    },
    {
        name : 'Rating',
        url : '/Rating',
    },
    {
        name : 'Flights',
        url : '/Flights',
    },
    {
        name : 'Attractions',
        url : '/Attractions',
    },
    {
        name : 'Conatct',
        url : '/Contact',
    },
];

function NavLinks() {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const user = true;
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page, i) => (

                    <Button
                        id='NavLink'
                        component={Link}
                        key={i}
                        onClick={handleCloseNavMenu}
                        to={page.url}
                        sx={{ my: 2, color: 'white', display: 'block', ml: 3, mt: 5 }}
                    >

                        {page.name}
                    </Button>
                ))}
            </Box>



            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    {pages.map((page, i) => (
                        <MenuItem key={i} onClick={handleCloseNavMenu}>
                            <Typography
                                textAlign="center"
                                component={Link}
                                id='NavLink'
                                to={page.url}
                                sx={{ mx: 5, my: 1, color: 'black', display: 'block', textDecoration: "none" }}
                            >{page.name}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </>
    )
}

export default NavLinks