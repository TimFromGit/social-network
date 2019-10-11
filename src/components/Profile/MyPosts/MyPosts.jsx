import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const MyPosts = React.memo(props => {
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
});

const AddNewPostForm = (props) => {
    return (
        <form className={s.addPost} onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name="newPostText"
                placeholder="Enter your message"
                validate={[required, maxLength10]}
            />
            <div>
                <button className={s.btn}>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;