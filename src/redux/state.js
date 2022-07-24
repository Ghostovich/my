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
                {id: 3, mess: "What`s up"}
            ]
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.ProfilePage.newPostText,
                Like: 0
            }

            this._state.ProfilePage.Posts.push(newPost)

            this._rerender(this._state);
            this._state.ProfilePage.newPostText = ''
        }

    else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.ProfilePage.newPostText = action.newText
            this._rerender(this._state);

        }

    }

}
window.store = store;
export default store