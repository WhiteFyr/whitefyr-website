import React from 'react';
import styled from "styled-components";
import StyledNavbar from '../components/Navbar';
import TwitchStream from '../components/TwitchStream';
import YouTubeVideos from '../components/YouTubeVideos';

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

// <div className="g-ytsubscribe" data-channel="2NYpls0vlrxwWQppm9vQ7w" data-layout="full" data-theme="dark" data-count="default"></div>

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {   
    return (
        <div className='Main'>
          <StyledNavbar nav={navigation.nav} social={navigation.social}/>
            <HomeContainer>
              <h1>Welcome to WhiteFyr's Website!</h1>
              <YouTubeVideos></YouTubeVideos>
              <TwitchStream></TwitchStream>
            </HomeContainer>
        </div>
    );
}

export default Home;