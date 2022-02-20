import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: black;
    font-size: 26px;
    color: white;
`;

interface ButtonProps {
    text: string,
    handleClick: () => void
}

class Button extends React.Component< ButtonProps > {
    render() {
        return (
            <StyledButton onClick={ this.props.handleClick }>
                { this.props.text }
            </StyledButton>
        );
    }
}

export default Button;