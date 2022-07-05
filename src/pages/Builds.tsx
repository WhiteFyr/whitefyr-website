import React from 'react';
import StyledNavbar from '../components/Navbar';
import styled from 'styled-components';

const navigation = {
    nav: [
      { name: "Home", to: "/" },
      { name: "About Me", to: "/about" },
      { name: "Builds", to: "/builds" },
      { name: "Downloads", to: "/downloads" },
      { name: "Contact Me", to: "/contact" },
    ],
    social: [
      { name: "YouTube", to: "/about" },
      { name: "Twitch", to: "/builds" },
      { name: "Twitter", to: "/downloads" },
      { name: "Instagram", to: "https://www.instagram.com/whitefyr/" },
      { name: "Discord", to: "/contact" },
    ]
}

const Builds = () => {
    return (
        <div className="Builds">
            <StyledNavbar nav={navigation.nav} social={navigation.social}/>
        </div>
    )
};

export default Builds;