import {SIRV_BASE_URL} from "../constants";

export const SirvClientConfig = {
    clientId: process.env.REACT_APP_SIRV_CLIENT_ID,
    clientSecret: process.env.REACT_APP_SIRV_CLIENT_SECRET
};

export const getHttpPostSetting = (body: any) => ({
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
        'content-type': 'application/json'
    }
});

export const getHttpGetSetting = (token: string) => ({
    method: 'GET',
    headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`
    }
});

export const getPhotoSrc = (fileName: string) => `${SIRV_BASE_URL}${fileName}`;