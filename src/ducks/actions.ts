import * as types from './actionTypes';

export const refreshSirvToken = (payload: any) => ({
    type: types.REFRESH_SIRV_TOKEN,
    payload
});

export const fetchSirvPhotos = (payload: any) => ({
    type: types.FETCH_SIRV_PHOTOS,
    payload
});