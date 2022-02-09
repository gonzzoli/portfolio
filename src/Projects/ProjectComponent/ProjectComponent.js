import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt, f } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useRef, useState } from 'react'
import classes from './ProjectComponent.module.scss'
import Slider from './Slider/Slider'
import TechUsed from './TechUsed/TechUsed'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { LanguageContext } from '../../store/lang-context'

gsap.registerPlugin(ScrollTrigger)

function ProjectComponent(props) {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1100)
    const leftRef = useRef()
    const leftCtaRef = useRef()
    const rightCtaRef = useRef()
    const langCtx = useContext(LanguageContext)

    const ctas = (
        <div className={classes.ctas}>
            <a ref={leftCtaRef} href={props.data.pageLink} target='_blank' className={`${classes.cta} ${classes.page}`}>
                {props.lang==='español'?'Visitar página':'Visit page'}
                <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
            <a ref={rightCtaRef} href={props.data.githubLink} target='_blank' className={`${classes.cta} ${classes.code}`}>
                {props.lang==='español'? 'Ver código':'View code'}
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
    )
    window.onresize = () => {
        setIsSmallScreen(window.innerWidth <= 1100)
    }

    useEffect(() => {
        gsap.from(leftRef.current, {scrollTrigger: {
            trigger: leftRef.current,
            start: 'top center+=100',
            toggleActions: 'play reverse play reverse'
        }, opacity: 0, y: -80, duration: 1})

        gsap.from(leftCtaRef.current, {scrollTrigger: {
            trigger: leftCtaRef.current,
            start: 'top center+=300',
            toggleActions: 'play reverse play reverse'
        }, opacity:0, x: -30, duration: .3, ease: 'none' })

        gsap.from(rightCtaRef.current, {scrollTrigger: {
            trigger: rightCtaRef.current,
            start: 'top center+=300',
            toggleActions: 'play reverse play reverse'
        }, opacity:0, x: 30, duration: .3, ease: 'none' })
    }, [])

    return (
        <div style={{background: `url(${props.data.imgPaths[0]})`}}
        className={classes['project-container']}>
            <div className={classes['background-blur']}></div>
            <div ref={leftRef} className={classes.left}>
                <h4 className={classes.title}>{props.data.title}</h4>
                <p className={classes['project-description']}>
                    {props.data.description[langCtx.selectedLang==='español'?'spanish':'english']}
                </p>
                {!isSmallScreen && ctas}
            </div>
            <div className={classes.middle}>
                <Slider imgPaths={props.data.imgPaths} />
            </div>
            <div className={classes.right}>
                <TechUsed lang={props.lang} techNames={props.data.techNames}/>
            </div>
            {isSmallScreen && <div className={classes.bottom}>
                {ctas}
            </div>}
        </div>
    )
}

export default ProjectComponent