import habitsImg1 from '../img/habits-img/habits-img1.png'
import habitsImg2 from '../img/habits-img/habits-img2.png'
import habitsImg3 from '../img/habits-img/habits-img3.png'
import colorsImg1 from '../img/colors-img/colors-img1.png'
import colorsImg2 from '../img/colors-img/colors-img2.png'
import colorsImg3 from '../img/colors-img/colors-img3.png'
import colorsImg4 from '../img/colors-img/colors-img4.png'

export const projects = [
    {
        title: 'Habit Crash',
        description: {
            english: `An app ready to be implemented with a
            backend, designed to keep track of the user
            habits and goals.`,
            spanish: `Una app lista para ser implementada con un backend
            , diseñada para mantener un registro de los hábitos y metas
            del usuario.`
        },
        pageLink: 'https://habit-crash.web.app/habits-list',
        githubLink: 'https://github.com/gonzzoli/habits-app',
        techNames: ['SASS', 'React', 'Javascript', 'HTML5', 'CSS'],
        imgPaths: [habitsImg1, habitsImg2, habitsImg3]
    },
    {
        title: 'Colors Picker',
        description: {
            english: `A color randomizer app to select and test
            different combinations on common web
            layouts, getting both hexadecimal and rgb values.`,
            spanish: `Una app de colores aleatorios para elegir y
            probar diferentes combinaciones en prototipos comúnes 
            de páginas web, obteniendo los valores hexadecimales y rgb.`
        },
        pageLink: 'https://colors-picker.web.app/',
        githubLink: 'https://github.com/gonzzoli/color-palette-v2',
        techNames: ['TailwindCSS', 'React', 'Javascript', 'Redux',
         'HTML5', 'CSS'],
        imgPaths: [colorsImg1, colorsImg2, colorsImg3, colorsImg4]
    },
]