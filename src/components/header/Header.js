import Navigation from './Navigation';
import './header.css';
// ant.design
import 'antd/dist/antd.css';
import { Layout } from 'antd';
const { Header } = Layout;


export default function Head() {
    return (
        <div className="navbar">
            <h1>Brianna Woodruff</h1>
            <Navigation />
        </div>
    )
}