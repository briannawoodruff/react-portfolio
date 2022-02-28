import logo from './logo.svg';
import './App.css';
import './style.css';
import { NavLink, Routes, Route } from 'react-router-dom'
import Head from './components/header/Header'
import AboutMe from './components/about-me/AboutMe'
import Project from './components/project/Project'

// ant.design
import 'antd/dist/antd.css';

// font awesome icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCode, faPerson, faMailReply } from '@fortawesome/free-solid-svg-icons'
// import { faGithub, faLinkedin, faInstagram, faVimeo } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <main className="App">
      <Head />
      <Routes>
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/portfolio' element={<Project />} />
        {/* <Route path='/contact-me' element={<Sports />} /> */}
        {/* <Route path='/resume' element={<Weather />} /> */}
      </Routes>
    </main>
  );
}

export default App;
