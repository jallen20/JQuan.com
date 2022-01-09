import React from 'react';
import {
    BackGroundOverlayContainer,
    BackgroundPhotoContainer1,
    BackgroundPhotoContainer2
} from "./BackgroundOverlay.styles";
import {getPhotoSrc} from "../../config";


const BackgroundOverlay = (props: { imgSrc: string }) => {
    const { imgSrc } = props;
    return (
        <BackGroundOverlayContainer>
            <BackgroundPhotoContainer1>
                <img src={getPhotoSrc(imgSrc)} alt='main'/>
            </BackgroundPhotoContainer1>
            <BackgroundPhotoContainer2>
                <img src={getPhotoSrc(imgSrc)} alt='main'/>
            </BackgroundPhotoContainer2>
        </BackGroundOverlayContainer>
    )
}
export default BackgroundOverlay;