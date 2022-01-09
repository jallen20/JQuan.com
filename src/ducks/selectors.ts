import {RootState} from "../store/configureStore";

export const getToken = (state: RootState) => state.portfolioData.imgApiToken;
export const getPhotots = (state: RootState) => state.portfolioData.photos;
export const getTokenExipresIn = (state: RootState) => state.portfolioData.tokenExpiresIn;