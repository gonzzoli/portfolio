import { faThLarge, faThList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Projects.module.scss'
import ProjectComponent from './ProjectComponent/ProjectComponent'
import { projects } from './projects-data'
import { useContext, useState } from 'react'
import { LanguageContext } from '../store/lang-context'

function Projects() {
    const [isListMode, setIsListMode] = useState(true)
    const [showViewOptions, setShowViewOptions] = useState(window.innerWidth>768)
    const langCtx = useContext(LanguageContext)
    
    function checkWidth() {
        if(window.innerWidth <=768) {
            setIsListMode(false)
            setShowViewOptions(false)
            return
        }
        setShowViewOptions(true)
    }

    window.addEventListener('resize', checkWidth)
    return (
        <section id='projects' className={classes['projects-section']}>
            <div className={classes['projects-header']}>
                <span></span>
                <h3 className={classes.title}>
                    {langCtx.selectedLang==='español'?'Mis Proyectos':'My Projects'}
                </h3>
                {/* {showViewOptions && <div className={classes['view-toggle']}>
                    <FontAwesomeIcon className={classes.icon} icon={faThList} />
                    <FontAwesomeIcon className={classes.icon} icon={faThLarge} />
                </div>} */}
            </div>
            <div className={classes['projects-container']}>
                {projects.map(project => <ProjectComponent lang={langCtx.selectedLang} data={project} key={project.title} />)}
                <div className={classes.spacer}></div>
            </div>
        </section>
    )
}

export default Projects