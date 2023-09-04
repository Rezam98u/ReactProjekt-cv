import { React, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageScrollProgressBar from "react-page-scroll-progress-bar";
import { BsGoogle, BsGithub } from 'react-icons/bs'
import { Badge } from 'react-bootstrap';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Drawer, Toolbar, IconButton, Box, TextField, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useStateContext } from './context/useStateContext';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { motion } from "framer-motion"
import Modal from 'react-modal';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FaChevronCircleDown, FaChevronCircleUp, FaUser } from 'react-icons/fa'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
// import { GoogleLogin } from 'react-google-login';
// import { GoogleLogin } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




import { IoMdCloseCircle } from 'react-icons/io'
import axios from 'axios';
///////////////////////
const NavbarAppShop = () => {
    const { handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const PathName = location.pathname
    // console.log(PathName);
    const [signed_user, setSigned_user] = useState([]);

    const state1 = useSelector(state => state.useReducer)
    const state2 = useSelector(state => state.useReducerCheckEmail)
    const dispatch = useDispatch()

    const { isMobile, setIsMobile, searchHandler, search, selectHandler,
        select, total_item, scroll, setScroll, openMenu, setOpenMenu, allDataFromMongoDb, setAllDataFromMongoDb,
        openMenuAcc, setOpenMenuAcc, email, setEmail, pass, setPass } = useContext(useStateContext)

    useEffect(() => {
        const onScroll = () => {
            const scrollY = window.scrollY;
            setScroll(scrollY)
        };
        window.addEventListener("scroll", onScroll);
    }, []);

    const onSubmit_signUp = () => {
        allDataFromMongoDb.find(i => i.email === email) ? dispatch({ type: "USER_HAS_ALREADY_SINGED_UP" }) :
            axios.post('http://localhost:3003/postUser',
                { email: email, pass: pass }).then(res => console.log(res))
        // setOpenModal(false);
        // axios.post('http://localhost:3003/register',
        //     { email: email, pass: pass }).then((res) => console.log(res))
    }
    const onSubmit_login = () => {
        allDataFromMongoDb.find(i => i.email === email) ? setOpenModal(false) :
            dispatch({ type: "USER_NOT_FOUND" })
        setSigned_user(allDataFromMongoDb.find(i => i.email === email))
        // console.log(signed_user);
    }
    // console.log(dataFromMongoDb)

    ////Google Authentication
    const responseMessage = res => {
        const decoded = jwtDecode(res?.credential)
        setEmail(decoded?.email)
        // const name = decoded?.name
        // axios.post('http://localhost:3003/postUserGoogle',
        //     { email: email }).then(res => console.log(res))
        // const token = res?.tokenId;
        // const googleId = res?.googleId;
        // const result = { email, name, token, googleId }
        // console.log(result)
        toast.success(`welcome to ShopCart ${email}`)
        setOpenModal(false);
    }
    const errorMessage = (error) => { console.log(error) }

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
                                <button className='btn btn-success Btn_out' onClick={() => navigate('/')} >
                                    <HomeIcon />
                                </button>
                            </Box>
                            <Box m={1}>
                                <button className='btn btn-primary Btn_out' onClick={() => navigate('/products')}>
                                    <ProductionQuantityLimitsIcon />  products
                                </button>
                            </Box>
                            <Box m={1}>
                                <button className='btn btn-success Btn_out' onClick={() => navigate('/products/shop')}>
                                    <ShoppingCartIcon /> <Badge pill bg="secondary">{total_item(state1.selectedItems)}</Badge>
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
                                Sing up / Sign in
                            </button>
                                <Modal isOpen={openModal}
                                    // onAfterOpen={afterOpenModal}
                                    onRequestClose={() => setOpenModal(false)}
                                    style={customStyles}
                                // contentLabel="Example Modal"
                                >
                                    <div>
                                        <button className="flex gap-2 items-center bg-red-400 px-3 py-2 mb-2 rounded-lg" onClick={() => setOpenModal(false)}>
                                            <IoMdCloseCircle size={19} /> close
                                        </button>
                                    </div>

                                    <div className="flex gap-4">
                                        <div>
                                            <div className="title"> sign up </div>
                                            <form onSubmit={handleSubmit(onSubmit_signUp)}>
                                                <div className="input-group">
                                                    <label htmlFor="email"> email </label>
                                                    <input type="email" name="email" id="email" placeholder="email" onChange={i => setEmail(i.target.value)} />
                                                </div>
                                                <div className="input-group">
                                                    <label htmlFor="password">Password</label>
                                                    <input type="password" name="password" id="password" onChange={i => setPass(i.target.value)} />
                                                    {/* <div className="forgot">
                                                        <a rel="noopener noreferrer" href="#"> Forgot Password ? </a>
                                                    </div> */}
                                                </div>
                                                <button type='submit' className="sign mt-4"> Sign up </button>
                                                {state2.emailFind && <div className="text-center my-1 text-red-400 font-bold"> {state2.massage} </div>}
                                            </form>
                                        </div>

                                        <div>
                                            <div className="title"> sign in </div>
                                            <form onSubmit={handleSubmit(onSubmit_login)}>
                                                <div className="input-group">
                                                    <label htmlFor="email"> email </label>
                                                    <input type="email" name="email" id="email" placeholder="email" onChange={i => setEmail(i.target.value)} />
                                                </div>
                                                <div className="input-group">
                                                    <label htmlFor="password">Password</label>
                                                    <input type="password" name="password" id="password" onChange={i => setPass(i.target.value)} />
                                                    {/* <div className="forgot">
                                                        <a rel="noopener noreferrer" href="#"> Forgot Password ? </a>
                                                    </div> */}
                                                </div>
                                                <div>
                                                    <button type='submit' className="sign mt-4"> Sign in </button>
                                                </div>
                                                {!state2.emailFind && <div className="text-center my-1 text-red-400 font-bold"> {state2.massage} </div>}
                                                <div className="social-message">
                                                    <div className="line"></div>
                                                    <div className="message"> Login with social accounts </div>
                                                    <div className="line"></div>
                                                </div>
                                                <div className="flex items-center justify-center gap-3 my-2">
                                                    <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
                                                    <button aria-label="Log in with GitHub" className="icon">
                                                        <BsGithub size={24} />
                                                    </button>
                                                </div>
                                            </form>
                                        </div>

                                        {/* <div className="signup"> Don't have an account?
                                            <button className="text-white ml-2"> Sign up </button>
                                        </div> */}
                                    </div>
                                </Modal>
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
                                        <div className='flex gap-3 my-2'>
                                            <div className="bg-red-500 px-2 rounded-lg">
                                                userName : {email}
                                            </div>
                                        </div>
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
                                            <div className="mr-4"> Payment </div>
                                            {signed_user.purchased_products && <div>
                                                <Badge pill bg="secondary">
                                                    {signed_user.purchased_products} </Badge>
                                            </div>}
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
                                <ShoppingCartIcon /> <Badge pill bg="secondary">{total_item(state1.selectedItems)}</Badge>
                            </button>
                        </Box>
                    </div>
                </div>
            </Toolbar >
            {/* </AppBar > */}
            <ToastContainer />
        </>

    );
}

export default NavbarAppShop;