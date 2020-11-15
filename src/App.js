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


function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/about' component={AboutPage}/>
                    <Route path='/sandwichpanels' component={SandwichPanelPage}/>
                    <Route path='/coolingengines' component={CoolingEnginePage}/>
                    <Route path='/coolingframes' component={CoolingFramePage}/>
                    <Route path='/doors' component={DoorPage}/>
                    <Route path='/penoplasts' component={PenoplastPage}/>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
