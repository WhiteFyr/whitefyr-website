import React from 'react';
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

const Home = () => {   
    return (
        <div className='Main'>
            <StyledNavbar nav={navigation.nav} social={navigation.social}/>
            <h1>Welcome to WhiteFyr's Website!</h1>
            <YouTubeVideos></YouTubeVideos>
            <TwitchStream></TwitchStream>
        </div>
    );
}

export default Home;