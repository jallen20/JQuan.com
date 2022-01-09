import React from 'react';
import BackgroundOverlay from "../../components/background-overlay/BackgroundOverlay";
import Header from "../../components/header/Header";
import {HomeContainer, HomeContent, Logo, R, SubTitle, Title} from "./Home.styles";
import {MAIN_BACKGROUND_PHOTO, PUBLIC_ASSETS_URL} from "../../constants";

const Home = () => (
    <HomeContainer>
        <Header/>
        <HomeContent>
            <Logo src={`${PUBLIC_ASSETS_URL}jquan-logo.png`}/>
            <Title>J'QUAN M. <R>R</R>OD<R>R</R>IGUIEZ</Title>
            <SubTitle>Photog<R>R</R>aphe<R>R</R></SubTitle>
        </HomeContent>
        <BackgroundOverlay imgSrc={MAIN_BACKGROUND_PHOTO}/>
    </HomeContainer>
);

export default Home;