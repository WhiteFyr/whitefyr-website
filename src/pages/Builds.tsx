import React from 'react';
import styled from 'styled-components';
import StyledNavbar from '../components/Navbar';
import Image from '../components/Image';

const build1 = require('../images/afterlife_s5_house.png');

const navigation = {
    nav: [
      { name: "Home", to: "/" },
      { name: "About Me", to: "/about" },
      { name: "Builds", to: "/builds" },
      { name: "Downloads", to: "/downloads" },
      { name: "Contact Me", to: "/contact" },
    ],
    social: [
      { name: "YouTube", to: "https://bit.ly/FyrTube" },
      { name: "Twitch", to: "https://bit.ly/FyrTwitch" },
      { name: "Twitter", to: "https://bit.ly/FyrTweets" },
      { name: "Instagram", to: "https://bit.ly/FyrInsta" },
      { name: "Discord", to: "https://bit.ly/TheFyrCord" },
    ]
}

const BuildsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Builds = () => {
    return (
        <div className="Builds">
            <StyledNavbar nav={navigation.nav} social={navigation.social}/>
            <BuildsContainer>
              <h1>These are my builds!</h1>
              <Image 
                imageUrl='../images/afterlife_s5_house.png'
                useFallback={true}
                useFade={true}>
              </Image>
            </BuildsContainer>
        </div>
    )
};

export default Builds;