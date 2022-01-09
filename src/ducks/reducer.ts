import {initialState} from "./initialState";
import * as types from './actionTypes';

export const reducer = (state = initialState, action: any) => {
    const {type, payload} = action;

    switch (type) {

        case types.REFRESH_SIRV_TOKEN:
            const { token, expiresIn } = payload
            return {
                ...state,
                imgApiToken: token,
                tokenExpiresIn: expiresIn
            }

        case types.FETCH_SIRV_PHOTOS:
            return {
                ...state,
                photos: payload
            }

        default:
            return state;

    }
}