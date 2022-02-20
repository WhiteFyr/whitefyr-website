import React, { Fragment } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: black;
    font-size: 32px;
    color: white;
`;

class CustomButton extends React.Component<any, any> {
    constructor(props: any) {
        super( props );
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        window.alert( "hello world!" );
    }

    render() {
        return (
            <StyledButton onClick={ this.handleClick }>This Is A Button</StyledButton>
        );
    }
}

const Home = () => {
    return (
       <Fragment>
            <div>
                <CustomButton/>
            </div>
        </Fragment>
    );
}

export default Home;