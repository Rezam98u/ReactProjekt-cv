import { React, useContext, useRef, useState, useEffect } from 'react';
import { useStateContext } from './context/useStateContext';

import img from './img/2588.jpg'
import img1 from './img/n.png'
import img2 from './img/transparent_bottle_for_water.png'
import img3 from './img/abstract-blur-gym.jpg'

import { useScroll, useTransform, motion, useInView } from 'framer-motion';
// import { Rotate90DegreesCcw } from '@mui/icons-material';
////////////////////
const City = () => {
    // const ref = useRef(null)
    const { scroll } = useContext(useStateContext);
    console.log(scroll)
    // const isInView = useInView(ref)

    // const { scrollY } = useScroll()
    // console.log(scrollY.current)

    const [isRotated, setIsRotated] = useState(false)

    const [changeScroll, setChangeScroll] = useState(true)


    useEffect(() => {
        if (scroll === 633.5999755859375) {
            setChangeScroll(false)
        }
    }, [])
    // console.log(isInView);
    // const { scrollYProgress } = useScroll({
    //     target: ref,
    //     offset: ['start start', 'end start']
    // })

    // const bgY = useTransform(scrollYProgress, [1], ["0%, 100%"])
    // const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

    return (
        <div>
            <div className="relative">
                <div>
                    <img src={img3} alt="#" width={"100%"} />
                </div>
                <div>
                    <motion.div className='w-4/5 mx-auto absolute left-7 top-60 z-20'
                        initial={{ x: '-10rem' }}
                        animate={{ x: 30 }}
                        transition={{ duration: 1.9 }}
                    >
                        <p className="whitespace-normal break-all text-2xl bootle_font">
                            At the Bottle Water Gym, we've redefined the fitness experience by making hydration a top priority. We believe that staying adequately hydrated is not just essential for overall health but is also a key factor in optimizing your workout performance. With our unique approach to fitness, you'll discover a new level of wellness, energy, and vitality.
                        </p>
                    </motion.div>

                    <motion.div
                        className='absolute z-10'
                        style={scroll >= 0.800000011920929 && scroll <= 734.2000122070312 ? { left: 500 + scroll, top: 150 + scroll } : { right: 200 }}
                        initial={{ rotateY: "0deg", bottom: "-100px" }}
                        animate={{ rotateY: "180deg", bottom: 470 }}
                        transition={{ duration: 1.9 }}>

                        <img src={img2} alt="#" width={800} height={400} />
                    </motion.div>
                </div>


                <div style={{ width: "90%" }} className='mx-auto my-4'>
                    <div className="w-4/5 whitespace-normal break-all">
                        <p className="text-2xl py-2">
                            Our Features
                        </p>
                        <p>
                            State-of-the-Art Facilities: Step into a modern, cutting-edge gym equipped with the latest fitness equipment and amenities. Our facilities are designed to cater to all fitness levels, from beginners to seasoned athletes.

                            Hydration Stations: We take hydration seriously. Throughout our gym, you'll find strategically placed hydration stations stocked with premium bottled water, infused water with refreshing flavors, and electrolyte-rich sports drinks. Staying hydrated has never been this convenient.

                            Personalized Training: Our certified trainers are here to guide you on your fitness journey. Whether you're looking to build strength, increase endurance, or lose weight, our trainers will create personalized workout plans to help you achieve your goals.

                            Group Classes: Join our invigorating group fitness classes, from high-intensity interval training (HIIT) to yoga and aqua aerobics. Our water-themed fitness classes are particularly popular, helping you burn calories while keeping cool.

                            Relaxation and Recovery: After an intense workout, unwind in our spa-like recovery area. Enjoy a refreshing soak in our hydrotherapy pools, followed by a relaxing sauna or steam session. It's the perfect way to reward your body.

                            Nutritional Guidance: Achieving your fitness goals goes hand in hand with a balanced diet. Our nutritionists offer personalized guidance to help you make healthier food choices and optimize your hydration.

                            Community and Support: Join a community of like-minded individuals who share your passion for fitness and well-being. Connect with fellow members, attend workshops, and participate in fitness challenges.

                            Retail Store: Stock up on essential workout gear, fitness apparel, and, of course, your favorite bottled water brands from our in-house retail store.
                        </p>
                    </div>
                </div>
            </div>

            {/* <div className="relative bg-white">
                <div className="absolute top-10 left-5"
                    style={{ rotate: scroll * .7 + "deg" }} >
                    ghjfjhihj
                </div>
            </div> */}

            {/* <motion.circle
                cx={500}
                animate={{ cx: [null, 100] }}
            >
                dfg
            </motion.circle>

            <motion.button
                initial={{ opacity: 0.6 }}
                whileHover={{
                    scale: 3.2,
                    transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                whileInView={{ opacity: 1 }}
            >
                df
            </motion.button>
            <motion.div variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
            }} >
                ygu
            </motion.div> */}



            {/* <div className="image_container">
                <img
                    src={img2}
                    alt="#"
                    // width={"100%"} height={500}
                    className="rotate_image"
                    onClick={() => setIsRotated(!isRotated)}
                />
            </div> */}
        </div >
    );
}

export default City;
