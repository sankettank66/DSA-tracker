import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    const roles = ['Student', 'Coding Bootcamp Participant', 'Self-Learner', 'Job Seeker', 'Coding Enthusiast'];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayedRole, setDisplayedRole] = useState('');
    const [isErasing, setIsErasing] = useState(false);
    
    useEffect(() => {
        const roleLength = roles[currentRoleIndex].length;
        const delay = isErasing ? 100 : 200; // Adjust the delay time for typing and erasing

        if (!isErasing && displayedRole.length === roleLength) {
            setIsErasing(true);
            setTimeout(() => {
                setIsErasing(false);
                setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
            }, 1000); // Adjust the delay before typing the next role
        }

        const timeout = setTimeout(() => {
            if (isErasing) {
                setDisplayedRole((prevRole) => prevRole.slice(0, -1));
            } else {
                setDisplayedRole((prevRole) => roles[currentRoleIndex].slice(0, prevRole.length + 1));
            }
        }, delay);

        return () => {
            clearTimeout(timeout);
        };
    }, [currentRoleIndex, displayedRole, isErasing, roles]);

    useEffect(() => {
        setDisplayedRole('');
    }, [currentRoleIndex]);

    return (
        <div id="hero">
            <div>
                <h2 id="heading">
                    DSA Tracker for Placement Preparation<br />
                    <div id="tagLine">
                        Discover your path to success with DSA Tracker!🔥
                    </div>
                </h2>
                <div className="text">
                    If you&apos;re <span id="role">{displayedRole}</span><span className="cursor">|,<br /></span>
                    Unlock Your Algorithmic Potential by Clicking the <span id='unlock'>Unlock</span> Button Below.
                </div>
            </div>
            <Link to='/problems'>
            <button id='unlock-button'>Unlock🔑</button>
            </Link>
        </div>
    );
}

export default Hero;
