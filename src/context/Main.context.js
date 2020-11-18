import React, {createContext, useReducer} from "react";
import AppReducer from './Main.reducer';


const initialState = {
    aboutPageInfo: [],
    coolingEnginePageInfo: [],
    coolingFramePageInfo: [],
    doorPageInfo: [],
    homePageInfo: [],
    penoplastPageInfo: [],
    sandwichPanelPageInfo: [],
    error: null
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // const fetchAbout

    const valuesForProvider = {
        //state
        aboutPageInfo: state.aboutPageInfo,
        coolingEnginePageInfo: state.coolingEnginePageInfo,
        coolingFramePageInfo: state.coolingFramePageInfo,
        doorPageInfo: state.doorPageInfo,
        homePageInfo: state.homePageInfo,
        penoplastPageInfo: state.penoplastPageInfo,
        sandwichPanelPageInfo: state.sandwichPanelPageInfo,
        error: state.error

        //actions
    }

    return (
        <GlobalContext.Provider value={valuesForProvider}>
            {props.children}
        </GlobalContext.Provider>
    )
}
