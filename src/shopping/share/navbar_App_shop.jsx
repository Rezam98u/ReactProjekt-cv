import { React, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageScrollProgressBar from "react-page-scroll-progress-bar";

import { Badge } from 'react-bootstrap';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
import { AppBar, Drawer, Toolbar, IconButton, Box, TextField, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useStateContext } from '../context/useStateContext';
import { useSelector } from 'react-redux';

///////////////////////
const NavbarAppShop = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const PathName = location.pathname
    // console.log(PathName);

    const { isMobile, setIsMobile, searchHandler, search, selectHandler, select, prices } = useContext(useStateContext)

    // const { state } = useContext(CardContext);
    const state = useSelector(state => state.useReducer)

    // const { MoodHandler } = useContext(MoodHandlerContext);

    return (
        <>
            <AppBar>
                <PageScrollProgressBar color="#00AE47" bgColor="#f2f2f2" height="4.1px" />
                <Toolbar className='navbar_app_shop flex md:justify-around py-3'>

                    <div className='md:hidden'>
                        <IconButton aria-label='logo' onClick={() => setIsMobile(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer open={isMobile} anchor='left' onClose={() => setIsMobile(false)}>
                            <Box p={2}>
                                <Box m={1}>
                                    <button className='btn btn-success Btn_out ' onClick={() => navigate('/')} >
                                        <HomeIcon />
                                    </button>
                                </Box>
                                <Box m={1}>
                                    <button className='btn btn-primary Btn_out' onClick={() => navigate('/products')}>
                                        <ProductionQuantityLimitsIcon />  products
                                    </button>
                                </Box>
                                <Box m={1}>
                                    <button className=' btn btn-success Btn_out  ' onClick={() => navigate('/products/shop')}>
                                        <ShoppingCartIcon /> <Badge pill bg="secondary">{prices(state.selectedItems)}</Badge>
                                    </button>
                                </Box>

                                {/* <button className='bg-slate-500 rounded-3xl px-3 py-2  hover:bg-blue-700' onClick={() => MoodHandler()}> <DarkModeIcon />  </button> */}

                                <Box m={1}>
                                    <div className={PathName === "/products" ? "flex items-start flex-col gap-4" : "hidden"}>
                                        <div className='w-40'>
                                            <TextField className=' bg-zinc-300 rounded-md'
                                                select fullWidth value={select.text}
                                                label="Please select a Category"
                                                onChange={selectHandler}
                                            >
                                                <MenuItem value="">All</MenuItem>
                                                <MenuItem value="clothing">clothing</MenuItem>
                                                <MenuItem value="electronics">electrical devices</MenuItem>
                                                <MenuItem value="jeweler">jeweler</MenuItem>
                                            </TextField>
                                        </div>

                                        <div className='w-72'>
                                            <TextField className=' bg-zinc-300 rounded-lg' type="search" label={<SearchIcon />} fullWidth
                                                value={search.text} onChange={searchHandler} />
                                        </div>
                                    </div>
                                </Box>
                            </Box>
                        </Drawer>
                    </div>


                    <div className=' w-full flex items-center justify-between '>
                        <div>
                            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                                <button className='btn btn-success Btn_out ' onClick={() => navigate('/')} >
                                    <HomeIcon />
                                </button>
                            </Box>
                        </div>

                        <div>
                            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                                <button className='btn btn-primary Btn_out' onClick={() => navigate('/products')}>
                                    <ProductionQuantityLimitsIcon />  products
                                </button>
                            </Box>
                        </div>

                        <div className={PathName === "/products" ? "flex items-center MD:hidden" : "hidden"}>
                            <button className='btn'><SearchIcon fontSize='large' /></button>
                            <div className='flex-auto w-96'>
                                <TextField className=' bg-zinc-300 rounded-lg' type="search" label="search" fullWidth
                                    value={search.text} onChange={searchHandler} />
                            </div>
                            <div className='flex-auto w-40'>
                                <TextField className='ml-2 bg-zinc-300 rounded-md'
                                    select fullWidth value={select.text} label="Please select a Category"
                                    // placeholder='please select your daste'
                                    onChange={selectHandler}
                                //  helperText="Please select your daste " 
                                >
                                    {/* <MenuItem value="category">select a category</MenuItem> */}
                                    <MenuItem value="">All</MenuItem>
                                    <MenuItem value="clothing">clothing</MenuItem>
                                    <MenuItem value="electronics">electrical devices</MenuItem>
                                    <MenuItem value="jeweler">jeweler</MenuItem>
                                </TextField>
                            </div>
                        </div>

                        <div>
                            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                                <button className=' btn btn-success Btn_out ' onClick={() => navigate('/products/shop')}>
                                    <ShoppingCartIcon /> <Badge pill bg="secondary">{prices(state.selectedItems)}</Badge>
                                </button>
                            </Box>
                        </div>
                    </div>
                </Toolbar>
            </AppBar >
        </>

    );
}

export default NavbarAppShop;
