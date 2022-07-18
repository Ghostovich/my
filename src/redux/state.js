let rerender =() => {

}


let state =
    {
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
    }

    window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.ProfilePage.newPostText,
        Like: 0
    };

    state.ProfilePage.Posts.push(newPost);

    rerender(state);
    state.ProfilePage.newPostText = ''

};



export const updateNewPostText = (newText) => {
    state.ProfilePage.newPostText = newText


    rerender(state);

};

export const subscribe = (observer) => {
rerender=observer;
}

export default state