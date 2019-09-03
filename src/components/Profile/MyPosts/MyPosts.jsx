import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let posts = props.posts;

    let postsElement = posts
        .map(p => (<Post message={p.message} likesCount={p.likesCount} key={p.id} img={p.img}/>));

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div className={s.addPost}>
                <textarea name="" id="" placeholder="New post"></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}
export default MyPosts;