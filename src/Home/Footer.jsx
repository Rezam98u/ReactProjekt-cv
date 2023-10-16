import React from 'react';
import {
    FaAmazon, FaApplePay, FaCcAmex, FaCcDiscover, FaCcStripe,
    FaCcVisa, FaGooglePay, FaPaypal
} from 'react-icons/fa'

////////////////////////////////
const FooterAppShop = () => {
    return (
        <>
            <div className='bg-[#10182f] text-slate-400 mt-5 py-4'>
                <div className="w-[93%] mx-auto">
                    <div className="flex justify-between my-3">
                        <div>
                            <div className="mb-4 text-xl font-bold">
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
                            <p className="font-bold text-xl mb-2"> ABOUT US </p>
                            <p> ABOUT ShopCart!</p>
                            <p> ABOUT THE FOUNDERS </p>
                            <p>IN THE PRESS</p>
                            <p>TESTIMONIALS</p>
                            <p>SUBMIT PRODUCTS</p>
                            <p>WISHLIST</p>
                        </div>

                        <div>
                            <p className="font-bold text-xl mb-2"> CUSTOMER SERVICE </p>
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

                    <div className="mt-5 relative border-t-2 text-sm">
                        <div className="flex justify-between mt-3">
                            <p>© 2023. All Rights Reserved.</p>
                            <p>  Terms of Service </p>
                            <p>   Privacy Policy </p>
                            <p>  Security  </p>
                            <p>  Sitemap  </p>
                            <select className="bg-transparent">
                                <option value="En"> English </option>
                                <option value="De"> Deutsch </option>
                                <option value="De"> persian </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterAppShop;





// import { React, useEffect, useState } from 'react';
// import { Button } from '@mui/material';
// import { io } from 'socket.io-client'
// ////////////////////////////
// const Footer = () => {
//     // const socket = io.connect('http://localhost:3003')

//     const [messageInput, setMessageInput] = useState('')
//     console.log(messageInput)
//     const [massageReceived, setMassageReceived] = useState('')

//     // const sendMessage = () => {
//     //     socket.emit('sendMessage', messageInput)
//     //     setMessageInput('')
//     // }

//     // useEffect(() => {
//     //     socket.on('messageReceived', data => setMassageReceived(data))
//     //     console.log(massageReceived)
//     // }, [])

//     return (
//         <>
//             <div className="footer bg-gradient-to-b from-yellow-300 to-blue-900">
//                 <div style={{ width: "90%" }} className='con text-center py-4 mx-auto '>
//                     <div className='header_text'>
//                         <p className='text-blue-900 text-2xl '>
//                             kommen sie gern uns mit, um tolle Urlauben zu erleben
//                         </p>
//                     </div>
//                     <div className="input_area">
//                         <input className='rounded-sm px-2 w-56' type="email" name='email' placeholder='schreiben Sie deine email' />
//                         <div> <Button variant='contained' className="mt-3"> Ein geben  </Button> </div>
//                     </div>

//                     <div>
//                         <input className='rounded-sm px-2 w-56' type="text"
//                             placeholder='send message'
//                             value={messageInput}
//                             onChange={e => setMessageInput(e.target.value)} />
//                         {/* <Button variant='contained' className="mx-2" onClick={sendMessage}>
//                             Send
//                         </Button> */}
//                         <p> message : {massageReceived} </p>
//                     </div>

//                     <div className="flex justify-between mt-4">
//                         <div>
//                             <h3>
//                                 About us
//                             </h3>
//                             <p>1</p>
//                         </div>
//                         <div>
//                             <h3>
//                                 Contact Us
//                             </h3>
//                             <p>2</p>
//                         </div>
//                         <div>
//                             <h3>
//                                 Videos
//                             </h3>
//                             <p>3</p>
//                         </div>
//                         <div>
//                             <h3>
//                                 Social Media
//                             </h3>
//                             <p>4</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Footer;
