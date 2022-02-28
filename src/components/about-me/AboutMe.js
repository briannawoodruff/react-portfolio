import './aboutme.css';
import ProfileImg from '../../assets/images/headshot2022.jpg'
import Resume from '../../assets/files/Brianna-Woodruff_Resume-2022.pdf'

export default function AboutMe() {
    return (
        <section id="About-Me" className="card About-Me">
            {/* <h2 id="aboutmetitle">About Me</h2> */}
            <div className="avatar">
                <img src={ProfileImg} height={300} width={300} className="profile-img" alt="profileimg" />
            </div>
            <div className="aboutmelinks">
                <a id="resume" href={Resume} download> Resume
                </a>
                <a id="github" target="_blank" href="https://github.com/briannawoodruff"> GitHub</a>
                <a id="linkedin" target="_blank" href="https://linkedin.com/in/briannaewoodruff/"> LinkedIn</a>
                <a id="vimeo" target="_blank" href="https://vimeo.com/294283512/"> Vimeo Reel</a>
            </div>
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
        </section>
    )
}