import { React, useEffect, useState, useRef } from 'react';
import { AppBar, duration } from '@mui/material';

// import HeroSection from './HeroSection';
import HomeIcon from '@mui/icons-material/Home';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '@mui/material/Button';
import img from "../img/v617batch2-kul-01-technology.jpg"
import img_digitale_nomade from "../img/digitalernomade-984x540.jpg"
import TextField from '@mui/material/TextField';
// import Slider from "./Slider"
import { useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Typewriter } from 'react-simple-typewriter'

import { motion } from "framer-motion"
// import { number } from 'prop-types';
///////////////////////////////////////////////////////

// const useMountEffect = fn => useEffect(fn, []);

const Programmer = () => {
    const navigate = useNavigate()

    const [openMenu, setOpenMenu] = useState({ open: false, arrowUP: false });
    const [openMenu_2, setOpenMenu_2] = useState({ open: false, arrowUP: false });
    const [openMenu_4, setOpenMenu_4] = useState({ open: false, arrowUP: false });
    const [numCard, setNumCard] = useState();

    useEffect(() => {
        // let winScroll = window.scrollY
        console.log(window.scrollY)
        // window.scrollTo(0, 0);
        // executeScroll()
        // console.log('s');
    }, []);

    // const executeScroll = () => myRef.current.scrollIntoView()

    const executeScroll = () => scrollToRef.current.scrollIntoView()
    const scrollToRef = useRef(null)
    // useMountEffect(executeScroll); // Scroll on mount

    ////
    const ScrollToyolov8 = () => yolov8.current.scrollIntoView()
    const yolov8 = useRef(null)
    ////
    const ScrollToDetectType = () => ToDetectType.current.scrollIntoView()
    const ToDetectType = useRef(null)
    ////
    const ScrollToNavbar = () => ToNavbar.current.scrollIntoView()
    const ToNavbar = useRef(null)
    ////
    const ScrollToPython = () => ToPython.current.scrollIntoView()
    const ToPython = useRef(null)
    ////
    const ScrollToC = () => ToC.current.scrollIntoView()
    const ToC = useRef(null)
    ////////////////////////////////////////////////
    const [detectOn, setDetectOn] = useState(false);
    const [detectedType, setDetectedType] = useState('');
    const detectDevice = () => {
        setDetectOn(true) &&
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ?
            setDetectedType('Mobile') :
            setDetectedType('Desktop')
    }

    /////////////////////// connect to metamask ////////////////////////
    const connectWallet = async () => {
        if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
            try {
                /* MetaMask is installed */
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                // setWalletAddress(accounts[0]);
                console.log(accounts[0]);
            } catch (err) {
                console.error(err.message);
            }
        } else {
            /* MetaMask is not installed */
            console.log("Please install MetaMask");
        }
    };

    ///////////////////////////////////////////////
    const ToPad_your_card = (str) => str
        .slice(-4)
        .padStart(str.length, "*")

    /////////// random hexCode ////////////////
    const [hex, setHex] = useState('#' + (Math.random() * 0xFFFFFF << 0).toString(16));
    const hex1 = '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
    // console.log(hex1);

    // console.log(winScroll)

    ///////////////////////////////////////////////
    return (
        <>
            <AppBar style={{
                background: window.scrollY >= 950.4000244140625 ? 'black' : "transparent"
                , boxShadow: 'none'
            }}>
                <div className='flex justify-around py-3'>
                    <Button variant="outlined" onClick={() => navigate('/')}>
                        <HomeIcon />  Home
                    </Button>

                    {/* <div onClick={executeScroll} >
                        <button> Scroll </button>
                    </div> */}


                    <div onMouseEnter={() => { setOpenMenu({ open: !openMenu.open, arrowUP: !openMenu.arrowUP }) }} className='relative'>
                        <Button>
                            <p className='hover:text-green-400'> Magazine </p>
                            <KeyboardArrowUpIcon style={{ transform: openMenu.arrowUP ? 'rotate(180deg)' : null }} />
                            {/* <KeyboardArrowUpIcon style={{ transform: 'rotate(180deg)' }} /> */}
                        </Button>
                        {openMenu.open ?
                            <div className='absolute top-9 left-0  bg-white text-black px-1 py-2 rounded-md'>
                                <div className='border-l-4 rounded-md mx-2'>
                                    <MenuItem onClick={executeScroll} className='w-56 hover:text-blue-700' >
                                        Arbeit als digitaler Nomade
                                    </MenuItem>
                                    <MenuItem onClick={ScrollToyolov8} className='w-56 hover:text-blue-700' >
                                        What is YoLo V8
                                    </MenuItem>
                                </div>
                            </div>
                            : null
                        }
                    </div>

                    <div onMouseEnter={() => { setOpenMenu_2({ open: !openMenu_2.open, arrowUP: !openMenu_2.arrowUP }) }} className='relative' >
                        <Button>
                            <p className='hover:text-green-400'> programming languages</p>
                            <KeyboardArrowUpIcon style={{ transform: openMenu_2.arrowUP ? 'rotate(180deg)' : null }} />
                        </Button>
                        {
                            openMenu_2.open ?
                                <div className='absolute top-9 left-0  bg-white text-black px-1 py-2 rounded-md'>
                                    <MenuItem className='w-56 hover:text-blue-700' onClick={ScrollToPython}>  Python (AI Programming)</MenuItem>
                                    <MenuItem className='w-56 hover:text-blue-700' onClick={ScrollToC}>  C# </MenuItem>
                                    <MenuItem className='w-56 hover:text-blue-700' >  Go </MenuItem>
                                </div>
                                : null
                        }
                    </div>

                    <div>
                        <Button variant="outlined" onClick={connectWallet}>
                            <p className='hover:text-green-400'> Connect to Wallet </p>
                        </Button>
                    </div>

                    <div onMouseEnter={() => { setOpenMenu_4({ open: !openMenu_4.open, arrowUP: !openMenu_4.arrowUP }) }} className='relative'>
                        <Button>
                            <p className='hover:text-green-400'> more </p>
                            <KeyboardArrowUpIcon style={{ transform: openMenu_4.arrowUP ? 'rotate(180deg)' : null }} />
                        </Button>
                        {openMenu_4.open ?
                            <div className='absolute top-9 left-0 bg-white text-black px-1 py-2 rounded-md'>
                                <div className='border-l-4 rounded-md mx-2'>
                                    {/* <MenuItem className='w-56 hover:text-blue-700'>
                                        to pad your card
                                    </MenuItem> */}
                                    <MenuItem onClick={ScrollToDetectType} className=' hover:text-blue-700'>
                                        show detail
                                    </MenuItem>
                                </div>
                            </div>
                            : null
                        }
                    </div>
                </div>
            </AppBar >


            <div className='relative'>
                <img className='bg-no-repeat bg-cover bg-center' src={img} alt="" />
                <div className='absolute top-36 left-5 p-3 rounded-xl bg-slate-400 z-10'>
                    <div>
                        <p className='text-lg font-bold'>
                            Programming is actually <Typewriter
                                words={['a Life Style', 'a big dream']}
                                loop={2}
                                typeSpeed={70}
                                deleteSpeed={40}
                                delaySpeed={1500}
                            />
                        </p>
                    </div>
                    <div>
                        <p>
                            <Typewriter words={["Make grate change in your Life with Programming"]} loop={2} />
                        </p>
                    </div>
                    {/* <p className='text-lg'> Programming is actually a Life Style </p>  */}
                    {/* <p className='text-lg'> Make grate change in your Life with Programming </p>  */}
                </div>
            </div>

            <div className='bg-green-400  text-center w-4/5 mx-auto my-2 py-2 rounded-lg'>
                <motion.div
                    style={{ width: '30%' }}
                    initial={{ scale: 0 }}
                    animate={{ x: 200, scale: 1.5 }}
                    transition={{ duration: 4, delay: 0.5 }}>
                    Programming
                </motion.div>
            </div>

            <div ref={ToPython} className='flex justify-center'>
                <div className='w-4/5 border-4  rounded-xl p-8 m-4'>
                    <p className='text-2xl text-start pb-2'> What is Python? </p>
                    <p>
                        <span className='bg-blue-300 rounded-md px-1 py-1'>
                            Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis.
                            Python is a general-purpose language, meaning it can be used to create a variety of different programs and isn’t specialized for any specific problems.
                        </span>
                        This versatility, along with its beginner-friendliness, has made it one of the most-used programming languages today.
                        A survey conducted by industry analyst firm RedMonk found that it was the second-most popular programming language among developers in 2021.
                    </p>
                </div>
            </div>


            <div ref={ToC} className='flex justify-center'>
                <div className='w-4/5 border-4 rounded-xl p-8 m-4'>
                    <p className='text-2xl text-start pb-2'> What is C#? </p>
                    <p>
                        <span className='bg-blue-300 rounded-md px-1 py-1'>
                            C# (pronounced "See Sharp") is a modern, object-oriented, and type-safe programming language. C# enables developers to build many types of secure and robust applications that run in .NET. C# has its roots in the C family of languages and will be immediately familiar to C, C++, Java, and JavaScript programmers.
                        </span>
                        This tour provides an overview of the major components of the language in C# 11 and earlier. If you want to explore the language through interactive examples, try the introduction to C# tutorials. <br />
                        C# is an object-oriented, component-oriented programming language. C# provides language constructs to directly support these concepts, making C# a natural language in which to create and use software components. Since its origin, C# has added features to support new workloads and emerging software design practices. At its core, C# is an object-oriented language. You define types and their behavior.
                    </p>
                </div>
            </div>


            <div ref={scrollToRef} className='flex justify-center '>
                <div style={{ background: `${hex}` }} className='w-4/5 border-4 rounded-xl p-8 m-4 '>
                    <button className='bg-slate-200 px-3 py-1 mb-3 rounded-xl' onClick={() => setHex(hex1)}>
                        click to change color
                    </button>
                    <p className='text-2xl text-center pb-4 '>
                        Living like a digital nomad - that's how it's done!
                    </p>
                    <div className='py-4'>
                        <img className=' w-full bg-no-repeat bg-cover bg-center rounded-md' src={img_digitale_nomade} alt="" />
                    </div>
                    <p className='py-2'>
                        Living and working everywhere - just wishful thinking or really feasible? Live like a digital nomad, So, as an entrepreneur or even an employee who uses almost exclusively digital technologies to do his work and at the same time leads a rather location-independent or multi-local life... Nothing is impossible!
                    </p>
                </div>
            </div>


            <div ref={yolov8} className='flex justify-center'>
                <div className='w-4/5 border-4 rounded-xl p-8 m-4'>
                    <p className='text-2xl text-start pb-2'> What is YoLo v8 ? </p>
                    <p>
                        Ultralytics YOLOv8 is the latest version of the YOLO (You Only Look Once) object detection and image segmentation model developed by Ultralytics.
                        This page serves as the starting point for exploring the various resources available to help you get started with YOLOv8 and understand its features and capabilities.

                        {/* <span className='bg-blue-300 rounded-md px-1 py-1'>
                                    C# (pronounced "See Sharp") is a modern, object-oriented, and type-safe programming language. C# enables developers to build many types of secure and robust applications that run in .NET. C# has its roots in the C family of languages and will be immediately familiar to C, C++, Java, and JavaScript programmers.
                                </span>
                                This tour provides an overview of the major components of the language in C# 11 and earlier. If you want to explore the language through interactive examples, try the introduction to C# tutorials. <br />
                                C# is an object-oriented, component-oriented programming language. C# provides language constructs to directly support these concepts, making C# a natural language in which to create and use software components. Since its origin, C# has added features to support new workloads and emerging software design practices. At its core, C# is an object-oriented language. You define types and their behavior. */}
                    </p>
                </div>
            </div>

            <div ref={ToDetectType} className='flex justify-center'>
                <div className='w-4/5 border-4 rounded-xl p-8 m-4'>
                    <p className='text-2xl text-start '> show your details </p>
                    <p className='text-md'> for example : login with mobile or laptop </p>
                    <div>
                        <button onClick={detectDevice} className='p-1 px-3 rounded-lg bg-slate-400 text-white mt-3'>
                            click to show
                        </button>
                        {detectOn &&
                            <p className='text-lg mt-1'>
                                Website is showed in {detectedType}
                            </p>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Programmer;
