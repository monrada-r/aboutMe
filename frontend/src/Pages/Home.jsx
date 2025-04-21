import '../Styles/Home.css'
import imgHome from '../assets/home-img.jpg'

function Home() {
    return (
        <div className='home'>
            <div>
                <img src={imgHome} className="imgHome" alt="Home image" />
            </div>
            <div className='welcomeText'>
                <h2>Welcome to Minty's Personal Museum</h2>
                <p>This project began on April 10th, 2025 - just shortly after I graduated. I'm building this website in my free time as a way to put every technical skills I've learned during My Master of IT into practice :D</p>
                <p>It's a work in progress, so feel free to reach out if you would like to know more!</p>
                <p>Thanks so much for visiting ^^</p>
            </div>
        </div>
    )
}

export default Home
