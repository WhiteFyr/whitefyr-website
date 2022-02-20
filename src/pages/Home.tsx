import React, { Fragment } from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import Button from '../components/Button';
import StyledNavbar from '../components/Navbar';

const navigation = {
    brand: { name: "StyledNavbar", to: "/" },
    links: [
      { name: "About Me", to: "/about" },
      { name: "Builds", to: "/builds" },
      { name: "Downloads", to: "/downloads" },
      { name: "Contact Me", to: "/contact" },
    ]
  }

const Home = () => {
    return (
       <Fragment>
            <div>
                <StyledNavbar brand={navigation.brand} links={navigation.links}/>           
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