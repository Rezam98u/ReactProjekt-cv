import { React, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import { faCreditCard, faShop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DrawerMui from '../shopping/Drawer/Drawer_mui'


/// Context
import { AppContext } from '../ContextApp';

///////////////////////////
const Navbar = () => {
    const Navigate = useNavigate()
    const { MoodHandler } = useContext(AppContext);

    return (
        <>
            <AppBar style={{ backgroundColor: "#10182f" }}>
                <Toolbar className='w-[93%] mx-auto flex justify-between py-2'>
                    {/* <IconButton sx={{ display: { xs: 'none', md: 'block' } }}
                            className='text-white text-sm'>
                            developed by  <span className="text-sm"> React </span>
                        </IconButton> */}

                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <button onClick={() => Navigate('/programmer')} >
                            <DeveloperModeIcon /> Programer
                        </button>
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <button onClick={() => Navigate('/appShop')} >
                            <FontAwesomeIcon icon={faShop} />  Online Shop
                        </button>
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <button onClick={() => Navigate('/threeJs')} >
                            ThreeJs
                        </button>
                    </Box>

                    {/* <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <button onClick={() => Navigate('/record_fantasyMain')} >
                            Record fantasy  (is completing)
                        </button>
                    </Box> */}

                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <button onClick={() => Navigate('/adminPanel')} >
                            AdminPanel
                        </button>
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <button onClick={() => Navigate('/crypto')} >
                            <FontAwesomeIcon icon={faCreditCard} />  Crypto
                        </button>
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <button onClick={() => Navigate('/amrSam')} >
                            AmrSam
                        </button>
                    </Box>

                    <Box>
                        <button className='bg-slate-500 rounded-3xl px-2 py-2  hover:bg-blue-700'
                            onClick={() => MoodHandler()}> <DarkModeIcon />
                        </button>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;
