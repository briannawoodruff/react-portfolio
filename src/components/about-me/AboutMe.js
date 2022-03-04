import './aboutme.css';
import ProfileImg from '../../assets/images/headshot2022.jpg'
import { NavLink } from 'react-router-dom'

export default function AboutMe() {
    return (
        <section id="About-Me" className="card About-Me">
            <div className="avatar-container">
                <img src={ProfileImg} height={300} width={300} className="profileimg" alt="profileimg" />
            </div>
            <div className="aboutmelinks">
                <NavLink to='/resume' id="resume">
                    Resume
                </NavLink>
                <a id="github" target="_blank" rel="noreferrer" href="https://github.com/briannawoodruff"> GitHub</a>
                <a id="linkedin" target="_blank" rel="noreferrer" href="https://linkedin.com/in/briannaewoodruff/"> LinkedIn</a>
                <a id="vimeo" target="_blank" rel="noreferrer" href="https://vimeo.com/294283512/"> Vimeo Reel</a>
            </div>
            <div className="text">
                <p>
                    Hi, I’m Brianna Woodruff. I am currently a student of Northwestern’s Full Stack Coding Bootcamp. My goal
                    is to become a software engineer where I can combine my creative skills from my arts background with the
                    technical skills I am learning in this program.
                </p>
                <p>
                    I am originally from central Wisconsin and got my undergraduate degree from University of Wisconsin –
                    Madison. I have a 5 year background in film production and an 8 year background in the floral industry.
                    I currently work at a luxury florist, Luxe Bloom LLC., where I manage large and small scale projects and
                    handcraft luxury arrangements.
                </p>
            </div>
        </section>
    )
}