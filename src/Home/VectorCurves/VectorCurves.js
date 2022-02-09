import classes from './VectorCurves.module.scss'
import {ReactComponent as TopCurve} from '../../img/home-vector-curve.svg'
import {ReactComponent as BottomCurve} from '../../img/home-vector-curve.svg'
import { useRef, useEffect } from 'react'

function VectorCurves() {
    const topRef = useRef()
    const topRef2 = useRef()
    const bottomRef = useRef()
    const bottomRef2 = useRef()

    useEffect(() => {
        let red = 255
        let green = 0
        let blue = 0
        let red2 = 0
        let green2 = 0
        let blue2 = 255
        const interval = setInterval(() => {
            const color = `rgb(${red-125}, ${green-125}, ${blue-125})`
            topRef.current.children[0].style.stroke = color
            topRef2.current.children[0].style.stroke = color
            if(red===255 && blue===0)green++
            if(red<=255 && red>0 && green===255)red-=5
            if(red===0 && green===255 && blue<255)blue+=5
            if(blue===255 && red===0 && green<=255 && green>0)green-=5
            if(blue===255 && red<255 && green===0) red+=5
            if(red===255 && green===0 && blue>0) blue-=5
        }, 10)
        const interval2 = setInterval(() => {
            const color = `rgb(${red2-125}, ${green2-125}, ${blue2-125})`
            bottomRef.current.children[0].style.stroke = color
            bottomRef2.current.children[0].style.stroke = color
            if(red2===255 && blue2===0)green2++
            if(red2<=255 && red2>0 && green2===255)red2-=5
            if(red2===0 && green2===255 && blue2<255)blue2+=5
            if(blue2===255 && red2===0 && green2<=255 && green2>0)green2-=5
            if(blue2===255 && red2<255 && green2===0) red2+=5
            if(red2===255 && green2===0 && blue2>0) blue2-=5
        }, 10)

        return () => {
            clearInterval(interval)
            clearInterval(interval2)
        }
    }, [])
    

    return (
        <div className={classes.container}>
            <TopCurve ref={topRef} className={`${classes['top-curve']} ${classes.curve}`} />
            <TopCurve ref={topRef2} className={`${classes['top-curve2']} ${classes.curve}`} />
            <BottomCurve ref={bottomRef} className={`${classes['bottom-curve']} ${classes.curve}`} />
            <BottomCurve ref={bottomRef2} className={`${classes['bottom-curve2']} ${classes.curve}`} />
        </div>
    )
}

export default VectorCurves