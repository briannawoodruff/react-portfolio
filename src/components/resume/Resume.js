import './resume.css';
import ProfileImg from '../../assets/images/headshot2022.jpg'
import downloadResume from '../../assets/files/Brianna-Woodruff_Resume-2022.pdf'

export default function Resume() {
    return (
        <section className="card Resume">
            {/* <h2 id="resumetitle">Resume</h2> */}
            <aside>
                <div className="avatar">
                    <img src={ProfileImg} height={300} width={300} className="profile-img" alt="profileimg" />
                </div>
                <div className="aboutlinks">
                    <a target="_blank" rel="noreferrer" href="https://github.com/briannawoodruff"> GitHub</a>
                    <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/briannaewoodruff/"> LinkedIn</a>
                    <a target="_blank" rel="noreferrer" href="https://vimeo.com/294283512/"> Vimeo Reel</a>
                </div>
            </aside>

            <div className="info">
                <p>
                    You can download my resume here: 
                </p>
                <a id="resumedownload" href={downloadResume} download> Download Resume
                </a>
            </div>
        </section>
    )
}