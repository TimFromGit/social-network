import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => (
        <Post message={p.message} likesCount={p.likesCount} key={p.id} img={p.img}/>)).reverse();

    let addPost = () => {
        //props.addPost();
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        //props.updateNewPostText();
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div className={s.addPost}>
                <textarea
                    onChange={onPostChange}
                    value={props.newPostText}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}
export default MyPosts;