import classes from './LanguageSelect.module.scss'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState, useContext, Fragment } from 'react'
import {LanguageContext} from '../../store/lang-context'

const options = ['english', 'español']

function LanguageSelect(props) {
    const langCtx = useContext(LanguageContext)
    const [showOptions, setShowOptions] = useState(false)
    
    useEffect(() => {
        document.addEventListener('click', (e) => {
            if(e.target.id !== 'option' && e.target.id !== 'language-select') {
                setShowOptions(false)
            }
        })
    }, [])

    function toggleShowOptions() {
        setShowOptions(prevState => !prevState)
    }

    function changeLanguage(e) {
        e.stopPropagation()
        langCtx.changeLang(e.target.textContent)
        setShowOptions(false)
    }
    
    return (
        <Fragment>
            <div onClick={toggleShowOptions} id='language-select' className={classes['language-select']}>
                <p className={classes.selected} id='option'>{langCtx.selectedLang}</p>
                <FontAwesomeIcon id='option' className={`${classes.icon} ${showOptions?classes.active:''}`} icon={faChevronDown} />
                {!props.smallScreen && showOptions && <ul className={classes.dropdown}>
                    {options.filter(option=>option!==langCtx.selectedLang).map(option => {
                        return (
                        <li key={option} id='option' onClick={changeLanguage} className={classes.option}>
                            {option}
                        </li>
                        )
                    })}
                </ul>}
            </div>
            {props.smallScreen && showOptions && <ul className={classes.dropdown}>
                    {options.filter(option=>option!==langCtx.selectedLang).map(option => {
                        return (
                        <li key={option} id='option' onClick={changeLanguage} className={classes.option}>
                            {option}
                        </li>
                        )
                    })}
                </ul>}
        </Fragment>
    )
}

export default LanguageSelect