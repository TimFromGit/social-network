import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.myposts}>
            <h1>My posts</h1>
            <textarea name="" id="" cols="80" rows="5" placeholder="New post"></textarea>
            <button>Add post</button>
            <div className={s.posts}>
                <Post message="It's my life" likesCount="23"/>
                <Post message="It's now or never" likesCount="1"/>
                <Post message="I ain't gonna live forever" likesCount="33"/>
            </div>
        </div>
    )
}
export default MyPosts;