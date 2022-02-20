import React, { Fragment } from 'react';
import Button from './Button';

const Home = () => {
    return (
       <Fragment>
            <div className='Home'>
                <Button
                    text = { "YouTube" }
                    handleClick = { () => window.open("https://www.youtube.com/c/WhiteFyr", "_blank") }
                />
            </div>
        </Fragment>
    );
}

export default Home;