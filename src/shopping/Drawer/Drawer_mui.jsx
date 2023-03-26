import { React, useState } from 'react';
import { Drawer, Box, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { faCreditCard, faShop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

////////////////////////
const DrawerMui = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const Navigate = useNavigate();

    return (
        < >
            <IconButton aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>

            <Drawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} >
                <Box p={3}>
                    <Typography>
                        React
                    </Typography>

                    <Box mt={1}>
                        <Box>
                            <button onClick={() => Navigate('/programmer')} >
                                <DeveloperModeIcon /> Programer
                            </button>
                        </Box>

                        <Box>
                            <button onClick={() => Navigate('/products')} >
                                <FontAwesomeIcon icon={faShop} />  Products
                            </button>
                        </Box>

                        <Box>
                            <button onClick={() => Navigate('/Record_fantasyMain')} >
                                Record fantasy  (is completing)
                            </button>
                        </Box>

                        <Box>
                            <button onClick={() => Navigate('/crypto')} >
                                <FontAwesomeIcon icon={faCreditCard} />  Crypto  (is completing)
                            </button>
                        </Box>
                    </Box>

                </Box>
            </Drawer>
        </>
    );
}

export default DrawerMui;



