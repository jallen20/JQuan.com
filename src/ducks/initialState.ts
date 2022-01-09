export type Photo = {
    fileName: string
};

export type PortfolioData = {
    imgApiToken: string,
    tokenExpiresIn: number,
    photos: Photo[]
};

export const initialState: PortfolioData = {
    imgApiToken: '',
    tokenExpiresIn: -1,
    photos: [] as Photo[]
}