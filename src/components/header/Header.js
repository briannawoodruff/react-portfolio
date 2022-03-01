import Navigation from './Navigation';
import './header.css';
import { Link } from 'react-router-dom'

export default function Head() {
    return (
        <div className="navbar">
            <Link to='/about-me'>
                <h1>Brianna Woodruff</h1>
            </Link>
            <Navigation />
        </div>
    )
}