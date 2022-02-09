import classes from  './Home.module.scss'
import NameSvg from './NameSvg/NameSvg'
import VectorCurves from './VectorCurves/VectorCurves'
import gsap from 'gsap'
import { useContext, useEffect, useRef } from 'react'
import { LanguageContext } from '../store/lang-context'


function Home() {
    const langCtx = useContext(LanguageContext)
    const presentationRef = useRef()
    const presentationText = langCtx.selectedLang==='español' ? 
    `Hola, en caso de que sea difícil leer arriba (aunque se vea copado)
    soy Gonzalo Pozzoli, un desarrollador front - end que disfruta aprender
    cada día y crear cosas útiles.`
    :
    `Hi, in case it's hard to read above (although it looks cool)
     I'm Gonzalo Pozzoli, a front - end 
    developer who enjoys learning everyday and creating
    cool and useful stuff.`

    useEffect(() => {
        gsap.from(presentationRef.current, {opacity: 0, y: 50, duration: .7})
    }, [])

    return (
        <section id='home' className={classes.home}>
            <div className={classes.container}>
                <NameSvg />
                <p ref={presentationRef} className={classes.presentation}>{presentationText}</p>
            </div>
            <VectorCurves />
            
        </section>
    )
}

export default Home