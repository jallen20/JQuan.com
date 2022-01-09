import styled from 'styled-components';

const BackGroundOverlayContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
    padding: 0;
    z-index: -1;
    
    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

const BackgroundPhotoContainer1 = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    
    @media screen and (max-width: 1000px) {
        position: relative;
        align-self: center;
        margin: none;
    }
`;

const BackgroundPhotoContainer2 = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    transform: rotate(180deg);
    
   @media screen and (max-width: 1000px) {
        position: relative;
        align-self: center;
        margin: none;
    }
`;

export {
    BackGroundOverlayContainer,
    BackgroundPhotoContainer1,
    BackgroundPhotoContainer2
}