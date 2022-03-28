import classes from './TechUsed.module.scss'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


function defineColor(tech) {
    switch (tech.toLowerCase()) {
        case 'sass':
            return '#FF93BA' 
        case 'react':
            return '#95C6FF'
        case 'html5':
            return '#FFA175'
        case 'css':
            return '#5DAEFF'
        case 'javascript':
            return '#F9EB7D'
        case 'tailwindcss':
            return '#38BDF8'
        case 'redux':
            return '#f030B0'
        case 'context':
            return '#5283dd'
        case 'api':
            return '#79f46e'
        default:
            return '#b9a596'
    }
}

function TechUsed(props) {
    gsap.registerPlugin(ScrollTrigger)
    const containerRef = useRef()
    useEffect(() => {
        gsap.from(containerRef.current, {scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center+=220',
            toggleActions: 'play reverse play reverse'
        }, opacity: 0, y: -20, duration: 1})
    }, [])

    return (
        <div ref={containerRef} className={classes['made-with-container']}>
            <p className={classes['made-with-title']}>{props.lang==='español'?'Hecho con':'Made with'}</p>
            <div className={classes['tech-used']}>
                {props.techNames.map(tech => {
                    return <p style={{backgroundColor: defineColor(tech)}} key={tech}>{tech}</p>
                })}
            </div>
        </div>
    )
}

export default TechUsed