import { combineReducers, legacy_createStore as createStore } from "redux";
import MainReducer from "./MainReducer";
import ProjectsReducer from "./ProjectsReducer";

let reducers = combineReducers({
    MainData: MainReducer,
    ProjectsData: ProjectsReducer
})
let store = createStore(reducers);
export default store;