import React, { useEffect, useState } from 'react';
import { MdImage } from 'react-icons/md';
import styled from 'styled-components';

// Most of this code was taken/based on code presented in this YouTube video: https://www.youtube.com/watch?v=4nYsbm8N4EQ
// It helped me a lot in understanding how to load images in React Typescript

export const StyledImageWrapper = styled.div`
    display: flex;
    position: relative;
    margin: 16px;
`;

export const StyledImage = styled.img`
    width: 500px;
    height: 100%;
    object-fit: cover;

    &.show {
        opacity: 1;
        visibility: visible;
        transition: opacity 0.5s ease-in;
    }

    &.hide {
        opacity: 0;
        visibility: hidden;
    }
`;

export const FallbackContainer = styled.div`
    padding: 16px;
    border: 1px dashed black;
    display: flex;
    height: 250px;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const ErrorLabel = styled.label`
    position: absolute;
    top: 8px;
    color: red;
    font-weight: bold;
    width: 100%;
`;

interface Props {
    imageUrl: string;
    useFallback?: boolean;
    useFade?: boolean;
}

enum ImageLoadingState {
    Init,
    Loading,
    Complete,
    Error
}

const Image: React.FC<Props> = ({ imageUrl, useFallback, useFade = true }) => {
    const [imageLoadingState, setImageLoadingState] = useState<ImageLoadingState>(
        ImageLoadingState.Init
    );

    useEffect(() => {
        setImageLoadingState(
            imageUrl ? ImageLoadingState.Loading : ImageLoadingState.Error
        );
    }, [imageUrl])

    if (!imageUrl) {
        return null;
    }

    if (imageLoadingState === ImageLoadingState.Error && useFallback){
        return (
            <FallbackContainer>
                <MdImage size="10em"/>
                <ErrorLabel>
                    Error loading image...
                </ErrorLabel>
            </FallbackContainer>
        )
    }

    return (
        <StyledImageWrapper>
            <StyledImage 
                src={imageUrl} 
                onLoad={() => setImageLoadingState(ImageLoadingState.Complete)}
                onError={() => setImageLoadingState(ImageLoadingState.Error)}
                className={
                    `${ useFade 
                        ? imageLoadingState === ImageLoadingState.Complete
                            ? "show"
                            : "hide"
                        : "hide" 
                    }`
                }
            />
        </StyledImageWrapper>
    )
};

export default Image;