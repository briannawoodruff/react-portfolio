import './project.css';


export default function Project() {
    return (
        <section id="Work" className="Work">
            {/* <div className="card">
                <h2 id="projectstitle">Projects</h2>
            </div> */}

            <div className="container">
                <a target="_blank" href="https://unpuffd.herokuapp.com/">
                    <div className="code-card unpuffd">
                        <h3 className="card-header">UnPuffd</h3>
                    </div>
                </a>
            </div>
            
            <div className="container">
                <a target="_blank" href="https://the-mvc-techblog.herokuapp.com/">
                    <div className="code-card tech-blog">
                        <h3 className="card-header">The Tech Blog</h3>
                    </div>
                </a>
            </div>

            <div className="container">
                <a target="_blank" href="https://coding-p1-g1.github.io/muvd/">
                    <div className="code-card muvd">
                        <h3 className="card-header">muvd</h3>
                    </div>
                </a>
            </div>
                
            <div className="container">
                <a target="_blank" href="https://note-taker-app-bw.herokuapp.com/">
                    <div className="code-card note-taker">
                        <h3 className="card-header">The Note Taker</h3>
                    </div>
                </a>
            </div>
        </section>
    )
}