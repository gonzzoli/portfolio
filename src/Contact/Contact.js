import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useRef } from 'react'
import {ReactComponent as ContactSvg} from '../img/contact-background-vector.svg'
import classes from './Contact.module.scss'
import ContactForm from './ContactForm/ContactForm'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import {LanguageContext} from '../store/lang-context'
gsap.registerPlugin(ScrollTrigger)

const spanishText = {
    title: 'Contáctame',
    paragraph: 'Me podes contactar por cualquier red social o llenando el formulario abajo.'
}

const englishText = {
    title: 'Contact Me',
    paragraph: 'Feel free to contact me on any social media or filling the form below.'
}

function Contact() {
    const langCtx = useContext(LanguageContext)
    const linksRef = useRef()
    const paragraphRef = useRef()

    const displayText = langCtx.selectedLang==='español' ? spanishText : englishText

    useEffect(() => {
        gsap.from(linksRef.current, {scrollTrigger: {
            trigger: linksRef.current,
            toggleActions: 'play none none reverse'
        }, opacity: 0, gap: 60, duration: .7})
        gsap.from(paragraphRef.current, {scrollTrigger: {
            trigger:paragraphRef.current,
            start: 'top center+=280',
            toggleActions: 'play none none reverse'
        } ,opacity: 0, y: 40, duration: .7})
    }, [])

    return (
        <section id='contact' className={classes.container}>
            <ContactSvg className={classes['background-svg']} />
            <h3>{displayText.title}</h3>
            <p ref={paragraphRef}>{displayText.paragraph}</p>
            <ContactForm />
            <ul ref={linksRef} className={classes['media-links']}>
                <li><a target='_blank' href='https://github.com/gonzzoli'>
                    <FontAwesomeIcon icon={faGithub} />
                    Github
                    </a></li>
                <li><a target='_blank' href='https://ar.linkedin.com/in/gonzalo-pozzoli-036086199'>
                    <FontAwesomeIcon icon={faLinkedin} />
                    LinkedIn
                    </a></li>
                <li><a target='_blank' href='https://www.instagram.com/gonzalopozzoli/?hl=es-la'>
                    <FontAwesomeIcon icon={faInstagram} />
                    Instagram
                    </a></li>
            </ul>
        </section>
    )
}

export default Contact