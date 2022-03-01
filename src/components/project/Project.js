import './project.css';
// font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Project() {
    return (
        <section id="project" className="project">
            <div className="container">
                <div className="code-card unpuffd">
                    <a target="_blank" rel="noreferrer" href="https://unpuffd.herokuapp.com/">
                        <h3 className="card-header">UnPuffd
                        <a className="icon" target="_blank" rel="noreferrer" href="https://github.com/coding-p2-g2/unpuffd"><FontAwesomeIcon icon={faGithub}/></a>
                        </h3>
                        <div className="unpuffd-text">
                            <p>
                                An application inspired by Untappd that allows people to learn about and review cannabis, if of legal age.
                            </p>
                            <p>
                                This application utilizes Node.JS, Express, Dotenv, Handlebars, bcrypt, MySQL, and Sequelize.
                            </p>
                        </div>
                    </a>
                </div>
            </div>

            <div className="container">
                <a target="_blank" rel="noreferrer" href="https://github.com/briannawoodruff/tech-blog-mvc">
                    <div className="code-card tech-blog">
                        <h3 className="card-header">The Tech Blog
                        <a className="icon" target="_blank" rel="noreferrer" href="https://github.com/briannawoodruff/tech-blog-mvc"><FontAwesomeIcon icon={faGithub}/></a>
                        </h3>
                        <div className="techblog-text">
                            <p>
                                AA CMS-style blog where developers can create blog posts and comment on other developers' posts.
                            </p>
                            <p>
                                This application uses Handlebars.js, Sequelize, and express-session npm for authentication.
                            </p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="container">
                <a target="_blank" rel="noreferrer" href="https://coding-p1-g1.github.io/muvd/">
                    <div className="code-card muvd">
                        <h3 className="card-header">muvd
                        <a className="icon" target="_blank" rel="noreferrer" href="https://github.com/coding-p1-g1/muvd/"><FontAwesomeIcon icon={faGithub}/></a>
                        </h3>
                        <div className="muvd-text">
                            <p>
                                Muvd is an application that allows users to search for movies, or suggests movies based on the user's mood.
                            </p>
                            <p>
                                This is an HTML, CSS, JavaScript application and uses API calls from The Movie Database and The New York Times.
                            </p>
                        </div>
                    </div>
                </a>
            </div>

            <div className="container">
                <a target="_blank" rel="noreferrer" href="https://note-taker-app-bw.herokuapp.com/">
                    <div className="code-card note-taker">
                        <h3 className="card-header">The Note Taker
                        <a className="icon" target="_blank" rel="noreferrer" href="https://github.com/briannawoodruff/note-taker-app"><FontAwesomeIcon icon={faGithub}/></a>
                        </h3>
                        <div className="muvd-text">
                            <p>
                                An application where a user is able to write and save notes to more efficiently organize and keep track of thoughts and tasks.
                            </p>
                            <p>
                                This application uses Express.js to retrieve notes saved into a created database.
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    )
}