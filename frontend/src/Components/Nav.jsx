import webLogo from '/logo.png'
import '../Styles/Nav.css'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className='navBar'>
            <Link to="/"><img src={webLogo} className="navLogo" alt="Web logo" /></Link>
            <span className='webTitle'>MINTY’S PERSONAL MUSEUM</span>
        </nav>
    )
}

export default Nav