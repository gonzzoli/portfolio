import classes from './ContactForm.module.scss'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState, Fragment, useContext } from 'react'
import {LanguageContext} from '../../store/lang-context'
gsap.registerPlugin(ScrollTrigger)

const spanishText = {
    mailLabel: 'Tu Email',
    messageLabel: 'Mensaje',
    button: 'Enviar mail',
    sending: 'Enviando...',
    error: 'Algo falló, intenta refrescar la página!',
    success: 'Gracias! Intentaré responder pronto.'
}

const englishText = {
    mailLabel: 'Your Email',
    messageLabel: 'Message',
    button: 'Send mail',
    sending: 'Sending...',
    error: 'Something went wrong, try refreshing the page!',
    success: "Thanks! I'll try to answer soon."
}

function ContactForm() {
    const containerRef = useRef()
    const [sendingForm, setSendingForm] = useState(false)
    const [formStatus, setFormStatus] = useState('unsent')
    const langCtx = useContext(LanguageContext)
    const displayText = langCtx.selectedLang==='español' ? spanishText : englishText

    useEffect(() => {
        gsap.from(containerRef.current, {scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center+=270',
            toggleActions: 'play none none reverse'
        },opacity: 0, width: 50, duration: .4})
    }, [])

    function success() {
        setFormStatus('sent')
        setSendingForm(false)
    }

    function error() {
        setFormStatus('error')
        setSendingForm(false)
    }

    function formSubmitHandler(e) {
        e.preventDefault()
        setSendingForm(true)
        const form = containerRef.current
        const data = new FormData(form)
        ajax(form.method, form.action, data, success, error)
    }

    function ajax(method, url, data, success, error) {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.setRequestHeader('Accept', 'application/json')
        xhr.onreadystatechange = () => {
            if(xhr.readyState !== XMLHttpRequest.DONE) return
            if(xhr.status === 200) {
                success(xhr.response, xhr.responseType)
            } else {
                error(xhr.status, xhr.response, xhr.responseType)
            }
        }
        xhr.send(data)
    }
    return (
        <Fragment>
            <form
            action='https://formspree.io/f/xgedaprp'
            method='POST'
            ref={containerRef} 
            className={classes.form}
            onSubmit={formSubmitHandler}>
                <label htmlFor='email' form='email'>{displayText.mailLabel}</label>
                <input id='email' name='email' type='email' required />
                <label htmlFor='message' form='message'>{displayText.messageLabel}</label>
                <textarea name='message' id='message' required />
                <button type={sendingForm ? 'button' : 'submit'} className={classes.button}>
                    {sendingForm ? displayText.sending : displayText.button}
                </button>
            </form>
            <p className={formStatus==='sent'?classes.success:'error'}>
                {formStatus==='unsent'?'':(formStatus==='sent' ? displayText.success : displayText.error)}
            </p>
        </Fragment>
    )
}

export default ContactForm