import { React, useState, useContext } from 'react';
// import video from './video/stock-footage-multi-generation-family-preparing-dinner-outdoors-by-car-caravan-holiday-trip.mp4'
import video1 from "./video/video-1.mp4"
import video2 from "./video/stock-footage-multi-generation-family-preparing-dinner-outdoors-by-car-caravan-holiday-trip.mp4"
import { Button } from 'react-bootstrap';
import { MoodHandlerContext } from '../App'

// import './hero.styles.scss'
//////////////////////////////////
const HeroSection = () => {
    const { mood } = useContext(MoodHandlerContext);

    return (
        <>
            <div className="hero_con">
                {
                    mood ?
                        <video src={video1} autoPlay loop muted></video>
                        : <video src={video2} autoPlay loop muted></video>
                }

                <div className="banner">
                    <p className='text-4xl'>
                        <span className='shadow-inner text-teal-400'> Zelten </span>
                        in der Natur oder irgendwo
                    </p>
                    <Button className='text-xl  mt-3 bg-blue-500'> Get Started </Button>
                </div>

            </div>

        </>
    );
}

export default HeroSection;