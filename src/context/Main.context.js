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
    ProejctingPageInfo, InsertionPageInfo, ServicePageInfo, ModernizationPageInfo
} from '../data/InfoText.json';
import {
    ABOUT_PAGE_FETCH,
    CE_PAGE_FETCH,
    CF_PAGE_FETCH,
    DOOR_PAGE_FETCH,
    HOME_PAGE_FETCH,
    INSERTION_PAGE_FETCH,
    MODERNIZATION_PAGE_FETCH,
    PENOPLAST_PAGE_FETCH,
    PROJECTING_PAGE_FETCH,
    SERVICE_PAGE_FETCH,
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
    projectingPageInfo: [],
    insertionPageInfo: [],
    servicePageInfo: [],
    modernizationPageInfo: [],
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

    const fetchProjectingPage = async () => {
        try {
            await dispatch({
                type: PROJECTING_PAGE_FETCH,
                payload: ProejctingPageInfo
            })
        } catch (err) {
            console.error(err.message);
        }
    }

    const fetchInsertionPage = async () => {
        try {
            await dispatch({
                type: INSERTION_PAGE_FETCH,
                payload: InsertionPageInfo
            })
        } catch (err) {
            console.error(err.message);
        }
    }

    const fetchServicePage = async () => {
        try {
            await dispatch({
                type: SERVICE_PAGE_FETCH,
                payload: ServicePageInfo
            })
        } catch (err) {
            console.error(err.message);
        }
    }

    const fetchModernizationPage = async () => {
        try {
            await dispatch({
                type: MODERNIZATION_PAGE_FETCH,
                payload: ModernizationPageInfo
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
        projectingPageInfo: state.projectingPageInfo,
        insertionPageInfo: state.insertionPageInfo,
        servicePageInfo: state.servicePageInfo,
        modernizationPageInfo: state.modernizationPageInfo,

        error: state.error,

        //actions

        fetchHomePage,
        fetchSPPage,
        fetchCEPage,
        fetchCFPage,
        fetchDoorPage,
        fetchPenoPage,
        fetchAboutPage,
        fetchProjectingPage,
        fetchInsertionPage,
        fetchServicePage,
        fetchModernizationPage
    }

    return (
        <GlobalContext.Provider value={valuesForProvider}>
            {props.children}
        </GlobalContext.Provider>
    )
}
