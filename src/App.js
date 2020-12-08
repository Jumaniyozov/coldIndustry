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
import {GlobalProvider} from "./context/Main.context";
import ScrollToTop from "./components/ScrolllToTop.component";
import ProjectingPageRenderer from "./pages/Projecting.page";
import InsertionPageRenderer from "./pages/Insertion.page";
import ServicePageRenderer from "./pages/Service.page";
import ModernizationPageRenderer from "./pages/Modernization.page";


function App() {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop/>
                <GlobalProvider>
                    <Header/>
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/sandwichpanels' component={SandwichPanelPage}/>
                        <Route path='/coolingengines' component={CoolingEnginePage}/>
                        <Route path='/coolingframes' component={CoolingFramePage}/>
                        <Route path='/doors' component={DoorPage}/>
                        <Route path='/penoplasts' component={PenoplastPage}/>
                        <Route path='/about' component={AboutPage}/>
                        <Route path='/projecting' component={ProjectingPageRenderer}/>
                        <Route path='/insertion' component={InsertionPageRenderer}/>
                        <Route path='/service' component={ServicePageRenderer}/>
                        <Route path='/modernization' component={ModernizationPageRenderer}/>
                        <Route path='*' component={HomePage}/>
                    </Switch>
                    <Footer/>
                </GlobalProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
