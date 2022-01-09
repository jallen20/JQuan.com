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