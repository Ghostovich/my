import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {

    _state: {
        ProfilePage: {
            Posts: [
                {id: 1, message: "Come on!", Like: 2},
                {id: 2, message: "Eee", Like: 4}
            ],
            newPostText: ''
        },

        DialogsPage: {
            DItem: [
                {id: 1, name: "Phil"},
                {id: 2, name: "Anton"},
                {id: 3, name: "Petya"},
                {id: 4, name: "Vasya"}
            ],
            Mess: [
                {id: 1, mess: "Hi"},
                {id: 2, mess: "Men"},
                {id: 3, mess: "What`s up"},
            ],
            newMessText: ''
        },

        Navbar: {
            Friends: [
                {id: 1, name: "Phil"},
                {id: 2, name: "Anton"},
                {id: 3, name: "Vasya"},
            ]
        }
    },

    _rerender() {
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._rerender = observer
    },

    dispatch(action) {

        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action)
        this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action)

        this._rerender(this._state)
    }

}


window.store = store;
export default store