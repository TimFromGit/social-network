import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => (
        <Post message={p.message} likesCount={p.likesCount} key={p.id} img={p.img}/>));

    // СОЗДАНИЕ ПОСТА
    // создаем ссылку и привязываем к textarea
    //функция добавления поста
    let addPost = () => {
        props.addPost();
    }
    let onPostChange = (event) => {
        props.updateNewPostText(event.target.value);
    }

return (
    <div className={s.postsBlock}>
        <h2>My posts</h2>
        <div className={s.addPost}>
                <textarea
                    onChange={onPostChange}
                    placeholder="Write a post right now, quicly!"
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