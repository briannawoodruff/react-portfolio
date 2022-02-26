import logo from './logo.svg';
import './App.css';
// ant.design
import 'antd/dist/antd.css';
// font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faPerson, faMailReply } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faInstagram, faVimeo } from '@fortawesome/free-brands-svg-icons'
// routing
import { NavLink, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
