import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import io from 'socket.io-client'
////////////////////////////
const Footer = () => {
    const socket = io.connect('http://localhost:3003')

    const [messageInput, setMessageInput] = useState('')

    const [massageReceived, setMassageReceived] = useState('')

    const sendMessage = () => {
        socket.emit('sendMessage', messageInput)
        setMessageInput('')
    }

    useEffect(() => {
        socket.on('messageReceived', (data) => {
            setMassageReceived(data)
        })
    }, [])

    return (
        <>
            <div className="footer bg-gradient-to-b from-yellow-300 to-blue-900 ">
                <div className='con text-center py-4  dark:bg-gradient-to-b from-black to-gray-500 '>
                    <div className='header_text'>
                        <p className='text-blue-900 text-2xl '>
                            kommen sie gern uns mit, um tolle Urlauben zu erleben
                        </p>
                    </div>
                    <div className="input_area">
                        <input className='rounded-sm px-2 w-56' type="email" name='email' placeholder='schreiben Sie deine email' />
                        <div> <Button variant='contained' className="mt-3"> Ein geben  </Button> </div>
                    </div>

                    <div>
                        <input className='rounded-sm px-2 w-56' type="text" placeholder='send message'
                            onChange={e => setMessageInput(e.target.value)} />
                        <Button variant='contained' className="mx-2" onClick={sendMessage}>
                            Submit
                        </Button>
                        <p> message : {massageReceived} </p>
                    </div>

                    <div className="flex justify-around mt-4">
                        <div>
                            <h3>
                                About us
                            </h3>
                            <p>1</p>
                        </div>
                        <div>
                            <h3>
                                Contact Us
                            </h3>
                            <p>2</p>
                        </div>
                        <div>
                            <h3>
                                Videos
                            </h3>
                            <p>3</p>
                        </div>
                        <div>
                            <h3>
                                Social Media
                            </h3>
                            <p>4</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
