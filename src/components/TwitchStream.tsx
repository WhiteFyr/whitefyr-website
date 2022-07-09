import React from 'react';
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
import "../css/styles.css";

const TwitchStream = () => {   
    return (         
        <div className="center-text" >
            <ReactTwitchEmbedVideo channel="whitefyr" height="520" width="1000" muted={true} autoplay={false}/>
        </div>
    );
}

export default TwitchStream;