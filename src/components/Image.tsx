import React from 'react';
import styled from 'styled-components';

export const StyledImageWrapper = styled.div`
    display: flex;
    position: relative;
    margin: 16px;
`;

const StyledImage = styled.img`
    width: 500px;
    height: 100%;
    object-fit: cover;
`;

interface Props {
    imageUrl: string;
}

const Image: React.FC<Props> = ({ imageUrl }) => {
    return (
        <StyledImageWrapper>
            <StyledImage src={imageUrl} />
        </StyledImageWrapper>
    )
};

export default Image;