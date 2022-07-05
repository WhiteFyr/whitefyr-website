import React from 'react';
import ReactTwitchEmbedVideo from "react-twitch-embed-video";

const TwitchStream = () => {   
    return (         
        <div className='TwitchStream'>
            <ReactTwitchEmbedVideo channel="whitefyr" height="520" width="1000" muted={true} autoplay={false} />
        </div>
    );
}

export default TwitchStream;