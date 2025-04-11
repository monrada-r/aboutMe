import webLogo from '/logo.png'
import './Nav.css'

function Nav() {
    return (
        <nav className='navBar'>
            <div><img src={webLogo} className="logo" alt="Vite logo" /></div>
            <div className='contactLink'>Contact me</div>
        </nav>
    )
}

export default Nav