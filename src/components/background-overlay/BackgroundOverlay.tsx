import React from 'react';
import {
    BackGroundOverlayContainer,
    BackgroundPhotoContainer1,
    BackgroundPhotoContainer2
} from "./BackgroundOverlay.styles";
import {getPhotoSrc} from "../../config";
import {MAIN_BACKGROUND_PHOTO} from "../../constants";


const BackgroundOverlay = () => {
    return (
        <BackGroundOverlayContainer>
            <BackgroundPhotoContainer1>
                <img src={getPhotoSrc(MAIN_BACKGROUND_PHOTO)} alt='main'/>
            </BackgroundPhotoContainer1>
            <BackgroundPhotoContainer2>
                <img src={getPhotoSrc(MAIN_BACKGROUND_PHOTO)} alt='main'/>
            </BackgroundPhotoContainer2>
        </BackGroundOverlayContainer>
    )
}
export default BackgroundOverlay;