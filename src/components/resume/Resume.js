import './resume.css';
import '../contact-me/contactme.css';
import Aside from '../contact-me/Aside'
import downloadResume from '../../assets/files/Brianna-Woodruff_Resume-2022.pdf'

export default function Resume() {
    return (
        <section className="card Resume">
           <Aside /> 

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