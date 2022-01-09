import React from 'react';
import {HeaderContainer, Logo} from "./Header.styles";
import {PUBLIC_ASSETS_URL} from "../../constants";
import NavBar from "../nav/NavBar";

const Header = () => (
    <HeaderContainer>
        <Logo src={`${PUBLIC_ASSETS_URL}jquan-logo.png`}/>
        <NavBar />
    </HeaderContainer>
);

export default Header;