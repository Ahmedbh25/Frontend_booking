import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Toolbars from './toolbar/Toolbars';
import Search from './search/Search';
import NavLinks from './navLinks/NavLinks'
import './style.css';
import NavButtons from './navButtons/NavButtons';
import { SearchContext } from '../../context/SearchContext';
import FiltringSearch from './filtring_search/FiltringSearch';

function Header() {
    const {dispatch} = useContext(SearchContext);
    
    return (
        <AppBar position="static" >
            <Container maxWidth="xl" className="appBar">
                <Toolbar disableGutters>
                    <Toolbars />
                    <NavLinks />
                    <NavButtons />

                </Toolbar>
                <Search />
                <FiltringSearch />
            </Container>
        </AppBar>
    );
}
export default Header;

