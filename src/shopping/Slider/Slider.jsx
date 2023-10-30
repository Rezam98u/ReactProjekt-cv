import { React, useContext, useState } from 'react';
import { logoSlider, gadgets, fashion, fitness, imgSlider, imgSlider3 } from '../Slider/Data_slider'
import { FaAmazon, FaApplePay, FaCcAmex, FaCcDiscover, FaCcStripe, FaCcVisa, FaChevronLeft, FaChevronRight, FaGooglePay, FaPaypal } from 'react-icons/fa'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { AiOutlineMinus, AiOutlinePlus, AiTwotoneCloud } from "react-icons/ai"

// import { TextField } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import { useStateContext } from '../context/useStateContext';
// import Carousel from 'react-elastic-carousel';
// import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'
import "./slider.module.scss"
// import { useEffect } from 'react';
import { motion } from "framer-motion"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from 'react-redux';
import img from './HomePage_03_Sustainability_Transparency_Hero_Image_Desktop_FA_2.webp'
import img_gift from "../img/yellow-gift-with-red-tie-removebg-preview.png"
import { IoIosWater } from 'react-icons/io';
import Tippy from '@tippyjs/react';
import { useNavigate } from 'react-router-dom';
// import img1 from './scribble_gif_croped.webp'
// import img2 from './trash_talk_full_en.webp'
import img3 from '../img/iconshome-07_300x.avif'
import LazyImage from '../../lazyImage';


import '../App_shop.scss'
///////////////////////
const SliderComponent = () => {
    const navigate = useNavigate();

    const [sliderRef, setSliderRef] = useState(null)
    const [sliderRef2, setSliderRef2] = useState(null)
    const [sliderRef3, setSliderRef3] = useState(null)
    // const [gadgetsShow, setGadgetsShow] = useState(Boolean)
    // const [fashionShow, setFashionShow] = useState(Boolean)

    const state = useSelector(state => state.useReducerShow)
    const state_img2 = useSelector(state => state.useReducerShow2)
    const state_img3 = useSelector(state => state.useReducerShow3)
    const dispatch = useDispatch()

    const { FAQ, isCollapse, setIsCollapse, scroll } = useContext(useStateContext);



    





    /// old Method
    // const length = dataSlider.length
    // const [current, setCurrent] = useState(0);
    // const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1)
    // const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1)
    // if (!Array.isArray(dataSlider) || length <= 0) {
    //     return null
    // }
    // useEffect(() => {
    //     resetTimeout();
    //     timeoutRef.current = setTimeout(
    //         () =>
    //         setCurrent((prevIndex) =>
    //                 prevIndex === colors.length - 1 ? 0 : prevIndex + 1),
    //         delay);
    //     return () => {
    //         resetTimeout();
    //     };
    // }, [index]);

    const settings_logo = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3100,
    };

    const settings_img = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 4000,

    };

    const settings_img3 = {
        arrows: true,
        dots: false,
        infinite: false,
        speed: 450,
        slidesToShow: 5,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 4000,
    };

    const toggleCollapse = id => {
        setIsCollapse(prevState => ({
            ...prevState,
            [id]: !prevState[id],
        }))
    }

    return (
        <>
            {/* Section Slider 1  */}
            <div className='relative'>
                <div>
                    <button onClick={sliderRef2?.slickPrev}
                        className="absolute bottom-16 left-7 z-10 bg-blue-600 p-2 rounded-xl">
                        <FaChevronLeft color='white' size={20} />
                    </button>
                    <button onClick={sliderRef2?.slickNext}
                        className="absolute bottom-16 right-7 z-10 bg-blue-600 p-2 rounded-xl ">
                        <FaChevronRight color='white' size={20} />
                    </button>
                </div>
                <div>
                    <Slider ref={setSliderRef2} {...settings_img}>
                        {imgSlider.map(item => (
                            <motion.div
                                // initial={{ opacity: 0 }}
                                // animate={{ opacity: 1 }}
                                // transition={{ duration: 2 }}
                                key={item.id} className='relative'>
                                <LazyImage src={item.img} alt='#' />
                                <motion.div
                                    initial={{ opacity: .2, top: 150 }}
                                    whileInView={{ opacity: 1, top: 100 }}
                                    transition={{ duration: 2.1, type: 'spring' }}
                                    className="absolute left-10  text-xl font-bold">
                                    <p className="text-2xl mb-3 bg-slate-300 p-2 rounded-lg"> {item.description} </p>
                                    <button onClick={() => navigate("/AppShop/products")} className="px-3 py-1 rounded-md btn">
                                        shop now
                                    </button>
                                </motion.div>
                                {item.id === 6 && <img src={img_gift} alt="#" className="absolute bottom-4 right-64"
                                    width={'7%'} style={{ rotate: scroll * .7 + "deg" }} />}
                            </motion.div>
                        ))}
                    </Slider>
                </div>
            </div>


            {/* old Method */}
            {/* <div className="relative">
                {logoSlider.map((slide, index) =>
                    <motion.div className={index === current ? 'slide_active' : 'slide'}
                        key={index}
                    // initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    // transition={{ duration: 1 }}
                    >
                        {index === current &&
                            <div className="flex items-center">
                                <img src={slide.logo} width={180} alt="#" />
                            </div>
                        }
                    </motion.div>
                )}

                <button onClick={prevSlide} className='absolute right-20 bottom-4 cursor-pointer' >
                    <BsArrowLeftSquareFill size={25} />
                </button>
                <button onClick={nextSlide} className='absolute right-8 bottom-4 cursor-pointer' >
                    <BsArrowRightSquareFill size={25} />
                </button>
            </div> */}



            {/* {dataSlider.map((slide, index) =>
                <motion.div className={index === current ? 'slide_active' : 'slide'}
                    key={index}
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // transition={{ duration: 1 }}
                >
                    {index === current && <img src={slide.image} alt="#" />}
                </motion.div>
            )}

            <button onClick={prevSlide} className='absolute right-20 bottom-4 cursor-pointer' >
                <BsArrowLeftSquareFill size={25} />
            </button>
            <button onClick={nextSlide} className='absolute right-8 bottom-4 cursor-pointer' >
                <BsArrowRightSquareFill size={25} />

            </button> */}


            <div className='w-[93%] mx-auto my-20'>
                <div className="text-2xl font-bold mb-4"> Back In Stock </div>
                <div className="flex gap-3 justify-center">
                    <div>
                        <div key={state_img2.id}>
                            <div className="relative">
                                <img src={state_img2.img} alt="#" width={"19.5%"} className="rounded-lg" />
                                <p className="absolute bottom-0 left-2 bg-black rounded-xl px-2 text-xs text-white">Sale</p>
                            </div>
                            <p className="my-2"> {state_img2.title} </p>
                            <p className="my-2"> {state_img2.price} </p>
                        </div>
                        <div className='flex gap-3 mt-3'>
                            <div className="rounded-full bg-slate-500 w-6 h-6"></div>
                            <div onMouseEnter={() => dispatch({ type: 'Navy' })} onMouseLeave={() => dispatch({ type: 'Default' })} className="rounded-full bg-amber-500 w-6 h-6"></div>
                            <div onMouseEnter={() => dispatch({ type: 'Red' })} onMouseLeave={() => dispatch({ type: 'Default' })} className="rounded-full bg-red-600 w-6 h-6"></div>
                            <div onMouseEnter={() => dispatch({ type: 'Lime' })} onMouseLeave={() => dispatch({ type: 'Default' })} className="rounded-full bg-lime-500 w-6 h-6"></div>
                            <div onMouseEnter={() => dispatch({ type: 'Orange' })} onMouseLeave={() => dispatch({ type: 'Default' })} className="rounded-full bg-orange-400 w-6 h-6"></div>
                        </div>
                    </div>


                    <div>
                        <div key={state_img3.id}>
                            <div className="relative">
                                <img src={state_img3.img} alt="#" width={"19.5%"} className="rounded-lg" />
                                <p className="absolute bottom-0 left-2 bg-black rounded-xl px-2 text-xs text-white capitalize"> selling fast </p>
                            </div>
                            <div className="my-2"> {state_img3.title} </div>
                            <div className="my-2"> {state_img3.price} </div>
                        </div>
                        <div className='flex gap-3 mt-3 '>
                            <div className="rounded-full bg-slate-500 w-6 h-6"></div>
                            <div onMouseEnter={() => dispatch({ type: 'Merlot' })} onMouseLeave={() => dispatch({ type: 'Default' })} className="rounded-full bg-blue-500 w-6 h-6"></div>
                            <div onMouseEnter={() => dispatch({ type: 'Egret' })} onMouseLeave={() => dispatch({ type: 'Default' })} className="rounded-full bg-red-500 w-6 h-6"></div>
                            <div onMouseEnter={() => dispatch({ type: 'Lagoon' })} onMouseLeave={() => dispatch({ type: 'Default' })} className="rounded-full bg-orange-500 w-6 h-6"></div>
                            <div onMouseEnter={() => dispatch({ type: 'Smoky_Ochre' })} onMouseLeave={() => dispatch({ type: 'Default' })} className="rounded-full bg-gray-500 w-6 h-6"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section Slider 2  */}
            <div className='relative w-[93%] mt-36 mx-auto'>
                <div>
                    <button onClick={sliderRef?.slickPrev}
                        className="absolute top-12 left-1 z-10 bg-blue-600 p-1 rounded-xl">
                        <FaChevronLeft color='white' size={18} />
                    </button>
                    <button onClick={sliderRef?.slickNext}
                        className="absolute top-12 right-1 z-10 bg-blue-600 p-1 rounded-xl">
                        <FaChevronRight color='white' size={18} />
                    </button>
                </div>
                <div className="m-3 rounded-xl px-10 py-2">
                    <Slider ref={setSliderRef} {...settings_logo}>
                        {logoSlider.map((item) => (
                            <div key={item.id}>
                                <div className="flex justify-center">
                                    <img src={item.logo} alt='#' width={'50%'} height={"50%"} />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className='w-[93%] mx-auto my-20'>
                <div className='flex justify-around gap-2 items-center'>
                    <div className="relative">

                        {/* <img src={img2} alt="" className="absolute  left-36 " width={"30%"} />
                        <img src={img1} alt="" className="absolute  left-36 " width={"30%"} /> */}

                        <div>
                            <p className="text-4xl font-bold">Sustainability = Transparency</p>
                            <p className="text-lg font-bold"> LEARN MORE</p>
                            The apparel industry creates a lot of trash—10.5 million tonnes per year, to be exact. We're helping
                            divert some of it from landfills, while conserving water and important resources, too.
                            By planting trees for every item purchased, we prove to the world that sustainability can and should be as easy as putting on a t-shirt. Here's a snapshot of the impact you've helped create so far this year:
                        </div>
                        <div className="flex justify-around mt-5">
                            <div>
                                <p className="flex justify-center"> <RiDeleteBin6Fill size={30} /></p>
                                <p className='mt-2'>200 MM g</p>
                                <p className="text-gray-400 text-sm"> waste saved</p>
                            </div>
                            <div>
                                <p className="flex justify-center"><IoIosWater size={30} /></p>
                                <p className='mt-2'>245 MM l</p>
                                <p className="text-gray-400 text-sm"> water saved</p>
                            </div>
                            <div>
                                <p className="flex justify-center"><AiTwotoneCloud size={30} /></p>
                                <p className='mt-2'>1 MM kg</p>
                                <p className="text-gray-400 text-sm">CO2 saved</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <LazyImage src={img} alt="#" width={"1100px"} className="rounded-lg" />
                    </div>
                </div>
            </div>


            <div style={{ width: '93%' }} className="mx-auto my-12 rounded-xl relative">
                <h1 className="text-black font-bold text-2xl mb-3"> Today Best Deals For You! </h1>
                <div className="flex items-center gap-4 my-2">
                    <div>
                        <button className={state.showGadget ? "bg-green-700 text-white py-1 px-2 rounded-xl" :
                            "py-1 px-2 rounded-xl bg-white text-black"}
                            onClick={() => dispatch({ type: 'GADGET' })}>
                            Gadgets
                        </button>
                    </div>
                    <div>
                        <button className={state.showFashion ? "bg-green-700 text-white py-1 px-2 rounded-xl" :
                            "py-1 px-2 rounded-xl bg-white text-black"}
                            onClick={() => dispatch({ type: 'FASHION' })}>
                            Fashion
                        </button>
                    </div>
                    <div>
                        <button className={state.showFitness ? "bg-green-700 text-white py-1 px-2 rounded-xl" :
                            "py-1 px-2 rounded-xl bg-white text-black"}
                            onClick={() => dispatch({ type: 'FITNESS' })}>
                            Fitness
                        </button>
                    </div>
                </div>

                {state.showGadget &&
                    <div className="flex items-center gap-9 mt-4">
                        {gadgets.map(i => <div key={i.id}>
                            <LazyImage src={i.img} alt="#" className="rounded-xl" />
                            <p className='mt-2 ml-2'>Price : {i.price}</p>
                        </div>)}
                    </div>
                }
                {state.showFashion &&
                    <div className="flex items-center gap-9 mt-4">
                        {fashion.map(i => <div key={i.id}>
                            <img src={i.img} alt="#" className="rounded-xl" />
                            <p className='mt-2 ml-2'>Price : {i.price}</p>
                        </div>)}
                    </div>
                }
                {state.showFitness &&
                    <div className="flex items-center gap-9 mt-4">
                        {fitness.map(i => <div key={i.id}>
                            <img src={i.img} alt="#" className="rounded-xl" />
                            <p className='mt-2 ml-2'>Price : {i.price}</p>
                        </div>)}
                    </div>
                }

                <Tippy content='recycle'>
                    <img src={img3} alt="#" width={100} className="absolute right-20 bottom-20"
                        style={{ rotate: scroll * .3 + "deg" }} />
                </Tippy>

            </div>

            {/* Section Slider 3  */}
            <div className='relative my-20 mx-auto px-2' style={{ width: "95%" }} >
                <div className="text-2xl font-bold my-7 ml-2">  The Environmentor </div>
                <div>
                    <button onClick={sliderRef3?.slickPrev}
                        className="absolute top-0 right-20 z-10 bg-blue-600 p-1 rounded-xl">
                        <FaChevronLeft color='white' size={18} />
                    </button>
                    <button onClick={sliderRef3?.slickNext}
                        className="absolute top-0 right-7 z-10 bg-blue-600 p-1 rounded-xl">
                        <FaChevronRight color='white' size={18} />
                    </button>
                </div>
                <div>
                    <Slider ref={setSliderRef3} {...settings_img3} >
                        {imgSlider3.map((item) => (
                            <div key={item.id}>
                                <img src={item.img} alt='#' width={'90%'} className="mx-auto rounded-lg" />
                                <div style={{ width: '90%' }} className="my-2 mx-auto flex flex-col items-stretch">
                                    <p className="my-2 font-bold h-14">{item.title}</p>
                                    <button className="self-start mb-3 text-neutral-400 underline decoration-2 underline-offset-4 hover:no-underline"> Read more </button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>


            <div className=" w-[93%] mx-auto">
                <div className="my-4">
                    <div className="text-center my-2 text-white bg-black py-3 rounded-lg overflow-hidden">
                        <motion.p
                            initial={{ x: "-25rem" }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 1.3 }}
                            className="font-bold mb-3 text-4xl">
                            How Can We Help?
                        </motion.p>
                        <motion.div
                            initial={{ x: "25rem" }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 1.3 }}>
                            <p>Send us a text: 1-814-251-9966 </p>
                            <p>Give us a call: 1-888-963-8944 </p>
                            <p>Monday - Thursday: 5AM - 5PM PST </p>
                            <p> Friday: 6AM - 5PM PST </p>
                        </motion.div>
                    </div>
                    <div>
                        <p className="text-center text-4xl my-4"> Frequently Asked Questions </p>
                        {FAQ.map(item =>
                            <div key={item.id} className="bg-gray-100 p-1 rounded-lg px-3 mb-2">
                                <button onClick={() => toggleCollapse(item.id)} className='my-2 flex items-center justify-between w-full text-lg'>
                                    {item.question} {isCollapse[item.id] ? <AiOutlineMinus /> : <AiOutlinePlus />}
                                </button>
                                <Collapse in={isCollapse[item.id]} timeout="auto" unmountOnExit
                                    className='whitespace-normal break-all'>
                                    {item.answer}
                                </Collapse>
                            </div>
                        )}
                    </div>
                </div>
            </div>



        </>
    )
}

export default SliderComponent;





//// Method 2

// const SliderComponent = () => {
//     // const [currentSlide, setCurrentSlide] = useState(0);
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 800,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2800,
//     };
//     return (
//         <div className="overflow-hidden">
//             <Slider {...settings}>
//                 <div>
//                     <img src={img1} alt="Slide 1" />
//                 </div>
//                 <div>
//                     <img src={img2} alt="Slide 2" />
//                 </div>
//                 <div>
//                     <img src={img3} alt="Slide 3" />
//                 </div>
//             </Slider>
//         </div>
//     );
// }

// export default SliderComponent;





