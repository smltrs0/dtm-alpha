import { HYDRATE } from "next-redux-wrapper";
import {BosstData} from "@/pages/secret-peak/config/BosData";

const initialState = {
    bossesList: BosstData,
    bossSelected: undefined,
    isModalOpen: false,
};

export const bossesReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload,
            };
        case "GET_ALL_BOSSES":
            return {
                ...state,
                bossesList: action.payload,
            };
        case "GET_BOSS_BY_ID":
            return {
                ...state,
                bossSelected: action.payload,
            };
        case "SET_MODAL_STATE":
            return {
                ...state,
                isModalOpen: action.payload,
            };
            case "EDIT_BOSS":
            return {
                ...state,
                bossSelected: action.payload,
            };
        default:
            return state;
    }
};
