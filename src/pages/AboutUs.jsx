import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SanketImage from '../assets/Sanket.jpeg';
import DjImage from '../assets/dj.jpeg';
import MandImage from '../assets/mand.jpg';

function AboutUs() {
    // Sample data for demonstration
    const profiles = [
        {
            name: 'Sanket Tank',
            email: 'sankettank66@gmail.com',
            image: SanketImage,
            alt: 'Sanket Profile',
            number:9558711395,
        },
        {
            name: 'Manthan Dholariya',
            email: 'manthandholariya40@gmail.com',
            image: MandImage,
            alt: 'Mand Profile',
            number:8401836019,
        },
        {
            name: 'Jay Dabhi',
            email: 'jaydabhi240@gmail.com',
            image: DjImage,
            alt: 'DJ Profile',
            number:6353756527,
        },
    ];

    return (
        <React.Fragment>
            <Navbar />
            <div className="abtusheading">
                Team Marvelians
            </div>
            <div id="abtus">
                {profiles.map((profile, index) => (
                    <div key={index} className="card">
                        <div className="image">
                            <img src={profile.image} alt={profile.alt} />
                        </div>
                        <div className="details">
                            <h2>{profile.name}</h2>
                            <p>{profile.email}</p>
                            <p>{profile.number}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default AboutUs;
