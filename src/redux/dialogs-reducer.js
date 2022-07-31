let ADD_NEW_TEXT_MESS = 'ADD-NEW-TEXT-MESS'
let UPDATE_NEW_TEXT_MESS = 'UPDATE-NEW-TEXT-MESS'

let initialState = {
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
    };

let dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TEXT_MESS:
            let newMess = {
                id: 4, mess: state.newMessText,
            }
            state.Mess.push(newMess)
            state.newMessText = '';
            return(state)



        case UPDATE_NEW_TEXT_MESS:
            state.newMessText = action.newText
            return (state);

        default: return state;
    }


}


export default dialogsReducer


export const addMessTextAC = () => ({type: ADD_NEW_TEXT_MESS})

export const updateNewMessTextAC = (text) => ({type: UPDATE_NEW_TEXT_MESS, newText: text})