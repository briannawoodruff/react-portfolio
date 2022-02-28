import './header.css';
// routing
import { NavLink } from 'react-router-dom'


export default function Navigation() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/about-me' style={({ isActive }) => ({
                            color: isActive ? '#f12d51' : 'white'
                        })}
                        >
                            About Me
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/portfolio' style={({ isActive }) => ({
                            color: isActive ? '#f12d51' : 'white'
                        })}>
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact-me' style={({ isActive }) => ({
                            color: isActive ? '#f12d51' : 'white'
                        })}>
                            Contact Me
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/resume' style={({ isActive }) => ({
                            color: isActive ? '#f12d51' : 'white'
                        })}>
                            Resume
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}