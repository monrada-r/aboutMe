import webLogo from '/logo.png'
import '../Styles/Nav.css'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className='navBar'>
            <Link to="/"><img src={webLogo} className="logo" alt="Vite logo" /></Link>
        </nav>
    )
}

export default Nav