import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sitebarReducer from "./navbar-reduser";


let redusers = combineReducers({
    ProfilePage: profileReducer,
    DialogsPage: dialogsReducer,
    Navbar: sitebarReducer
});

let store = createStore(redusers);

export default store