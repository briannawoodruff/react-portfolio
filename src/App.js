import logo from './logo.svg';
import './App.css';
import './style.css';
import { NavLink, Routes, Route } from 'react-router-dom'
import Head from './components/header/Header'
import AboutMe from './components/about-me/AboutMe'
import Project from './components/project/Project'
import ContactMe from './components/contact-me/ContactMe'
import Footer from './components/footer/Footer'
// ant.design
import 'antd/dist/antd.css';


function App() {
  return (
    <>
    <main className="App">
      <Head />
      <Routes>
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/portfolio' element={<Project />} />
        <Route path='/contact-me' element={<ContactMe />} />
        {/* <Route path='/resume' element={<Weather />} /> */}
      </Routes>
      <Footer />
    </main>
    </>
  );
}

export default App;
