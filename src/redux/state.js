let state =
    {
        ProfilePage: {
            Posts: [
                {id: 1, message: "Come on!", Like: 2},
                {id: 2, message: "Eee", Like: 4}
            ]
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

export let addPost = (postMess) => {
        let newPost = {
            id:5,
            message: postMess,
            Like: 0
        };

        state.ProfilePage.Posts.push (newPost);
    }


export default state