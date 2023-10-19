import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import LazyImage from "../lazyImage";

import backend from "../img/backend.png";
import creator from "../img/creator.png";
import mobile from "../img/mobile.png";
import web from "../img/web.png";


const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
]


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className='w-full rounded-[20px] shadow-xl bg-[#10182f]'
    >
      <div className='py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <LazyImage src={icon} alt='web-development' className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'> {title} </h3>
      </div>
    </motion.div>
  </Tilt>
)


//////////////////////////
const About = () => {
  return (
    <>
      <div className="w-[90%] mx-auto my-20">

        {/* <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
        >
          <p className=''>Introduction</p>
          <h2 className=''>Overview.</h2>
        </motion.div> */}

        {/* <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] break-all'
        >
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p> */}

        <div className='flex flex-wrap gap-10 justify-center'>
          {services.map((service, index) =>
            <ServiceCard key={service.title} index={index} {...service} />
          )}
        </div>

      </div>
    </>
  )
}

export default About;
