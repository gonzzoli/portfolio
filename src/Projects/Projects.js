import { faThLarge, faThList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Projects.module.scss'
import ProjectComponent from './ProjectComponent/ProjectComponent'
import { projects } from './projects-data'
import { useContext, useState, Fragment, useEffect } from 'react'
import { LanguageContext } from '../store/lang-context'

function Projects() {
    // const [isListMode, setIsListMode] = useState(true)
    // const [showViewOptions, setShowViewOptions] = useState(window.innerWidth>768)
    const langCtx = useContext(LanguageContext)
    const [isMidScreen, setIsMidScreen] = useState(window.innerWidth<=1100)
    // function checkWidth() {
    //     if(window.innerWidth <=768) {
    //         setIsListMode(false)
    //         setShowViewOptions(false)
    //         return
    //     }
    //     setShowViewOptions(true)
    // }
    useEffect(() => {
        function checkWidth() {
            if(window.innerWidth <= 1100) {
                setIsMidScreen(true)
                return
            }
            setIsMidScreen(false)
        }
        window.addEventListener('resize', checkWidth)

    }, [])
    
    return (
        <section id='projects' className={classes['projects-section']}>
            <div className={classes['projects-header']}>
                <span></span>
                <h3 className={classes.title}>
                    {langCtx.selectedLang==='español'?'Mis Proyectos':'My Projects'}
                </h3>
                {/*This will be useful for when i have more projects, like 6 */}
                {/* {showViewOptions && <div className={classes['view-toggle']}>
                    <FontAwesomeIcon className={classes.icon} icon={faThList} />
                    <FontAwesomeIcon className={classes.icon} icon={faThLarge} />
                </div>} */}
            </div>
            <div className={classes['projects-container']}>
                {projects.map((project, index) => {
                    //Checks if its the last project to add or
                    //not add the spacer below
                    if(index===projects.length-1) {
                        return (
                            <div key={project.title} style={{display: 'flex', flexDirection: 'column'}}>
                                <ProjectComponent
                                lang={langCtx.selectedLang} isMidScreen={isMidScreen} 
                                data={project} key={project.title}/>
                                <div className={classes['projects-contact-spacer']}></div>
                            </div>
                        )
                    }
                    return (
                        <div key={project.title} style={{display: 'flex', flexDirection: 'column'}}>
                            <ProjectComponent
                            isMidScreen={isMidScreen}
                            lang={langCtx.selectedLang} 
                            data={project}  />
                            <div className={classes['projects-spacer']}></div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects