import classes from './Nav.module.scss'
import LanguageSelect from './LanguageSelect/LanguageSelect'
import { useEffect, useState, Fragment, useRef, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { LanguageContext } from '../store/lang-context'

const spanishText = {
    home: 'inicio',
    projects: 'proyectos',
    contact: 'contacto'
}

const englishText = {
    home: 'home',
    projects: 'projects',
    contact: 'contact'
}

function Nav() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth<=500)
    const [showSmallNav, setShowSmallNav] = useState(false)
    const [smallWasOpened, setSmallWasOpened] = useState(false)
    const blurRef = useRef()
    const langCtx = useContext(LanguageContext)

    const textDisplay = langCtx.selectedLang==='español' ? spanishText : englishText

    function checkBlur(e) {
        e.stopPropagation()
        if(e.target === blurRef.current) {
            setShowSmallNav(false)
        }
    }

    function toggleSmallNav() {
        setSmallWasOpened(true)
        setShowSmallNav(prevState => !prevState)
    }

    const normalNav = (
        <Fragment>
            <nav className={classes.nav}>
                <ul id='nav-links' className={classes.links}>
                    <li className={`${classes.link} home`}><a href='#home'>{textDisplay.home}</a></li>
                    <li className={`${classes.link} projects`}><a href='#projects'>{textDisplay.projects}</a></li>
                    <li className={`${classes.link} contact`}><a href='#contact'>{textDisplay.contact}</a></li>
                </ul>
            </nav>
            <LanguageSelect />
        </Fragment>
    )

    const smallScreenNav = (
        <Fragment>
            <div onClick={toggleSmallNav} className={classes['bubble-nav-icon']}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <nav className={`${!smallWasOpened ? classes['hidden-start'] : ''}
            ${smallWasOpened && !showSmallNav ? classes.hiding : ''}
             ${classes['small-nav']}`}>
                <div onClick={checkBlur} ref={blurRef} className={classes['nav-blur']}></div>
                <ul id='nav-links' className={classes.links}>
                    <li className={`${classes.link} home`}><a href='#home'>{textDisplay.home}</a></li>
                    <li className={`${classes.link} projects`}><a href='#projects'>{textDisplay.projects}</a></li>
                    <li className={`${classes.link} contact`}><a href='#contact'>{textDisplay.contact}</a></li>
                </ul>
                <LanguageSelect smallScreen={isSmallScreen} />
            </nav>
        </Fragment>
    )
    useEffect(() => {
        const sections = [
            document.getElementById('home'),
            document.getElementById('projects'),
            document.getElementById('contact')
        ]
        const header = document.getElementById('header')
        let lastScroll = window.scrollY

        window.onscroll = () => {
            let current = ''
            header.classList.remove(classes.hiding)
            if(window.scrollY > lastScroll) {
                setShowSmallNav(false)
                header.classList.add(classes.hiding)
            }
            lastScroll = window.scrollY
            sections.forEach(section => {
                const sectionTop = section.offsetTop
                if(lastScroll+200 >= sectionTop) {
                    current = section.getAttribute('id')
                }
            })
            Array.from(document.getElementById('nav-links').children).forEach(li => {
                li.classList.remove(classes.active)
                if(Array.from(li.classList).includes(current)) {
                    li.classList.add(classes.active)
                }
            })
            header.classList.remove(classes.shadow)
            if(lastScroll > 200) {
                header.classList.add(classes.shadow)
            }
        }

        function checkSize() {
            if(window.innerWidth<=500) {
                setIsSmallScreen(true)
                return
            }
            setIsSmallScreen(false)
        }
        
        window.addEventListener('resize', checkSize)
    }, [])

    return (
        <header id='header' className={classes.header}>
            {!isSmallScreen ? normalNav : smallScreenNav}
        </header>
    )
}

export default Nav