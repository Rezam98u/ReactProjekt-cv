import React from 'react';
import { FaAmazon, FaApplePay, FaCcAmex, FaCcDiscover, FaCcStripe, FaCcVisa, FaGooglePay, FaPaypal } from 'react-icons/fa'
import Tippy from '@tippyjs/react';
import { BsArrowUpSquareFill } from 'react-icons/bs';



const FooterAppShop = () => {
    return (
        <>
            <div className='pt-5 bg-blue-600 text-white'>
                <div style={{ width: "93%" }} className="mx-auto">
                    <div className="flex justify-between mb-3">
                        <div>
                            <div>
                                <p>ShopCart</p>
                                {/* <p>Text ...</p> */}
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

                    <div className="pb-3 relative border-t-2">
                        <div className="flex justify-center  mt-3">
                            <p> © 2023. All Rights Reserved. Privacy Policy & Copyright Policy. Terms and Conditions. </p>
                        </div>
                        <Tippy content="click to scroll on top" delay={550} placement='top'>
                            <button className="absolute right-4 top-3">
                                <BsArrowUpSquareFill size={33} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
                            </button>
                        </Tippy>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FooterAppShop;
