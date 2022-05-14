import React, { useState } from "react";
import { MainContainer } from "./Global.Styles";
import Nav from "./Components/Nav/Nav";

import HomeScreen from "./Screen/HomeScreen/HomeScreen";
import MovieScreen from "./Screen/MovieScreen/MovieScreen";
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from "styled-components"
// import { lightTheme, darkTheme, StyledApp } from './themes'
import { StyledApp } from './themes'



const darkTheme = {
    body: "#00001A",
    subtitle: "#fff",
    navMovie: "#00001A",
    navMovietitle: "#fff",
    box: "#00001Ab3",
    infoMovi: "#fff",
}
const lightTheme = {
        body: "#fff",

        subtitle: "#000",
        navMovie: "#fff",
        navMovietitle: "#000",
        box: "#ffffffb3",
        infoMovi: "#00001A",

    }
    // const [theme, setTheme] = useState("light");
    // const themeToggler = () => {
    //     theme === "light" ? setTheme("dark") : setTheme("light");
    // }

function App() {
    const [theme, setTheme] = useState("light");
    const isDarkTheme = theme === "dark";
    const toggleTheme = () => {
        setTheme(isDarkTheme ? "light" : "dark")
    }
    return ( <
        ThemeProvider theme = { isDarkTheme ? darkTheme : lightTheme } >

        <
        StyledApp >
        <
        MainContainer >
        <
        Nav toggleTheme = { toggleTheme }
        / > <
        Routes >
        <
        Route path = { "/" }
        element = { <
            HomeScreen / >
        }
        />


        <
        Route path = { "/movie/:id" }
        element = { <
            MovieScreen / >
        }
        />

        <
        /Routes>



        <
        /MainContainer> < /
        StyledApp > <
        /
        ThemeProvider >
    );
}

export default App;