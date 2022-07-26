let ADD_POST = 'ADD-POST'

let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let ADD_NEW_TEXT_MESS = 'ADD-NEW-TEXT-MESS'
let UPDATE_NEW_TEXT_MESS = 'UPDATE-NEW-TEXT-MESS'


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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.ProfilePage.newPostText,
                Like: 0
            }
            this._state.ProfilePage.Posts.push(newPost)
            this._rerender(this._state);
            this._state.ProfilePage.newPostText = ''
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.ProfilePage.newPostText = action.newText
            this._rerender(this._state)
        }
        else if (action.type === ADD_NEW_TEXT_MESS) {
            let newMess = {
                id: 4, mess: this._state.DialogsPage.newMessText,
            }
            this._state.DialogsPage.Mess.push(newMess)
            this._rerender(this._state);
            this._state.DialogsPage.newMessText = ''


        }
        else if (action.type === UPDATE_NEW_TEXT_MESS) {
            this._state.DialogsPage.newMessText = action.newText
            this._rerender(this._state);

        }
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextAC = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const addMessTextAC = () => ({type: ADD_NEW_TEXT_MESS})

export const updateNewMessTextAC = (text) => ({type: UPDATE_NEW_TEXT_MESS, newText: text})

window.store = store;
export default store