import styled from "styled-components";

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: block;
`;

const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100vw;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h2`
    font-family: good-times, sans-serif;
    font-weight: 400;
    font-style: normal;
    margin: 5px;
`;

const SubTitle = styled.h3`
    font-family: good-times, sans-serif;
    font-weight: 200;
    font-style: normal;
    margin: 5px;
`;

export {
    HomeContainer,
    HomeContent,
    Title,
    SubTitle
}