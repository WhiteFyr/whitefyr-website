import React, { Fragment } from 'react';
import StyledNavbar from '../components/Navbar';
import { TwitchEmbed, TwitchEmbedLayout } from 'twitch-player';

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

// const embed = new TwitchEmbed('twitch-player', {
//     width: 1280,
//     height: 720,
//     channel: 'whitefyr',
//     layout: TwitchEmbedLayout.VIDEO_WITH_CHAT
// });

//<Button
//    text = { "YouTube" }
//    handleClick = { () => window.open("https://www.youtube.com/c/WhiteFyr", "_blank") }
///>

const Home = () => {   
    return (         
        <div className='Main'>
            <StyledNavbar nav={navigation.nav} social={navigation.social}/>
            <h1>Welcome to WhiteFyr's Website!</h1>
        </div>
    );
}

export default Home;