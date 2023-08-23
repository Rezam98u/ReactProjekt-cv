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
import { useEffect } from 'react';
import { motion } from "framer-motion"
import Modal from 'react-modal';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FaChevronCircleDown, FaChevronCircleUp, FaUser } from 'react-icons/fa'
import { useState } from 'react';
import { useForm } from 'react-hook-form';


import { IoMdCloseCircle } from 'react-icons/io'
import axios from 'axios';
///////////////////////
const NavbarAppShop = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const PathName = location.pathname
    // console.log(PathName);

    const { handleSubmit } = useForm();

    const { isMobile, setIsMobile, searchHandler, search, selectHandler,
        select, prices, scroll, setScroll, openMenu, setOpenMenu,
        openMenuAcc, setOpenMenuAcc, email, setEmail, pass, setPass } = useContext(useStateContext)

    const onSubmit = () => {
        axios.post('http://localhost:3003/postUser',
            { email: email, pass: pass }).then((res) => console.log(res))
    }

    ////Modal
    Modal.setAppElement('#root')
    const [openModal, setOpenModal] = useState(Boolean);
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const state = useSelector(state => state.useReducer)

    // console.log(email);
    useEffect(() => {
        const onScroll = () => {
            const scrollY = window.scrollY;
            setScroll(scrollY)
        };
        window.addEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* <AppBar style={{
                background: scroll >= 2.933333396911621 ? '#FFFFFF' : "transparent", boxShadow: 'none', zIndex: 5, height: "62px"
            }}> */}
            <PageScrollProgressBar color="#00AE47" bgColor="#f2f2f2" height="4.1px" />
            <Toolbar className={PathName === "/AppShop/products" ?
                "flex md:justify-around absolute top-0 z-10 bg-slate-200" :
                "flex md:justify-around absolute top-0 z-10"}>

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


                <div className='w-full flex items-center justify-around relative'>
                    <div>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <button className='' onClick={() => navigate('/')} >
                                <HomeIcon />
                            </button>
                        </Box>
                    </div>

                    <div>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <button className='' onClick={() => navigate('/AppShop')} >
                                Home
                            </button>
                        </Box>
                    </div>

                    <div onMouseEnter={() => { setOpenMenu({ open: true, arrowUP: !openMenu.arrowUP }) }}
                        onMouseLeave={() => { setOpenMenu({ open: false, arrowUP: !openMenu.arrowUP }) }}>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <button className='flex items-center gap-2'>
                                Categories  <FaChevronCircleUp style={{ transform: openMenu.arrowUP ? 'rotate(180deg)' : null }} />
                            </button>
                        </Box>
                        {openMenu.open ?
                            <motion.div
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className='absolute'>
                                    <div className='w-72 rounded-md bg-white text-black py-2 mt-3'>
                                        <MenuItem className='hover:text-blue-700'>
                                            Women's Fashion
                                        </MenuItem>
                                        <MenuItem className='hover:text-blue-700'>
                                            Men's Fashion
                                        </MenuItem>
                                        <MenuItem className='hover:text-blue-700'>
                                            Phones & Telecommunications
                                        </MenuItem>
                                        <MenuItem className='hover:text-blue-700'>
                                            Computer,Office,Security
                                        </MenuItem>
                                        <MenuItem className='hover:text-blue-700'>
                                            Jewelry,Watches
                                        </MenuItem>
                                        <MenuItem className='hover:text-blue-700'>
                                            Bags,Shoes
                                        </MenuItem>

                                    </div>
                                </div>
                            </motion.div>
                            : null
                        }
                    </div>

                    <div>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <button onClick={() => setOpenModal(true)}>
                                Sing In
                            </button>
                            <div>
                                <Modal
                                    isOpen={openModal}
                                    // onAfterOpen={afterOpenModal}
                                    onRequestClose={() => setOpenModal(false)}
                                    style={customStyles}
                                // contentLabel="Example Modal"
                                >
                                    <button className="flex gap-2 items-center bg-red-400 px-3 py-2 mb-2 rounded-lg" onClick={() => setOpenModal(false)}>
                                        <IoMdCloseCircle size={19} /> close
                                    </button>

                                    <div className="form-container">
                                        <p className="title"> Login </p>
                                        <form className="form" onSubmit={handleSubmit(onSubmit)}>
                                            <div className="input-group">
                                                <label htmlFor="email"> email </label>
                                                <input type="email" name="email" id="email"
                                                    placeholder="email" onChange={i => setEmail(i.target.value)} />
                                            </div>
                                            <div className="input-group">
                                                <label htmlFor="password">Password</label>
                                                <input type="password" name="password" id="password"
                                                    onChange={i => setPass(i.target.value)} />
                                                <div className="forgot">
                                                    <a rel="noopener noreferrer" href="#"> Forgot Password ? </a>
                                                </div>

                                            </div>
                                            <button type='submit' className="sign"> Sign in </button>
                                        </form>
                                        <div className="social-message">
                                            <div className="line"></div>
                                            <p className="message"> Login with social accounts </p>
                                            <div className="line"></div>
                                        </div>
                                        <div className="social-icons">
                                            <button aria-label="Log in with Google" className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                                </svg>
                                            </button>
                                            <button aria-label="Log in with GitHub" className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="signup"> Don't have an account?
                                            <button className="text-white ml-2"> Sign up </button>
                                        </div>
                                    </div>
                                </Modal>

                            </div>
                        </Box>
                    </div>

                    <div>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Tippy content="Whats News" delay={550} placement='auto-end'>
                                <button>
                                    Whats News
                                </button>
                            </Tippy>

                        </Box>
                    </div>

                    <div>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <button>
                                Delivery
                            </button>
                        </Box>
                    </div>


                    <div>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <button className='' onClick={() => navigate('/AppShop/products')}>
                                <ProductionQuantityLimitsIcon />  products
                            </button>
                        </Box>
                    </div>

                    <div onMouseEnter={() => { setOpenMenuAcc({ open: true, arrowUP: !openMenuAcc.arrowUP }) }}
                        onMouseLeave={() => { setOpenMenuAcc({ open: false, arrowUP: !openMenuAcc.arrowUP }) }}>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <button className="flex items-center gap-2">
                                <FaUser /> Account  <FaChevronCircleUp style={{ transform: openMenuAcc.arrowUP ? 'rotate(180deg)' : null }} />
                            </button>
                        </Box>
                        {openMenuAcc.open ?
                            <motion.div
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className='absolute'>
                                    <div className='w-52 rounded-md bg-white text-black py-2 mt-3 px-3'>
                                        <p> Welcome to ShopCart!</p>
                                        {/* <div className='flex gap-3 my-2'>
                                            <button className="bg-red-500 px-2 rounded-lg">
                                                Sign In
                                            </button>
                                        </div> */}
                                        <MenuItem className='hover:text-blue-700'>
                                            My Orders
                                        </MenuItem>
                                        <MenuItem className='hover:text-blue-700'>
                                            My Coins
                                        </MenuItem>
                                        <MenuItem className='hover:text-blue-700'>
                                            Massage Center
                                        </MenuItem>
                                        <MenuItem className='hover:text-blue-700'>
                                            Payment
                                        </MenuItem>
                                    </div>
                                </div>
                            </motion.div>
                            : null
                        }
                    </div>

                    {/* <div className={PathName === "/products" ? "flex items-center MD:hidden" : "hidden"}>
                        <button className='btn'><SearchIcon fontSize='large' /></button>
                        <div className='flex-auto w-96'>
                            <TextField className=' bg-zinc-300 rounded-lg' fullWidth
                                type="search"
                                label="search"
                                value={search.text}
                                onChange={searchHandler} />
                        </div>
                        <div className='flex-auto w-40'>
                            <TextField
                                className='ml-2 bg-zinc-300 rounded-md'
                                select fullWidth
                                value={select.text}
                                label="Please select a Category"
                                onChange={selectHandler} >

                                <MenuItem value="">All</MenuItem>
                                <MenuItem value="clothing">clothing</MenuItem>
                                <MenuItem value="electronics">electrical devices</MenuItem>
                                <MenuItem value="jeweler">jeweler</MenuItem>
                            </TextField>
                        </div>
                    </div> */}

                    <div>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <button onClick={() => navigate('/AppShop/shop')}>
                                <ShoppingCartIcon /> <Badge pill bg="secondary">{prices(state.selectedItems)}</Badge>
                            </button>
                        </Box>
                    </div>
                </div >
            </Toolbar >
            {/* </AppBar > */}
        </>

    );
}

export default NavbarAppShop;
