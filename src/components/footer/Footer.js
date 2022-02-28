import './footer.css';
// font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram, faVimeo } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer>
            {/* <p>
            &copy; 2022 Brianna Woodruff
        </p> */}
            <a target="_blank" href="https://github.com/briannawoodruff"> <FontAwesomeIcon icon={faGithub}/></a>
            <a target="_blank" href="https://linkedin.com/in/briannaewoodruff/"> <FontAwesomeIcon icon={faLinkedin}/></a>
            <a target="_blank" href="https://vimeo.com/294283512/"> <FontAwesomeIcon icon={faVimeo}/></a>
        </footer>
    )
}