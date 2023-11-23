import { React, useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProgressBar from "react-scroll-progress-bar"
import { BsArrowUpSquareFill, BsGithub } from 'react-icons/bs'
import { Badge } from 'react-bootstrap';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import { Drawer, IconButton, Box, MenuItem, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useStateContext } from './context/useStateContext';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { motion } from "framer-motion"
import Modal from 'react-modal';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FaChevronCircleUp, } from 'react-icons/fa'
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

// import { GoogleLogin } from 'react-google-login';
// import { GoogleLogin } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import img from './Slider/SS23_NavContentUpdate_Accessories_FA.min.avif'
import { IoMdCloseCircle } from 'react-icons/io'
import axios from 'axios';
///////////////////////
const NavbarAppShop = () => {
    const { t, i18n } = useTranslation();
    const { handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const PathName = location.pathname
    // console.log(PathName);
    const [signed_user, setSigned_user] = useState([]);

    const state1 = useSelector(state => state.useReducer)
    const state2 = useSelector(state => state.useReducerCheckEmail)
    const dispatch = useDispatch()

    const { isMobile, setIsMobile, searchHandler, search, selectHandler, profileImg, setProfileImg,
        select, total_item, scroll, setScroll, openMenu, setOpenMenu, allDataFromMongoDb, setAllDataFromMongoDb,
        openMenuAcc, setOpenMenuAcc, email, setEmail, openMenuAccessories, setOpenMenuAccessories,
        pass, setPass } = useContext(useStateContext)

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
        allDataFromMongoDb.find(i => i.email === email) ?
            setSigned_user(allDataFromMongoDb.find(i => i.email === email))
            // setOpenModal(false)
            :
            dispatch({ type: "USER_NOT_FOUND" })

        // console.log(signed_user);
    }
    // console.log(allDataFromMongoDb)

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

    const imgHandler = async (e) => {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onloadend = () => setProfileImg(reader.result)
        reader.onerror = error => console.log(error)

    }
    // console.log(profileImg)

    return (
        <>
            <ProgressBar color="#00AE47" bgColor="#f2f2f2" height="4.1px" />
            <div className={scroll >= 2.933333396911621 ? "bg-white fixed z-20 h-14 pt-2 w-full" : 'sticky h-14 pt-2 z-20'}
                style={{ backgroundColor: "transparent" }}>

                <div className='md:hidden'>
                    <IconButton aria-label='logo' onClick={() => setIsMobile(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer open={isMobile} anchor='left' onClose={() => setIsMobile(false)}>
                        <Box m={4} p={1}>
                            <div>
                                <Box>
                                    <button onClick={() => navigate('/')} >
                                        <HomeIcon />
                                    </button>
                                </Box>
                            </div>
                            <div>
                                <Box>
                                    <button onClick={() => navigate('/AppShop')} >
                                        Home
                                    </button>
                                </Box>
                            </div>
                            <div>
                                <Box>
                                    <Tippy content="Whats News" delay={550} placement='auto-end'>
                                        <button>
                                            Whats News
                                        </button>
                                    </Tippy>
                                </Box>
                            </div>
                            <div>
                                <Box>
                                    <button onClick={() => navigate('/AppShop/products')}>
                                        <ProductionQuantityLimitsIcon />  products
                                    </button>
                                </Box>
                            </div>
                            <div>
                                <Box>
                                    <button onClick={() => navigate('/AppShop/shop')}>
                                        <ShoppingCartIcon /> <Badge pill bg="secondary">{total_item(state1.selectedItems)}</Badge>
                                    </button>
                                </Box>
                            </div>
                        </Box>
                    </Drawer>
                </div>

                <div className='relative w-[93%] mx-auto flex items-center justify-between '>
                    <div>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <button className='' onClick={() => navigate('/')} >
                                <HomeIcon />
                            </button>
                        </Box>
                    </div>

                    <div>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <button onClick={() => navigate('/AppShop')} >
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
                                transition={{ duration: 0.4 }}
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
                            <Tippy content="Whats News" delay={550} placement='auto-end'>
                                <button onClick={() => navigate('/AppShop/city')}>
                                    Whats News
                                </button>
                            </Tippy>
                        </Box>
                    </div>

                    <div onMouseEnter={() => { setOpenMenuAccessories({ open: true, arrowUP: !openMenuAccessories.arrowUP }) }}
                        onMouseLeave={() => { setOpenMenuAccessories({ open: false, arrowUP: !openMenuAccessories.arrowUP }) }}>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <button className="flex items-center gap-2">
                                Accessories  <FaChevronCircleUp style={{ transform: openMenuAccessories.arrowUP ? 'rotate(180deg)' : null }} />
                            </button>
                        </Box>
                        {openMenuAccessories.open ?
                            <motion.div
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className='absolute'>
                                    <div className='rounded-md bg-white text-black py-2 mt-3 flex gap-4 z-50'>
                                        <div>
                                            <MenuItem className='hover:text-blue-700'>
                                                Features
                                            </MenuItem>
                                            <div className="px-3 leading-9">
                                                <div><button>All Accessories</button></div>
                                                <div><button>Hats & Beanies</button></div>
                                                <div><button>Backpacks</button></div>
                                                <div><button>Scarves</button></div>
                                                <div><button>Homeware</button></div>
                                                <div><button>Socks</button></div>
                                                <div><button> Shoes</button></div>
                                                <div><button>Candles</button></div>
                                                <div><button>Face Masks</button></div>
                                            </div>
                                        </div>

                                        <div>
                                            <MenuItem className='hover:text-blue-700'>
                                                Features
                                            </MenuItem>
                                            <div className="px-3 leading-9">
                                                <div><button>New Accessories</button></div>
                                                <div><button>Best Sellers</button></div>
                                                <div><button>Cold Weather Accessories</button></div>
                                                <div><button>The Mobius Collection</button></div>
                                                <div><button>Shoes</button></div>
                                                <div><button>Gift Cards</button></div>
                                                <div><button>Mystery Bags</button></div>
                                                <div><button>Sale</button></div>
                                            </div>
                                        </div>
                                        <div>
                                            <img src={img} alt="#" width={200} className="rounded-lg mb-2" />
                                            <p> NEW ARRIVALS </p>
                                            <p className='mr-3 mb-2'>
                                                Accessories
                                                It's the little things. <br />
                                                These Earth-First accessories are here <br /> to keep your
                                                impact to a planet-friendly minimum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            : null
                        }
                    </div>


                    <div>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <button onClick={() => navigate('/AppShop/products')}>
                                <ProductionQuantityLimitsIcon />  products
                            </button>
                        </Box>
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

                    <div onMouseEnter={() => { setOpenMenuAcc({ open: true, arrowUP: !openMenuAcc.arrowUP }) }}
                        onMouseLeave={() => { setOpenMenuAcc({ open: false, arrowUP: !openMenuAcc.arrowUP }) }}>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <button className="flex items-center gap-2">
                                {/* <FaUser /> */}
                                <Avatar className='ml-2' src={signed_user.profileImg} alt='#' sx={{ width: 30, height: 30 }} />
                                Account  <FaChevronCircleUp style={{ transform: openMenuAcc.arrowUP ? 'rotate(180deg)' : null }} />
                            </button>
                        </Box>
                        {openMenuAcc.open ?
                            <motion.div
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className='absolute'>
                                    <div className='w-60 rounded-md bg-white text-black py-2 mt-3'>
                                        <div className="text-center"> Welcome to ShopCart!</div>
                                        <div className="bg-green-300 px-2 rounded-lg my-2">
                                            userName : {signed_user.email}
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
                                            {signed_user.purchased_products && <div> <Badge pill bg="secondary"> {signed_user.purchased_products} </Badge> </div>}
                                        </MenuItem>
                                    </div>
                                </div>
                            </motion.div>
                            : null
                        }
                    </div>
                    {signed_user.profileImg === null ?
                        <div>
                            <input type="file" onChange={imgHandler} name='myFile' accept='.png , .jpg' />
                            <button className='bg-white px-2 rounded-lg' onClick={() => {
                                axios.post('http://localhost:3003/postProfileImg', { email: email, img: profileImg })
                                    .then(res => console.log(res))
                            }}>
                                save photo
                            </button>
                        </div>
                        : null
                    }

                    <div>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <button onClick={() => navigate('/AppShop/shop')}>
                                <ShoppingCartIcon /> <Badge pill bg="secondary">{total_item(state1.selectedItems)}</Badge>
                            </button>
                        </Box>
                    </div>

                    {/* <div>
                        <div className="flex gap-3 mt-2">
                            <button onClick={() => i18n.changeLanguage('en')}>English</button>
                            <button onClick={() => i18n.changeLanguage('de')}>Deutsch</button>
                        </div>
                        <div>
                            <h1 className="text-sm">{t('welcome')}</h1>
                        </div>
                    </div> */}
                </div>
            </div>
            <ToastContainer />
            {scroll >= 788.7999877929688 &&
                <div className="fixed right-3 bottom-24 z-20 text-gray-500 duration-300">
                    <Tippy content="scroll to top" delay={550} placement='top'>
                        <button>
                            <BsArrowUpSquareFill size={34} className='rounded-xl'
                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
                        </button>
                    </Tippy>
                </div>
            }
        </>
    )
}

export default NavbarAppShop;