import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: "It's my life", likesCount: 12, img: "https://picsum.photos/200"},
        {id: 2, message: "It's now or never", likesCount: 33, img: "https://picsum.photos/300"},
        {
            id: 3, message: "This ain't a song for the broken-hearted\n" +
                "No silent prayer for the faith-departed\n" +
                "I ain't gonna be just a face in the crowd\n" +
                ", likesCount: 78",
            likesCount: 2,
            img: "https://picsum.photos/150"
        },
        {
            id: 4,
            message: "Suspendisse eget ullamcorper ante, ut euismod velit. Maecenas luctus dapibus risus, id porta quam sodales vitae. Proin eget imperdiet ante. Curabitur non lobortis mauris.",
            likesCount: 2,
            img: "https://picsum.photos/350"
        }
    ],
    newPostText: "",
    profile: null,
    status: ""
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
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

//action creators
export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

//thunk creators
export const getUserProfile = (userId) => (dispatch)=> {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}
export const getStatus = (userId) => (dispatch)=> {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}
export const updateStatus = (status) => (dispatch)=> {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0){
                dispatch(setStatus(status));
            }
        });
}

export default profileReducer;
