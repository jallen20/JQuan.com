import styled from 'styled-components';

const HeaderContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
`;

const Logo = styled.img`
    width: 60px;
    
    @media screen and (max-width: 1000px) {
        display: none;
    }
`;

export {
    HeaderContainer,
    Logo
}