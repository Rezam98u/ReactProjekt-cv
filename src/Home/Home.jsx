import { React, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faShop } from '@fortawesome/free-solid-svg-icons';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import DrawerMui from '../shopping/Drawer/Drawer_mui'
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import HeroSection from './HeroSection';
import Footer from './Footer';
import { AppContext } from '../ContextApp';
// import "./navbar.styles.scss"

///////////////////////////
const Home = () => {
    const Navigate = useNavigate()

    const { MoodHandler } = useContext(AppContext);

    const [click, setClick] = useState(true)

    /////////////
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const clickHandler = () => setClick(!click)

    ///////////////
    const [offset, setOffset] = useState(false);
    const onScroll = () => { window.scrollY >= 100 ? setOffset(true) : setOffset(false) }

    window.addEventListener('scroll', onScroll)

    return (
        <>
            <AppBar>
                <Toolbar className='flex xs:justify-between md:justify-evenly py-2'>
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

            <HeroSection />

            {/* <div className='w-4/5 mx-auto border-4 my-3'>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            General settings
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                            Aliquam eget maximus est, id dignissim quam.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div> */}

            <Footer />
        </>
    );
}
export default Home;
