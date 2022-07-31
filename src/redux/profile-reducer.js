let ADD_POST = 'ADD-POST'
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState =  {
        Posts: [
            {id: 1, message: "Come on!", Like: 2},
            {id: 2, message: "Eee", Like: 4}
        ],
        newPostText: ''
    };

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                Like: 0
            };
            state.Posts.push(newPost);
            state.newPostText = '';
            return (state);


        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;

            return (state);


        default:
            return state;
    }


}

export default profileReducer

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextAC = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})