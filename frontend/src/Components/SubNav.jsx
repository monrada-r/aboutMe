import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../Styles/SubNav.css';

function SubNav() {

    const [isMobile, setMobile] = useState(window.innerWidth <= 768);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const currentlyMobile = window.innerWidth <= 768;
            setMobile(currentlyMobile);

            // Close dropdown when switching between mobile and desktop
            if (!currentlyMobile) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <div className="navContainer">
            <div className="subNavHeader">
                {isMobile && (
                    <button className="dropdownToggle" onClick={() => setIsOpen(!isOpen)}>
                        ▼
                    </button>
                )}
            </div>
            <div className={`subNav ${isMobile ? (isOpen ? "show" : "hide") : ""}`}>
                <NavLink to="/" className='room' id='home'>Home</NavLink>
                <NavLink to="/aboutMe" className='room' id='aboutMe'>About Me</NavLink>
                <NavLink to="/travels" className='room' id='travels'>Travels</NavLink>
                {/* <NavLink to="/pet" className='room' id='pet'>Pets</NavLink>
            <NavLink to="/hobbies" className='room' id='hobbies'>Hobbies</NavLink>
            <NavLink to="/contact" className='room' id='contact'>Contact</NavLink> */}
            </div>
        </div>
    );

}

export default SubNav