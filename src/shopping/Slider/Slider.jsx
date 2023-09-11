import React from 'react';
import { logoSlider, gadgets, fashion, fitness, imgSlider, imgSlider3 } from '../Slider/Data_slider'
import { useState } from 'react';
import { FaAmazon, FaApplePay, FaCcAmex, FaCcDiscover, FaCcStripe, FaCcVisa, FaChevronLeft, FaChevronRight, FaGooglePay, FaPaypal } from 'react-icons/fa'

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
// import img1 from './scribble_gif_croped.webp'
// import img2 from './trash_talk_full_en.webp'
///////////////////////
const SliderComponent = () => {

    const [sliderRef, setSliderRef] = useState(null)
    const [sliderRef2, setSliderRef2] = useState(null)
    const [sliderRef3, setSliderRef3] = useState(null)
    // const [gadgetsShow, setGadgetsShow] = useState(Boolean)
    // const [fashionShow, setFashionShow] = useState(Boolean)

    const state = useSelector(state => state.useReducerShow)
    const state_img2 = useSelector(state => state.useReducerShow2)
    const state_img3 = useSelector(state => state.useReducerShow3)
    const dispatch = useDispatch()

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
        dots: true,
        infinite: false,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
        <>
            {/* <div className="relative">
                <img src={img1} alt="" />
                <div className="absolute left-12 top-32 text-xl font-bold ">
                    <p className="text-2xl mb-3"> Shopping and Department Store </p>
                    <button className="bg-slate-500 text-white px-3 py-1 rounded-md"> learn more </button>
                </div>
            </div> */}

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
                <div className="">
                    <Slider ref={setSliderRef2} {...settings_img}>
                        {imgSlider.map(item => (
                            <motion.div
                                // initial={{ opacity: 0 }}
                                // animate={{ opacity: 1 }}
                                // transition={{ duration: 2 }}
                                key={item.id} className='relative'>
                                <img src={item.img} alt='#' width={"100%"} height={"100%"} />
                                <div className="absolute left-10 top-32 text-xl font-bold">
                                    <p className="text-2xl mb-3 bg-slate-300 p-2 rounded-lg"> {item.description} </p>
                                    <button className="bg-slate-500 text-white px-3 py-1 rounded-md"> learn more </button>
                                </div>
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

            {/* Section Slider 2  */}
            {/* <div className='relative mt-36'>
                <div>
                    <button onClick={sliderRef?.slickPrev}
                        className="absolute top-12 left-7 z-10 bg-blue-600 p-1 rounded-xl">
                        <FaChevronLeft color='white' size={18} />
                    </button>
                    <button onClick={sliderRef?.slickNext}
                        className="absolute top-12 right-7 z-10 bg-blue-600 p-1 rounded-xl">
                        <FaChevronRight color='white' size={18} />
                    </button>
                </div>
                <div className="m-3 rounded-xl px-12 py-2">
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


            <div style={{ width: "93%" }} className='mx-auto my-20'>
                <div className="text-2xl font-bold mb-4"> Back In Stock </div>

                <div className="flex gap-3 justify-center">
                    <div>
                        <div key={state_img2.id}>
                            <div className="relative">
                                <img src={state_img2.img} alt="#" width={"19.5%"} className="rounded-lg" />
                                <p className="absolute bottom-0 left-2 bg-black rounded-xl px-2 text-xs text-white">Sale</p>
                            </div>
                            <p className="my-2 hover:underline"> {state_img2.title} </p>
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


            <div style={{ width: "93%" }} className='mx-auto my-20'>
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
                    </div>
                    <div>
                        <img src={img} alt="" width={"1100px"} className="rounded-lg" />
                    </div>
                </div>
            </div>


            {/* Section Slider 3  */}
            <div className='relative my-36 mx-auto px-2' style={{ width: "95%" }} >
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
                                <div style={{ width: '90%' }} className="mx-auto">
                                    <p className="my-2 font-bold">{item.title}</p>
                                    <button> READ NOW </button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>


            <div>
                <div style={{ width: '93%' }} className="mx-auto my-12 bg-gray-300 py-8 px-4 rounded-xl ">
                    <h1 className="text-black font-bold text-xl mb-3"> Today Best Deals For You! </h1>
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

                        {/* <div>
                            <button className="bg-green-700 text-white px-2 rounded-xl py-1"> Toys </button>
                        </div>
                        <div>
                            <button className="bg-green-700 text-white px-2 rounded-xl py-1"> Educations </button>
                        </div>
                        <div>
                            <button className="bg-green-700 text-white px-2 rounded-xl py-1"> Beauty </button>
                        </div>
                        <div>
                            <button className="bg-green-700 text-white px-2 rounded-xl py-1"> Travel </button>
                        </div>
                        */}
                    </div>

                    {state.showGadget &&
                        <div className="flex items-center gap-9 mt-4">
                            {gadgets.map(i => <div key={i.id}>
                                <img src={i.img} alt="#" className="rounded-xl" />
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

                </div>



                {/* Footer Section */}
                <div style={{ width: '90%' }} className="mx-auto">
                    <div className='border-y-2 py-5 flex'>
                        <div style={{ width: '40%' }}>
                            <div>
                                <p>ShopCart</p>
                                <p>Text ...</p>
                                <p>Accepted Payments</p>
                            </div>
                            <div className="flex items-center gap-3 my-3">
                                <p><FaCcVisa size={35} /></p>
                                <p><FaCcStripe size={35} /></p>
                                <p><FaAmazon size={35} /></p>
                                <p><FaPaypal size={35} /></p>
                            </div>
                            <div className="flex items-center gap-3">
                                <p><FaApplePay size={35} /></p>
                                <p><FaGooglePay size={35} /></p>
                                <p><FaCcAmex size={35} /></p>
                                <p><FaCcDiscover size={35} /></p>
                            </div>
                        </div>

                        <div style={{ width: '60%' }} className="flex justify-between">
                            <div>
                                <p className="font-bold"> ABOUT US </p>
                                <p> ABOUT ShopCart!</p>
                                <p> ABOUT THE FOUNDERS </p>
                                <p>IN THE PRESS</p>
                                <p>TESTIMONIALS</p>
                                <p>SUBMIT PRODUCTS</p>
                                <p>WISHLIST</p>
                            </div>

                            <div>
                                <p className="font-bold"> CUSTOMER SERVICE </p>
                                <p> FREE SHIPPING + RETURNS </p>
                                <p> START A RETURN </p>
                                <p> FAQS </p>
                                <p> RETURN POLICY </p>
                                <p> CONTACT US </p>
                                <p> TRADE PROGRAM </p>
                                <p> AFFILIATE PROGRAM </p>
                                <p> TERMS OF SERVICE </p>
                                <p> PRIVACY POLICY </p>
                                <p> PRESS REQUESTS </p>
                            </div>

                            <div>
                                <p className="font-bold"> Help </p>
                                <p>#</p>
                                <p>#</p>
                                <p>#</p>
                                <p>#</p>
                                <p>#</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between my-3">
                        <div className="flex gap-4">
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                        </div>
                        <div className="flex gap-2">
                            <div>4</div>
                            <div>5</div>
                        </div>
                        <div className="flex">
                            <p>text </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
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





