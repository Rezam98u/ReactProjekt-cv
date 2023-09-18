import { React, useContext, useRef } from 'react';
import { useStateContext } from './context/useStateContext';

import img from './img/2588.jpg'
import img1 from './img/n.png'

// import { useScroll, useTransform, motion } from 'framer-motion';
// import { Rotate90DegreesCcw } from '@mui/icons-material';
////////////////////
const City = () => {
    const ref = useRef(null)
    const { scroll } = useContext(useStateContext);

    // const { scrollYProgress } = useScroll({
    //     target: ref,
    //     offset: ['start start', 'end start']
    // })

    // const bgY = useTransform(scrollYProgress, [1], ["0%, 100%"])
    // const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

    return (
        <div>
            <div ref={ref} className='relative pt-3'>
                <div>
                    <img src={img} alt="#" width={"100%"} />
                </div>

                <div
                    style={{ right: scroll * 1.6 + "px" }}
                    className="absolute bottom-0">
                    <img src={img1} alt="#" />
                </div>

            </div>

            <div className="relative bg-white">
                <div className="absolute top-10 left-5"
                    style={{ rotate: scroll * .7 + "deg" }}
                >
                    ghjfjhihj
                </div>
            </div>


            <div className='border-y-2 flex justify-between my-40'>
                <div>
                    <div>
                        <p>ShopCart</p>
                        {/* <p>Text ...</p> */}
                        <p>Accepted Payments</p>
                    </div>
                    <div className="flex items-center gap-3 my-3">
                        {/* <p><FaCcVisa size={35} /></p>
                        <p><FaCcStripe size={35} /></p>
                        <p><FaAmazon size={35} /></p>
                        <p><FaPaypal size={35} /></p> */}
                    </div>
                    <div className="flex items-center gap-3">
                        {/* <p><FaApplePay size={35} /></p>
                        <p><FaGooglePay size={35} /></p>
                        <p><FaCcAmex size={35} /></p>
                        <p><FaCcDiscover size={35} /></p> */}
                    </div>
                </div>

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
                    <p> RETURN POLICY </p>
                    <p> TRADE PROGRAM </p>
                    <p> AFFILIATE PROGRAM </p>
                    <p> TERMS OF SERVICE </p>
                    <p> PRIVACY POLICY </p>
                    <p> PRESS REQUESTS </p>
                </div>
            </div>
            <div className='border-y-2 flex justify-between my-40'>
                <div>
                    <div>
                        <p>ShopCart</p>
                        {/* <p>Text ...</p> */}
                        <p>Accepted Payments</p>
                    </div>
                    <div className="flex items-center gap-3 my-3">
                        {/* <p><FaCcVisa size={35} /></p>
                        <p><FaCcStripe size={35} /></p>
                        <p><FaAmazon size={35} /></p>
                        <p><FaPaypal size={35} /></p> */}
                    </div>
                    <div className="flex items-center gap-3">
                        {/* <p><FaApplePay size={35} /></p>
                        <p><FaGooglePay size={35} /></p>
                        <p><FaCcAmex size={35} /></p>
                        <p><FaCcDiscover size={35} /></p> */}
                    </div>
                </div>

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
                    <p> RETURN POLICY </p>
                    <p> TRADE PROGRAM </p>
                    <p> AFFILIATE PROGRAM </p>
                    <p> TERMS OF SERVICE </p>
                    <p> PRIVACY POLICY </p>
                    <p> PRESS REQUESTS </p>
                </div>
            </div>
        </div>
    );
}

export default City;
