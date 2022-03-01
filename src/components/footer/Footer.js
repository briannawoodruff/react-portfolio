import './footer.css';
// font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faVimeo } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer>
            <a target="_blank" rel="noreferrer" href="https://github.com/briannawoodruff"> <FontAwesomeIcon icon={faGithub}/></a>
            <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/briannaewoodruff/"> <FontAwesomeIcon icon={faLinkedin}/></a>
            <a target="_blank" rel="noreferrer" href="https://vimeo.com/294283512/"> <FontAwesomeIcon icon={faVimeo}/></a>
        </footer>
    )
}