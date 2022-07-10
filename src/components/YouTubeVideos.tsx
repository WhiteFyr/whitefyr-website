import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import styled from 'styled-components';

export const StyledYouTubeVideos = styled.div`
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const YouTubeVideos = () => {
    return (
        <div className = "YouTubeVideos">
            <StyledYouTubeVideos>
            <iframe
                width="560"
                height="315"
                src="http://www.youtube.com/embed/videoseries?listType=playlist&list=PLkfCigxI45aq9teLLYVbITfRsIGhJsBTU&autoplay=0"
                frameBorder="0"
                allowFullScreen
            ></iframe>
            </StyledYouTubeVideos>
        </div>
    )
}

export default YouTubeVideos;