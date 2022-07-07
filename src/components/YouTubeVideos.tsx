import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const API = '';
const channelID = 'UC2NYpls0vlrxwWQppm9vQ7w';
const numVideos = 3;

var googleURL = 'https://www.googleapis.com/youtube/v3/search?key=${API}&channelID=${channelID}&part=snippet&order=date&maxResults=${numVideos}';

const YouTubeVideos = () => {
    const fetchData = () => {
        fetch(googleURL)
            .then((response) => response.json())
            .then((data) => {
                return <h1>Fetched!</h1>
            })
    };

    useEffect(() => {
        fetchData();

    })

    return (
        <div className = "YouTubeVideos">
            <h1>Let's load YouTube videos!</h1>
        </div>
    )
}

export default YouTubeVideos;