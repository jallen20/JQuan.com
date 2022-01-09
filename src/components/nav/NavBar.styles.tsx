import styled from 'styled-components';
import {Link} from "react-router-dom";

const NavBarContainer = styled.div`
    .nav-home {
        display: none;
    }
    .nav {
        display: flex;
    }
`;

const NavBarContent = styled.div`
    justify-content: space-between;
    align-items: center;
    height: 50px;
`;

const NavItem = styled(Link)`
    text-decoration: none;
    font-family: good-times, sans-serif;
    font-weight: 200;
    font-style: normal;
    margin: 0px 5px;
    padding: 0;
`;

export {
    NavBarContainer,
    NavBarContent,
    NavItem
}