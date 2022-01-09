import {getHttpGetSetting, getHttpPostSetting, SirvClientConfig} from "../config";
import {PORTFOLIO_DIRNAME} from "../constants";

const SIRV_API_TOKEN_URL = 'https://api.sirv.com/v2/token';
const SIRV_LIST_DIR_CONTENTS_URL = `https://api.sirv.com/v2/files/readdir?dirname=${PORTFOLIO_DIRNAME}`

export const fetchSirvToken = async () => {
    try {
        let req = await fetch(SIRV_API_TOKEN_URL, getHttpPostSetting(SirvClientConfig)) as any;
        let res = await req.json();
        return res.token;
    } catch(err) {
        console.error(err);
    }
}

export const fetchPhotos = async (token: any) => {
    try {
        let req = await fetch(SIRV_LIST_DIR_CONTENTS_URL, getHttpGetSetting(token));
        let res = await req.json();
        if (!res?.content) throw new Error(`Could not fetch response from ${SIRV_LIST_DIR_CONTENTS_URL}`);
        return res.content.map((img: any) => img.filename);
    } catch(err) {
        console.error(err);
    }
}