import React, { useState } from "react";

import {
    NavContainer,
    LogoImg,
    LogoLink,
    NavInnerContainer,
} from "./Nav.Styles";
import logo from "../../Assets/reactMovie_logo.png";
import './style.css'
import { BsFillLightbulbFill } from 'react-icons/bs';


function Nav({ toggleTheme, isDarkTheme }) {
    const [isToggled, setIsToggled] = useState(isDarkTheme);

    const onToggle = () => {
        setIsToggled(!isToggled);
        toggleTheme();
    };

    return ( <
        NavContainer as = { "header" } >
        <
        NavInnerContainer >
        <
        LogoLink to = { "/" } >
        <
        LogoImg src = { logo }
        alt = { "Logo" }
        /> < /
        LogoLink >

        <
        label className = "toggle-switch" >
        <
        input type = "checkbox"
        checked = { isToggled }
        onChange = { onToggle }
        /> <
        span className = "switch" / >
        <
        /label> < /
        NavInnerContainer > < /
        NavContainer >
    );
}

export default Nav;