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
    height: calc(100vh - 100px);
    width: 100vw;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h2`
    font-family: good-times, sans-serif;
    font-weight: 400;
    font-style: normal;
    margin: 5px;
    font-size: 3vw;
`;

const SubTitle = styled.h3`
    font-family: good-times, sans-serif;
    font-weight: 200;
    font-style: normal;
    margin: 5px;
    font-size: 3vw;
`;
 const R = styled.span`
    margin: 0;
    color: #f70c0c;
 `;

const Logo = styled.img`
    width: 30px;
    margin: 10px;
    
    @media screen and (min-width: 1000px) {
        display: none;
    }
`;

export {
    HomeContainer,
    HomeContent,
    Title,
    SubTitle,
    R,
    Logo
}