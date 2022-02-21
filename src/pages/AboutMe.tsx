import React from 'react';
import StyledNavbar from '../components/Navbar';

const navigation = {
    brand: { name: "StyledNavbar", to: "/" },
    links: [
      { name: "About Me", to: "/about" },
      { name: "Builds", to: "/builds" },
      { name: "Downloads", to: "/downloads" },
      { name: "Contact Me", to: "/contact" },
    ]
}

const AboutMe = () => {
    return (
        <div className="AboutMe">
            <StyledNavbar brand={navigation.brand} links={navigation.links}/> 
        </div>
    )
};

export default AboutMe;