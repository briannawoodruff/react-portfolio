import './header.css';
// routing
import AboutMe from '../about-me/AboutMe'
import { NavLink, Routes, Route } from 'react-router-dom'


export default function Navigation() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/about-me' style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'red', textDecoration: 'none'}}>
                            About Me
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/portfolio' style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'red', textDecoration: 'none'}}>
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact-me' style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'red', textDecoration: 'none'}}>
                            Contact Me
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/resume' style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'red', textDecoration: 'none'}}>
                            Resume
                        </NavLink>
                    </li>
                </ul>
            </nav>
            {/* <Routes> */}
            {/* <Route path='/about-me' element={<AboutMe />} /> */}
            {/* <Route path='/portfolio' element={<News />} /> */}
            {/* <Route path='/contact-me' element={<Sports />} /> */}
            {/* <Route path='/resume' element={<Weather />} /> */}
            {/* </Routes> */}
        </>
    )
}