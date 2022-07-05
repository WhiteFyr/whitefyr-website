import React from 'react';
import StyledNavbar from '../components/Navbar';
import styled from 'styled-components';

const navigation = {
    brand: { name: "WhiteFyr", to: "/" },
    links: [
      { name: "About Me", to: "/about" },
      { name: "Builds", to: "/builds" },
      { name: "Downloads", to: "/downloads" },
      { name: "Contact Me", to: "/contact" },
    ]
}

const customH1 = styled.h1`
    texAlign: center;`;

const Builds = () => {
    return (
        <div className="Builds">
            <StyledNavbar brand={navigation.brand} links={navigation.links}/>
        </div>
    )
};

export default Builds;