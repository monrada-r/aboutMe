import { Link } from 'react-router-dom';
import '../Styles/SubNav.css';

function SubNav() {
    return (
        <div className="subNav">
            <Link to="/aboutMe" className='room' id='aboutMe'>About</Link>
            <Link to="/travels" className='room' id='travels'>Travels</Link>
            <Link to="/pet" className='room' id='pet'>Pet</Link>
            <Link to="/hobbies" className='room' id='hobbies'>Hobbies</Link>
            <Link to="/contact" className='room' id='contact'>Contact</Link>
        </div>
    )
}



export default SubNav