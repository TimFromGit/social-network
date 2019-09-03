import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, message: "It's my life", likesCount: 12},
        {id: 2, message: "It's now or never", likesCount: 33},
        {id: 3, message: "I ain't gonna live forever", likesCount: 78},

    ]

    let postsElement = posts
        .map(p => (<Post message={p.message} likesCount={p.id}/>));

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div className={s.addPost}>
                <textarea name="" id="" placeholder="New post"></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                { postsElement }
            </div>
        </div>
    )
}
export default MyPosts;