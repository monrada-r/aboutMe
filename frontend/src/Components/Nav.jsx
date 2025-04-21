import webLogo from '/logo.png'
import '../Styles/Nav.css'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <>
            <Link to="/">
                <nav className='navBar'>
                    <img src={webLogo} className="navLogo" alt="Web logo" />
                    <span className='webTitle'>MINTY’S PERSONAL MUSEUM</span>
                </nav>
            </Link>
        </>
    )
}

export default Nav