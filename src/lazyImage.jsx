import React, { useEffect, useRef, useState } from 'react';

const LazyImage = props => {
    const imageRef = useRef()
    // const [inView, setInView] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    imageRef.current.src = props.src
                    // setInView(true)
                    // console.log('ok')
                    observer.disconnect()
                }
            })
        })

        observer.observe(imageRef.current)

        return () => observer.disconnect()

    }, [props.src])


    return (
        <div>
            <img ref={imageRef} {...props} alt={props.alt} />
        </div>
    )
}
export default LazyImage;
