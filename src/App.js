import React from "react";
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./pages/Home.page";
import SandwichPanelPage from "./pages/SandwichPanel.page";
import CoolingEnginePage from "./pages/CoolingEngine.page";
import CoolingFramePage from "./pages/CoolingFrame.page";
import DoorPage from "./pages/Door.page";
import PenoplastPage from "./pages/Penoplast.page";
import AboutPage from "./pages/About.page";
import Header from "./components/Header.component";
import Footer from "./components/Footer.component";


function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/sandwichpanels' component={SandwichPanelPage}/>
                    <Route path='/coolingengines' component={CoolingEnginePage}/>
                    <Route path='/coolingframes' component={CoolingFramePage}/>
                    <Route path='/doors' component={DoorPage}/>
                    <Route path='/penoplasts' component={PenoplastPage}/>
                    <Route path='/about' component={AboutPage}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;
