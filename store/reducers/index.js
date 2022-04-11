import { combineReducers } from "redux";
import employeeReducer from "./employee";
import {bossesReducer} from "./bosses";

const rootReducer = combineReducers({
	employee: employeeReducer,
	bosses: bossesReducer,
});

export default rootReducer;
