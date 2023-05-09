import { React, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faShop } from '@fortawesome/free-solid-svg-icons';
import { MoodHandlerContext } from '../App'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

import DrawerMui from '../shopping/Drawer/Drawer_mui'
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import HeroSection from './HeroSection';
import Footer from './Footer';
// import "./navbar.styles.scss"

///////////////////////////
const Home = () => {
    const Navigate = useNavigate()

    const { MoodHandler } = useContext(MoodHandlerContext);

    const [click, setClick] = useState(true)

    const clickHandler = () => setClick(!click)

    const [offset, setOffset] = useState(false);

    const onScroll = () => { window.scrollY >= 100 ? setOffset(true) : setOffset(false) }

    window.addEventListener('scroll', onScroll)

    return (
        <div >
            <AppBar>
                <Toolbar className='flex xs:justify-between md:justify-evenly  py-2'>
                    <IconButton sx={{ display: { xs: 'none', md: 'block' } }}>
                        React
                    </IconButton>

                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <button onClick={() => Navigate('/programmer')} >
                            <DeveloperModeIcon /> Programer
                        </button>
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <button onClick={() => Navigate('/products')} >
                            <FontAwesomeIcon icon={faShop} />  Products
                        </button>
                    </Box>

                    <Box>
                        <div className='md:hidden'> <DrawerMui /> </div>
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <button onClick={() => Navigate('/Record_fantasyMain')} >
                            Record fantasy  (is completing)
                        </button>
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <button onClick={() => Navigate('/crypto')} >
                            <FontAwesomeIcon icon={faCreditCard} />  Crypto
                        </button>
                    </Box>

                    <Box>
                        <button className='bg-slate-500 rounded-3xl px-2 py-2  hover:bg-blue-700' onClick={() => MoodHandler()}> <DarkModeIcon />  </button>
                    </Box>
                </Toolbar>
            </AppBar>
            <HeroSection></HeroSection>
            <Footer></Footer>
        </div>
    );
}
export default Home;
