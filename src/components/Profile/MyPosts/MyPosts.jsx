import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => (
        <Post message={p.message} likesCount={p.likesCount} key={p.id} img={p.img}/>)).reverse();

    // СОЗДАНИЕ ПОСТА
    //функция добавления поста
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            {/*
            Форма добавления поста
            */}
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

const AddNewPostForm = (props) => {
    return (
        <form className={s.addPost} onSubmit={props.handleSubmit}>
            <Field component="textarea" name="newPostText" placeholder="Enter your message"/>
            <div>
                <button className={s.btn}>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;