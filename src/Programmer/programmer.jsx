import { React, useEffect, useState, useRef, useContext } from 'react';
import { AppBar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import img from "../img/ales-nesetril-Im7lZjxeLhg-unsplash.jpg"
import img_digitale_nomade from "../img/digitalernomade-984x540.jpg"
import img_neon from '../img/Frame 3.svg'
import { useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import { Typewriter } from 'react-simple-typewriter'
import searchIcon from '../img/8666693_search_icon.png'
import { AiFillGithub } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import ProgressBar from "react-scroll-progress-bar";
import { motion, useScroll } from "framer-motion"
import img_p from '../img/Layer.png'
import img_p2 from '../img/Layer_1_2-removebg-preview (1).png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import LazyImage from '../lazyImage';
import { fadeIn } from '../utils/motion';

///Context 
import { AppContext } from "../ContextApp"

// import { number } from 'prop-types';
///////////////////////////////////////////////////////
const Programmer = () => {
    const navigate = useNavigate()
    const { scrollYProgress } = useScroll();

    const { scroll, setScroll } = useContext(AppContext);

    const [openMenu, setOpenMenu] = useState({ open: false, arrowUP: false });
    const [openMenu_2, setOpenMenu_2] = useState({ open: false, arrowUP: false });
    const [openMenu_4, setOpenMenu_4] = useState({ open: false, arrowUP: false });
    const [numCard, setNumCard] = useState();
    const [moveMotion, setMoveMotion] = useState(false);

    const [cursorY, setCursorY] = useState();
    const [cursorX, setCursorX] = useState();

    const [lineWidth, setLineWidth] = useState('100%');


    useEffect(() => {
        AOS.init();
        AOS.refresh();
        const onScroll = () => {
            const scrollY = window.scrollY;
            setScroll(scrollY)
        };
        window.addEventListener("scroll", onScroll);

        window.addEventListener("mousemove", (e) => {
            setCursorY(e.pageY)
            setCursorX(e.pageX)
        })

        const timer = setTimeout(() => { setLineWidth('0%') }, 2000)
        return () => clearTimeout(timer);

    }, []);

    // console.log(scroll);
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
                background: scroll >= 2.933333396911621 ? '#FFFFFF' : "transparent", boxShadow: 'none', zIndex: 5, height: "62px"
            }}>
                <ProgressBar color="#F71AB7" bgColor="#f2f2f2" height="4.1px" zIndex="2" />

                <div className='w-[90%] flex justify-between mx-auto py-4 items-center'>
                    <div className={scroll === 0 && 'relative rounded-lg flex hover:bg-gray-700'}>
                        <button className={scroll >= 2.933333396911621 ? "scrollChange flex" : "flex px-2"}
                            onClick={() => navigate('/')}>
                            <HomeIcon />
                            <p> Home </p>
                        </button>
                    </div>

                    <div onMouseEnter={() => { setOpenMenu({ open: true, arrowUP: !openMenu.arrowUP }) }}
                        onMouseLeave={() => { setOpenMenu({ open: false, arrowUP: !openMenu.arrowUP }) }}
                        className={scroll === 0 && 'relative rounded-lg hover:bg-gray-700'}
                    >
                        <button className={scroll >= 2.933333396911621 ? "scrollChange flex" : "flex px-2"}>
                            <p> Magazine </p>
                            <KeyboardArrowUpIcon style={{ transform: openMenu.arrowUP ? 'rotate(180deg)' : null }} />
                            {/* <KeyboardArrowUpIcon style={{ transform: 'rotate(180deg)' }} /> */}
                        </button>
                        {openMenu.open ?
                            <motion.div
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className='absolute bg-white text-black px-1 py-2 rounded-md'>
                                    <div className='border-l-4 rounded-md mx-2'>
                                        <MenuItem onClick={executeScroll} className='w-56 hover:text-blue-700' >
                                            Arbeit als digitaler Nomade
                                        </MenuItem>
                                        <MenuItem onClick={ScrollToyolov8} className='w-56 hover:text-blue-700' >
                                            What is YoLo V8
                                        </MenuItem>
                                    </div>
                                </div>
                            </motion.div>
                            : null
                        }
                    </div>

                    <div onMouseEnter={() => { setOpenMenu_2({ open: true, arrowUP: !openMenu_2.arrowUP }) }}
                        onMouseLeave={() => { setOpenMenu_2({ open: false, arrowUP: !openMenu_2.arrowUP }) }}
                        className={scroll === 0 && 'relative rounded-lg hover:bg-gray-700'}
                    >
                        <button className={scroll >= 2.933333396911621 ? "scrollChange flex" : "flex px-2"}>
                            <p> Programming Languages </p>
                            <KeyboardArrowUpIcon style={{ transform: openMenu_2.arrowUP ? 'rotate(180deg)' : null }} />
                        </button>
                        {
                            openMenu_2.open ?
                                <motion.div
                                    initial={{ scaleY: 0 }}
                                    animate={{ scaleY: 1 }}
                                    transition={{ duration: 0.3 }}
                                    tra
                                >
                                    <div className='absolute bg-white text-black px-1 py-2 rounded-md w-56'>
                                        <MenuItem className='hover:text-blue-700' onClick={ScrollToPython}>  Python (AI Programming)</MenuItem>
                                        <MenuItem className='hover:text-blue-700' onClick={ScrollToC}>  C# </MenuItem>
                                        <MenuItem className='hover:text-blue-700' >  Go </MenuItem>
                                    </div>
                                </motion.div>
                                : null
                        }
                    </div>

                    <div className={scroll === 0 && 'relative rounded-lg hover:bg-gray-700'}>
                        <button className={scroll >= 2.933333396911621 ? "scrollChange flex px-2" : "flex px-2"}
                            onClick={connectWallet}>
                            <p> Connect to Wallet </p>
                        </button>
                    </div>

                    <div onMouseEnter={() => { setOpenMenu_4({ open: true, arrowUP: !openMenu_4.arrowUP }) }}
                        onMouseLeave={() => { setOpenMenu_4({ open: false, arrowUP: !openMenu_4.arrowUP }) }}
                        className={scroll === 0 && 'relative rounded-lg hover:bg-gray-700'}
                    >
                        <button className={scroll >= 2.933333396911621 ? "scrollChange flex px-2" : "flex px-2"}>
                            <p> more </p>
                            <KeyboardArrowUpIcon style={{ transform: openMenu_4.arrowUP ? 'rotate(180deg)' : null }} />
                        </button>
                        {openMenu_4.open ?
                            <motion.div
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ duration: 0.3 }}
                                tra
                            >
                                <div className='absolute  bg-white text-black px-1 py-2 rounded-md'>
                                    <div className='border-l-4 rounded-md mx-2'>
                                        {/* <MenuItem className='w-56 hover:text-blue-700'>
                                        to pad your card
                                    </MenuItem> */}
                                        <MenuItem onClick={ScrollToDetectType} className=' hover:text-blue-700'>
                                            show detail
                                        </MenuItem>
                                    </div>
                                </div>
                            </motion.div>
                            : null
                        }
                    </div>
                </div>
            </AppBar>

            {/* Hero Section */}
            <div className={scroll === 0 ? 'Hero_Section relative' : 'relative'}>
                {/* <img className='bg-no-repeat bg-cover bg-center' src={img} alt="" /> */}
                <div className='w-full h-screen bg-black'>
                    {/* <img src={img} alt="" /> */}
                    <div className='flex gap-3 absolute bottom-16 left-5 text_hero'>
                        <div className="bg-white w-16 h-16 rounded-lg"></div>
                        <div className="bg-white w-16 h-16 rounded-lg"></div>
                        <div className="bg-white w-16 h-16 rounded-lg"></div>
                    </div>

                    {/* <div className='absolute top-20 right-5 '>
                        <div className='flex items-center gap-1'>
                            <div className="hero"></div>
                            <div className="hero"></div>
                            <div className='hero'></div>
                            <div className="hero"></div>
                            <div className="hero"></div>
                            <div className="hero"></div>
                            <div className="hero"></div>
                            <div className="hero"></div>
                            <div className="hero"></div>
                            <div className='hero'></div>
                            <div className="hero"></div>
                            <div className="hero"></div>
                            <div className="hero"></div>
                            <div className="hero"></div>
                        </div>
                    </div> */}

                    {/* <div>
                        <motion.div className="absolute bottom-56 special_color text_hero w-full programming"
                            initial={{ x: '-100%' }} animate={{ x: '100%', width: lineWidth }}
                            transition={{ duration: 4, loop: Infinity, repeatDelay: 1 }}
                        >
                            <div className='font-bold '> </div>
                        </motion.div>
                    </div> */}

                    <div className='absolute top-72 left-10 p-3 rounded-xl z-3 text_hero'>
                        <div>
                            <p className='text-xl font-bold text-white'>
                                Programming is actually <Typewriter
                                    words={['a big dream', 'a Life Style']}
                                    loop={2}
                                    typeSpeed={72}
                                    deleteSpeed={45}
                                    delaySpeed={1500}
                                />
                            </p>
                        </div>
                        <div>
                            <p className='text-white'>
                                <Typewriter words={["Make grate change in your Life with Programming"]} loop={2} typeSpeed={72} />
                            </p>
                        </div>
                    </div>

                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.8 }}
                        className='absolute bottom-1 right-9 '>
                        <img src={img_neon} alt="" width={245} />
                    </motion.div>


                    <motion.img
                        width={"3%"}
                        className=" absolute bottom-5 left-1/2"
                        src='/img/scroll.png'
                        initial={{ y: -11, opacity: 1 }}
                        animate={{ y: 30, opacity: 0 }}
                        transition={{ duration: 2.9, repeat: Infinity }}
                    />

                    {/* <img width="512" height="512" src="https://img.icons8.com/glyph-neue/512/000000/search--v1.png" alt="search--v1"
                    className='cursor' style={{ left: cursorX + 'px', top: cursorY + 'px' }}
                /> */}
                    {scroll === 0 && <img src={searchIcon} alt="" className='cursor' style={{ left: cursorX + 'px', top: cursorY + 'px' }} />}

                    {/* {scroll === 0 && <div className='cursor' style={{ left: cursorX + 'px', top: cursorY + 'px' }} />} */}
                </div>
            </div>

            <div className="w-[90%] mx-auto">

                <div className=' mx-auto my-20 flex justify-end rounded-lg'>
                    <div>
                        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 2 }} >
                            <img className='z-20 ml-4' width={230} height={230} src={img_p} alt='#' />
                        </motion.div>
                        <motion.div initial={{ y: 80 }} whileInView={{ y: -12 }} transition={{ duration: 2 }}>
                            <img className='z-10' width={320} height={320} src={img_p2} alt='#' />
                        </motion.div>
                    </div>
                </div>

                {/* <div className='bg-green-400 text-center w-4/5 mx-auto my-2 py-2 rounded-lg'>
                <motion.div
                    style={{ width: '30%' }}
                    initial={{ scale: 0 }}
                    // animate={{ x: 200, scale: 1.5 }}
                    transition={{ duration: 2 }}
                    whileInView={{ x: 200, scale: 1.5 }}
                >
                    Programming
                </motion.div>
            </div> */}


                <div ref={ToPython} className='flex justify-center'
                    data-aos='fade-up'
                    // data-aos-easing="linear"
                    data-aos-duration="1100" >

                    <div className='border-4 rounded-xl p-8 my-4'>
                        <p className='text-2xl text-start pb-2'> What is Python? </p>
                        <p className="break-normal">
                            <span className='bg-blue-300 rounded-md px-1 py-1'>
                                Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis.
                                Python is a general-purpose language, meaning it can be used to create a variety of different programs and isn’t specialized for any specific problems.
                            </span>
                            This versatility, along with its beginner-friendliness, has made it one of the most-used programming languages today.
                            A survey conducted by industry analyst firm RedMonk found that it was the second-most popular programming language among developers in 2021.
                        </p>
                    </div>
                </div>


                <div ref={ToC} className='flex justify-center' data-aos='fade-up' data-aos-duration="1100">
                    <div className='border-4 rounded-xl p-8 my-4'>
                        <p className='text-2xl text-start pb-2'> What is C#? </p>
                        <p className="break-normal">
                            <span className='bg-blue-300 rounded-md px-1 py-1'>
                                C# (pronounced "See Sharp") is a modern, object-oriented, and type-safe programming language. C# enables developers to build many types of secure and robust applications that run in .NET. C# has its roots in the C family of languages and will be immediately familiar to C, C++, Java, and JavaScript programmers.
                            </span>
                            This tour provides an overview of the major components of the language in C# 11 and earlier. If you want to explore the language through interactive examples, try the introduction to C# tutorials. <br />
                            C# is an object-oriented, component-oriented programming language. C# provides language constructs to directly support these concepts, making C# a natural language in which to create and use software components. Since its origin, C# has added features to support new workloads and emerging software design practices. At its core, C# is an object-oriented language. You define types and their behavior.
                        </p>
                    </div>
                </div>


                <div ref={scrollToRef} className='flex justify-center' data-aos='fade-up' data-aos-duration="1100">
                    <div style={{ background: `${hex}` }} className='border-4 rounded-xl p-8 my-4'>
                        <motion.div
                            variants={fadeIn("up", 'spring', .4)}
                            initial='hidden'
                            whileInView="show"
                        >
                            <button className='bg-slate-200 px-3 py-1 mb-3 rounded-xl' onClick={() => { setHex(hex1); setMoveMotion(!moveMotion) }}>
                                click to change color
                            </button>
                        </motion.div>
                        <div className='text-2xl text-center pb-4 '>
                            Living like a digital nomad - that's how it's done!
                        </div>
                        <div className='py-4 flex justify-center'>
                            <LazyImage src={img_digitale_nomade} width={"700px"} alt="#" className='rounded-md ' />
                        </div>
                        <div className='py-2 break-all'>
                            Living and working everywhere - just wishful thinking or really feasible? Live like a digital nomad, So, as an entrepreneur or even an employee who uses almost exclusively digital technologies to do his work and at the same time leads a rather location-independent or multi-local life... Nothing is impossible!
                        </div>
                    </div>
                </div >


                <div ref={yolov8} className='flex justify-center' data-aos='fade-up' data-aos-duration="1100">
                    <div className='border-4 rounded-xl p-8 my-4'>
                        <p className='text-2xl text-start pb-2'> What is YoLo v8 ? </p>
                        <p className="break-normal">
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

                <div ref={ToDetectType} className='flex justify-center' data-aos='fade-up' data-aos-duration="1100">
                    <div className=' w-full border-4 rounded-xl p-8'>
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
            </div>

            {/* Footer */}
            <div className='flex w-full footer justify-center mt-5 bg-slate-200'>
                <div className='w-[90%] flex justify-between mx-auto my-4'>
                    <div className='flex gap-5 items-center'>
                        <p> © 2023, Strapi </p>
                        <p>License</p>
                        <p>Terms</p>
                        <p>Privacy</p>
                    </div>

                    <div className='flex gap-6 items-center'>
                        <div className='text-lg'> Join us on </div>

                        <div className='text-xl hover:text-black'> <AiFillGithub /> </div>
                        <div className='text-xl hover:text-blue-600'> <BsDiscord /> </div>
                        <div className='text-xl hover:text-blue-400'> <BsTwitter /> </div>
                        <div className='text-xl hover:text-blue-800'> <BsFacebook /> </div>
                        <div className='text-xl hover:text-blue-700'> <BsLinkedin /> </div>
                        <div className='text-xl hover:text-fuchsia-500'> <BsInstagram /> </div>
                        <div className='text-xl hover:text-red-500'> <BsYoutube /> </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Programmer;
