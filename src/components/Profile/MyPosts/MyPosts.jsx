import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let postData = [
        {id: 1, message: "It's my life", likesCount: 12},
        {id: 2, message: "It's now or never", likesCount: 33},
        {id: 3, message: "I ain't gonna live forever", likesCount: 78},

    ]
    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div className={s.addPost}>
                <textarea name="" id="" placeholder="New post"></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} likesCount={postData[0].id}/>
                <Post message={postData[1].message} likesCount={postData[1].id}/>
                <Post message={postData[1].message} likesCount={postData[1].id}/>
            </div>
        </div>
    )
}
export default MyPosts;