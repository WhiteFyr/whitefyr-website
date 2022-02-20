import React, { Fragment } from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import Button from '../components/Button';
import StyledNavbar from '../components/Navbar';

const Home = () => {
    return (
       <Fragment>
            <div>
                <StyledNavbar>
                </StyledNavbar>            
            </div>
            <div className='Main'>
                <Button
                    text = { "YouTube" }
                    handleClick = { () => window.open("https://www.youtube.com/c/WhiteFyr", "_blank") }
                />
                <Button
                    text = { "Twitch" }
                    handleClick = { () => window.open("https://www.twitch.tv/whitefyr", "_blank") }
                />
                <Button
                    text = { "Twitter" }
                    handleClick = { () => window.open("https://twitter.com/WhiteFyr_", "_blank") }
                />
                <Button
                    text = { "Instagram" }
                    handleClick = { () => window.open("https://www.instagram.com/whitefyr/", "_blank") }
                />
            </div>
        </Fragment>
    );
}

export default Home;