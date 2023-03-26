import React from 'react';
import dataSlider from './Data_slider'
import { useState } from 'react';

// import styles from './slider.module.css';
import styles from "./slider.module.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faMap } from '@fortawesome/free-solid-svg-icons';
import { Button, Container } from 'react-bootstrap';

const Slider = () => {
    const length = dataSlider.length

    const [current, setCurrent] = useState(0);


    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)

    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)

    }

    // console.log(current)

    if (!Array.isArray(dataSlider) || length <= 0) {
        return null
    }

    return (

        <Container fluid={true} className={styles.slider}>
            {dataSlider.map((slide, index) =>

                <div className={index === current ? styles.slide_active : styles.slide} key={index}   >

                    {index === current && <img src={slide.image} alt="" />}

                </div>

            )}
            <Button className={styles.nextSlide} onClick={nextSlide} ><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></Button>
            <Button className={styles.prevSlide} onClick={prevSlide} ><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Button>
        </Container>


    );
}

export default Slider;

