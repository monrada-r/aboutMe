import '../Styles/Home.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {

    const [imageUrl, setImageUrl] = useState("")

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const res = await axios.get('http://localhost:3000/api/home-image')
                setImageUrl(res.data.imageUrl)
            } catch (err) {
                console.error("Failed to load image", err)
            }
        }

        fetchImage()
    }, [])


    return (
        <div className='home'>
            <div>
                {imageUrl ? <img src={imageUrl} className="img" alt="Home image" /> : null}
            </div>
            <div className='welcomeText'>
                <h2>Welcome to Minty's Personal Museum</h2>
                <p>This project began on April 10th, 2025 - just shortly after I graduated. I'm building this web app in my free time as a way to put every technical skills I've learned during My Master of IT into practice :D</p>
                <p>It's a work in progress, so feel free to reach out if you have any questions about my skills or would like to know more!</p>
                <p>Thanks so much for visiting ^^</p>
            </div>
        </div>
    )
}

export default Home
