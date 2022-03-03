import './contactme.css';
import ProfileImg from '../../assets/images/headshot2022.jpg'
// import Resume from '../../assets/files/Brianna-Woodruff_Resume-2022.pdf'

export default function Aside() {
    return (
        <aside>
            <div className="avatar">
                <img src={ProfileImg} height={300} width={300} className="profile-img" alt="profileimg" />
            </div>
            <div className="aboutlinks">
                {/* <a href={Resume} download> Resume
                </a> */}
                <a target="_blank" rel="noreferrer" href="https://github.com/briannawoodruff"> GitHub</a>
                <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/briannaewoodruff/"> LinkedIn</a>
                <a target="_blank" rel="noreferrer" href="https://vimeo.com/294283512/"> Vimeo Reel</a>
            </div>
        </aside>
    )
}