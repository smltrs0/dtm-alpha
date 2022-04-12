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
        default:
            return state;
    }
};
