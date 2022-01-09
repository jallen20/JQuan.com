import React from 'react';
import BackgroundOverlay from "../../components/background-overlay/BackgroundOverlay";
import Header from "../../components/header/Header";
import {HomeContainer, HomeContent, SubTitle, Title} from "./Home.styles";

const Home = () => (
    <HomeContainer>
        <Header/>
        <HomeContent>
            <Title>J'QUAN M. RODRIGUIEZ</Title>
            <SubTitle>Photographer</SubTitle>
        </HomeContent>
        <BackgroundOverlay/>
    </HomeContainer>
);

export default Home;