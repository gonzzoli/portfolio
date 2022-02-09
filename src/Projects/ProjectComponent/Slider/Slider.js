import classes from './Slider.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Slider(props) {
    const [imgIndex, setImgIndex] = useState(1)
    const containerRef = useRef()

    useEffect(() => {
        gsap.from(containerRef.current, {scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center+=130',
            toggleActions: 'play reverse play reverse'
        }, opacity: 0, y: -50, duration: 1})
    }, [])

    function slideBack() {
        setImgIndex(prevState => {
            if(prevState===0) return props.imgPaths.length - 1
            return prevState - 1
        })
    }

    function slideForward() {
        setImgIndex(prevState => {
            if(prevState===props.imgPaths.length-1) return 0
            return prevState + 1
        })
    }

    return (
    <div ref={containerRef} className={classes['slide-container']}>
        <FontAwesomeIcon onClick={slideBack} className={classes['left-arrow']} icon={faChevronLeft} />
        <FontAwesomeIcon onClick={slideForward} className={classes['right-arrow']} icon={faChevronRight} />
        <div className={classes['img-container']}>
            <img src={props.imgPaths[imgIndex]}/>
        </div>
    </div>
    )
}

export default Slider