const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "It's my life", likesCount: 12, img: "https://picsum.photos/200"},
                {id: 2, message: "It's now or never", likesCount: 33, img: "https://picsum.photos/300"},
                {
                    id: 3, message: "This ain't a song for the broken-hearted\n" +
                        "No silent prayer for the faith-departed\n" +
                        "I ain't gonna be just a face in the crowd\n" +
                        "You're gonna hear my voice\n" +
                        "When I shout it out loud\n" +
                        "It's my life\n" +
                        "It's now or never\n" +
                        "I ain't gonna live forever\n" +
                        "I just want to live while I'm alive\n" +
                        "(It's my life)\n" +
                        "My heart is like an open highway\n" +
                        "Like Frankie said\n" +
                        "I did it my way\n" +
                        "I just want to live while I'm alive\n" +
                        "It's my life\n" +
                        "This is for the ones who stood their ground\n" +
                        "It's for Tommy and Gina who never backed down\n" +
                        "Tomorrow's getting harder, make no mistake\n" +
                        "Luck ain't enough\n" +
                        "You've got to make your own breaks\n" +
                        "It's my life\n" +
                        "And it's now or never\n" +
                        "I ain't gonna live forever\n" +
                        "I just want to live while I'm alive\n" +
                        "(It's my life)\n" +
                        "My heart is like an open highway\n" +
                        "Like Frankie said\n" +
                        "I did it my way\n" +
                        "I just want to live while I'm alive\n" +
                        "It's my life\n" +
                        "You better stand tall when they're calling you out\n" +
                        "Don't bend, don't break, baby, don't back down\n" +
                        "It's my life\n" +
                        "And it's now or never\n" +
                        "I ain't gonna live forever\n" +
                        "I just want to live while I'm alive\n" +
                        "(It's my life)\n" +
                        "My heart is like an open highway\n" +
                        "Like Frankie said\n" +
                        "I did it my way\n" +
                        "I just want to live while I'm alive\n" +
                        "(It's my life)", likesCount: 78, img: "https://picsum.photos/150"
                },
                {
                    id: 4,
                    message: "Suspendisse eget ullamcorper ante, ut euismod velit. Maecenas luctus dapibus risus, id porta quam sodales vitae. Proin eget imperdiet ante. Curabitur non lobortis mauris. \\n Sed elit magna, placerat congue pulvinar quis, pulvinar at leo. Quisque felis metus, elementum quis risus non, mattis suscipit dui. Sed porta id est nec consectetur. Fusce eget nisl sit amet orci pulvinar semper. Cras condimentum orci nisl, ac sagittis felis rutrum in. Aliquam at cursus leo.",
                    likesCount: 2,
                    img: "https://picsum.photos/350"
                }
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Timur", img: "https://picsum.photos/100"},
                {id: 2, name: "Sergey", img: "https://picsum.photos/50"},
                {id: 3, name: "Inokentii", img: "https://picsum.photos/70"},
                {id: 4, name: "Viktor", img: "https://picsum.photos/80"},
                {id: 5, name: "Valera", img: "https://picsum.photos/90"},
                {id: 6, name: "Sveta", img: "https://picsum.photos/100"},
                {id: 7, name: "Vyacheslav", img: "https://picsum.photos/60"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Yo"},
                {id: 3, message: "Bla bla bla"},
                {id: 4, message: "Yeahaaaaa"},
                {id: 5, message: "Yeahaaaaa"},
                {id: 6, message: "Yeahaaaaa"},
                {id: 7, message: "Yeahaaaaa"}
            ]
        },
        newMessageText: "",
        sidebar: {
            friends: [
                {id: 1, name: "Vasya", img: "https://picsum.photos/50"},
                {id: 2, name: "Alisa", img: "https://picsum.photos/51"},
                {id: 3, name: "Igor", img: "https://picsum.photos/52"},
                {id: 4, name: "Petya", img: "https://picsum.photos/53"},
                {id: 5, name: "Stepa", img: "https://picsum.photos/54"},
                {id: 6, name: "Marat", img: "https://picsum.photos/55"},
                {id: 7, name: "Denis", img: "https://picsum.photos/56"},
                {id: 8, name: "Kuzya", img: "https://picsum.photos/57"},
                {id: 9, name: "Svets", img: "https://picsum.photos/58"},
                {id: 10, name: "Marina", img: "https://picsum.photos/59"},
                {id: 11, name: "Kolya", img: "https://picsum.photos/60"},
                {id: 12, name: "Dima", img: "https://picsum.photos/61"},
                {id: 13, name: "Danila", img: "https://picsum.photos/62"},

            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 8,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
                img: "https://picsum.photos/360"
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 15,
                message: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT'){
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default store;
window.store = store;