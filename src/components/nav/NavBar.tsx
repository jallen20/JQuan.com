import React, {useEffect, useState} from 'react';
import {NavBarContainer, NavBarContent, NavItem} from "./NavBar.styles";
import {useLocation} from "react-router-dom";

const NavBar = () => {

    const [navClass, setNavClass] = useState('nav');
    const location = useLocation();

    useEffect(() => {
        setNavClass(location.pathname === '/' ? 'nav-home' : 'nav')
    }, [location.pathname]);
    
    return (
    <NavBarContainer>
        <NavBarContent className={navClass}>
            <NavItem to='/'>Home</NavItem>
            <NavItem to='/'>Portfolio</NavItem>
            <NavItem to='/'>Buy Prints</NavItem>
            <NavItem to='/'>Contact</NavItem>
        </NavBarContent>
    </NavBarContainer>
)};
export default NavBar;