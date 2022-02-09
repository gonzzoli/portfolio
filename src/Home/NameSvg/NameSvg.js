import classes from './NameSvg.module.scss'
import {ReactComponent as GonzaloSvg} from '../../img/gonzalo.svg'
import {ReactComponent as PozzoliSvg} from '../../img/pozzoli.svg'
import { useEffect, useRef } from 'react'
import randomColor from 'randomcolor'
import gsap from 'gsap'

function NameSvg() {
    const nameRef = useRef()
    const lastNameRef = useRef()

    function changeColor(e) {
        if(e.target.pathName === 'svg') return
        e.target.style.stroke = randomColor()
    }

    useEffect(() => {
        gsap.from(nameRef.current, {x: 150, duration: 3, ease: 'power2.out'})
        gsap.from(lastNameRef.current, {x: -150, duration: 3, ease: 'power2.out'})
    }, [])
    
    return (
        <div className={classes['container']}>
            <GonzaloSvg onMouseOver={changeColor} ref={nameRef} className={classes.name} />
            <PozzoliSvg onMouseOver={changeColor} ref={lastNameRef} className={classes['last-name']} />
        </div>

    )
}

export default NameSvg