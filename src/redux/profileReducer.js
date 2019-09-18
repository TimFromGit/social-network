const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
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
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 10,
                message: state.newPostText,
                likesCount: 0,
                img: "https://picsum.photos/200"
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }

        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;