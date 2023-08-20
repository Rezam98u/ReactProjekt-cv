import React from 'react';
import { logoSlider, gadgets, fashion, fitness } from '../Slider/Data_slider'
import { useState } from 'react';
import { FaAmazon, FaApplePay, FaCcAmex, FaCcDiscover, FaCcStripe, FaCcVisa, FaChevronLeft, FaChevronRight, FaGooglePay, FaPaypal } from 'react-icons/fa'

// import Carousel from 'react-elastic-carousel';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'
import "./slider.module.scss"
import { useEffect } from 'react';
import { motion } from "framer-motion"

import img1 from './mainImg.webp'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useDispatch, useSelector } from 'react-redux';
///////////////////////
const SliderComponent = () => {

    const [sliderRef, setSliderRef] = useState(null)
    // const [gadgetsShow, setGadgetsShow] = useState(Boolean)
    // const [fashionShow, setFashionShow] = useState(Boolean)

    const state = useSelector(state => state.useReducerShow)
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

    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3100,
    };

    return (
        <>
            <div className="relative">
                <img src={img1} alt="" />
                <div className="absolute left-12 top-32 text-xl font-bold ">
                    <p className="text-2xl mb-3"> Shopping and Department Store </p>
                    <button className="bg-slate-500 text-white px-3 py-1 rounded-md"> learn more </button>
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


            <div className='relative'>
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
                    <Slider ref={setSliderRef} {...settings}>
                        {logoSlider.map((item) => (
                            <div key={item.id}>
                                <img src={item.logo} alt='#' width={'50%'} height={"50%"} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>


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




            <div>
                <div style={{ width: '90%' }} className="mx-auto my-12 bg-gray-300 py-8 px-4 rounded-xl ">
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
                                <p> Department </p>
                                <p>#</p>
                                <p>#</p>
                                <p>#</p>
                                <p>#</p>
                                <p>#</p>
                                <p>#</p>
                                <p>#</p>
                                <p>#</p>
                            </div>

                            <div>
                                <p> About us </p>
                                <p>#</p>
                                <p>#</p>
                                <p>#</p>
                                <p>#</p>
                                <p>#</p>
                                <p>#</p>
                                <p>#</p>
                                <p>#</p>
                                <p>#</p>
                            </div>

                            <div>
                                <p> Services </p>
                                <p>#</p>
                                <p>#</p>
                                <p>#</p>
                                <p>#</p>
                            </div>

                            <div>
                                <p> Help </p>
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





