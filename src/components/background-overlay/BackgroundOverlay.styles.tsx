import styled from 'styled-components';

const BackGroundOverlayContainer = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
`;

const BackgroundPhotoContainer1 = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`;

const BackgroundPhotoContainer2 = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    transform: rotate(180deg);
`;

export {
    BackGroundOverlayContainer,
    BackgroundPhotoContainer1,
    BackgroundPhotoContainer2
}