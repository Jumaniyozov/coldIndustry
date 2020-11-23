import React, {createContext, useReducer} from "react";
import AppReducer from './Main.reducer';
import {
    CoolingEngineInfo,
    SandwichPanelInfo,
    AboutInfo,
    PenoplastInfo,
    DoorInfo,
    CoolingFrameInfo,
    HomePageInfo,
} from '../data/InfoText.json';
import {
    ABOUT_PAGE_FETCH,
    CE_PAGE_FETCH,
    CF_PAGE_FETCH,
    DOOR_PAGE_FETCH,
    HOME_PAGE_FETCH, PENOPLAST_PAGE_FETCH,
    SP_PAGE_FETCH
} from "./types";


const initialState = {
    loading: true,
    homePageInfo: [],
    aboutPageInfo: [],
    coolingEnginePageInfo: [],
    coolingFramePageInfo: [],
    doorPageInfo: [],
    penoplastPageInfo: [],
    sandwichPanelPageInfo: [],
    error: null
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // const fetchAbout

    const fetchHomePage = async () => {
        try {
            await dispatch({
                type: HOME_PAGE_FETCH,
                payload: HomePageInfo
            })
        } catch (err) {
            console.error(err.message);
        }
    }

    const fetchSPPage = async () => {
        try {
            await dispatch({
                type: SP_PAGE_FETCH,
                payload: SandwichPanelInfo
            })
        } catch (err) {
            console.error(err.message);
        }
    }

    const fetchCEPage = async () => {
        try {
            await dispatch({
                type: CE_PAGE_FETCH,
                payload: CoolingEngineInfo
            })
        } catch (err) {
            console.error(err.message);
        }
    }


    const fetchCFPage = async () => {
        try {
            await dispatch({
                type: CF_PAGE_FETCH,
                payload: CoolingFrameInfo
            })
        } catch (err) {
            console.error(err.message);
        }
    }

    const fetchDoorPage = async () => {
        try {
            await dispatch({
                type: DOOR_PAGE_FETCH,
                payload: DoorInfo
            })
        } catch (err) {
            console.error(err.message);
        }
    }

    const fetchPenoPage = async () => {
        try {
            await dispatch({
                type: PENOPLAST_PAGE_FETCH,
                payload: PenoplastInfo
            })
        } catch (err) {
            console.error(err.message);
        }
    }

    const fetchAboutPage = async () => {
        try {
            await dispatch({
                type: ABOUT_PAGE_FETCH,
                payload: AboutInfo
            })
        } catch (err) {
            console.error(err.message);
        }
    }

    const valuesForProvider = {
        //state
        loading: state.loading,
        aboutPageInfo: state.aboutPageInfo,
        coolingEnginePageInfo: state.coolingEnginePageInfo,
        coolingFramePageInfo: state.coolingFramePageInfo,
        doorPageInfo: state.doorPageInfo,
        homePageInfo: state.homePageInfo,
        penoplastPageInfo: state.penoplastPageInfo,
        sandwichPanelPageInfo: state.sandwichPanelPageInfo,
        error: state.error,
        fetchHomePage,
        fetchSPPage,
        fetchCEPage,
        fetchCFPage,
        fetchDoorPage,
        fetchPenoPage,
        fetchAboutPage

        //actions
    }

    return (
        <GlobalContext.Provider value={valuesForProvider}>
            {props.children}
        </GlobalContext.Provider>
    )
}
