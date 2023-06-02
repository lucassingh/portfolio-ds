import React from "react";
import { AnimCursor, Button, NavMenu } from "./components";
import { ThemeProvider } from "styled-components";
import { useThemeMode } from "./hooks";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const themes = {
    dark: {
        colors: {
            primary: "#262626",
            secondary: "#BCB4B4",
            third: "#ffffff",
            fourth: '#000000',
            fifth: '#141414'
        },
    },
    light: {
        colors: {
            primary: "#ffffff",
            secondary: "#262626",
            third: "#000000",
            fourth: '#ffffff',
            fifth: '#E9E5E5'
        },
    },
};

function App() {

    const [theme, toggleTheme] = useThemeMode();

    return (
        <ThemeProvider theme={themes[theme]}>
            <AnimCursor />
            <GlobalStyles />
            <Button handleClick={toggleTheme} text={theme === 'dark' ? 'Light' : 'Dark'} />
            <Router>
                <NavMenu />
                <ScrollToTop />
                <Switch>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/projects'>
                        <Projects />
                    </Route>
                    <Route path='/contact'>
                        <Contact />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </ThemeProvider>
    );
}

export default App;
