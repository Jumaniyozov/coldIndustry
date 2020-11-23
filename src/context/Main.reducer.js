import {
    ABOUT_PAGE_FETCH,
    CE_PAGE_FETCH,
    CF_PAGE_FETCH,
    DOOR_PAGE_FETCH, FETCH_START, FETCH_SUCCESS,
    HOME_PAGE_FETCH,
    PENOPLAST_PAGE_FETCH,
    SP_PAGE_FETCH
} from "./types";

export default (state, action) => {
    switch (action.type) {
        case FETCH_START: {
            return {
                ...state,
                loading: true
            }
        }
        case HOME_PAGE_FETCH: {
            return {
                ...state,
                loading: false,
                homePageInfo: action.payload
            }
        }
        case CE_PAGE_FETCH: {
            return {
                ...state,
                loading: false,
                coolingEnginePageInfo: action.payload
            }
        }
        case CF_PAGE_FETCH: {
            return {
                ...state,
                loading: false,
                coolingFramePageInfo: action.payload
            }
        }
        case DOOR_PAGE_FETCH: {
            return {
                ...state,
                loading: false,
                doorPageInfo: action.payload
            }
        }
        case SP_PAGE_FETCH: {
            return {
                ...state,
                loading: false,
                sandwichPanelPageInfo: action.payload
            }
        }
        case PENOPLAST_PAGE_FETCH: {
            return {
                ...state,
                loading: false,
                penoplastPageInfo: action.payload
            }
        }
        case ABOUT_PAGE_FETCH: {
            return {
                ...state,
                loading: false,
                aboutPageInfo: action.payload
            }
        }


        default: {
            return state;
        }
    }
}
