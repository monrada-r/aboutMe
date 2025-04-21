import '../Styles/AboutMe.css'

function AboutMe() {

    return (
        <>
            <div className='card' id='card1'>
                <span className='story'>
                    <h2>Present (April 2025)</h2>
                    I'm now 25 years old and just graduated with a Master's degree in Information Technology. I'm currently seeking a position in IT, specifically a Business analyst, Web developer, or UX/UI designer/researcher. While I don't yet have formal work experience in the field, I've worked on different university projects that have strengthened my skills. I'm confident in my ability to learn quickly and adapt. I'm open-minded, highly responsible and eager to join a team where I can grow and make an impact. I'm hopeful someone will give me the opportunity to begin my first IT career soon 😊.
                </span>
                <div className="image1-wrapper">
                    <img src="src/assets/decAbtMe1.png" id="dec1" alt="dec1" />
                    <img src="src/assets/abtme1.png" id="abtme1" alt="abtme1" />
                </div>
            </div>
            <div className='card' id='card2'>
                <img src="src/assets/abtme2.jpg" id="abtme2" alt="abtme2" />
                <span className='story'>
                    <h2>My First Job (Sep 2022 - Jan 2023)</h2>
                    I worked as an HR & Admin assistant for Kokotel Thailand, a hotel management company, after graduating. It was my first full-time job, and I'm truly grateful for the opportunity they gave me as a new grad. I enjoyed working with people in the HR field, but with my family's encouragement and support, I decided to pursue a Master's degree in Information Technology to gain the technical knowledge and skills I felt I was missing. </span>
            </div>
            <div className='card' id='card3'>
                <span className='story'>
                    <h2>University (2018 - 2022)</h2>
                    I graduated from Chulalongkorn University with a Bachelor of Science in Psychology. I’ve always been fascinated by the human mind and behaviour, and I truly enjoy exploring it further. This program taught me valuable skills—especially active listening and empathy—not only toward others but also toward myself. These lessons have had a meaningful impact on both my personal and professional life.
                </span>
                <img src="src/assets/abtme3.jpg" id="abtme3" alt="abtme3" />
            </div>
            <div className='card'>
                <div className="image4-wrapper">
                    <img src="src/assets/decAbtMe4.png" id="dec4" alt="dec4" />
                    <img src="src/assets/decAbtMe4.png" id="dec4-1" alt="dec4-1" />
                    <img src="src/assets/abtme4.png" id="abtme4" alt="abtme4" />
                </div>
                <span className='story'>
                    <h2>School (2006 - 2018)</h2>
                    I studied at an all-girls school (Saint Joseph Convent School) for 12 years! It could be extremely boring at times, but overall, I think it was fine. 😉 Some of my best memories were when I got the chance to tell a story during the morning announcements in the record room, and when I got to raise the national flag at school in the morning. 😄

                </span>
            </div>
            <div className='card' id='card5'>
                <span className='story'>
                    <h2>Exchange Year (2015 - 2016)</h2>
                    I was an exchange student in Russia for about 10 months. Living outside of your comfort zone with strangers wasn’t easy at all, but I was lucky to have a wonderful host family who treated me kindly and took great care of me. It’s such a precious memory that I still cherish.</span>
                <img src="src/assets/abtme5.jpg" id="abtme5" alt="abtme5" />
            </div>
            <div className='card' id='card6'>
                <img src="src/assets/abtme6.jpg" id="abtme6" alt="abtme6" />
                <span className='story'>
                    <h2>Little me</h2>
                    I was born in 1999 and spent my early childhood in Prachin Buri province before moving to Bangkok.</span>

            </div>
        </>
    )

}

export default AboutMe