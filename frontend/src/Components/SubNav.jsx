import { NavLink } from 'react-router-dom';
import '../Styles/SubNav.css';

function SubNav() {
    return (
        <div className="subNav">
            <NavLink to="/" className='room' id='home'>Home</NavLink>
            <NavLink to="/aboutMe" className='room' id='aboutMe'>About Me</NavLink>
            <NavLink to="/travels" className='room' id='travels'>Travels</NavLink>
            <NavLink to="/pet" className='room' id='pet'>Pets</NavLink>
            <NavLink to="/hobbies" className='room' id='hobbies'>Hobbies</NavLink>
            <NavLink to="/contact" className='room' id='contact'>Contact</NavLink>
        </div>
    )
}



export default SubNav