import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => (
        <Post message={p.message} likesCount={p.likesCount} key={p.id} img={p.img}/>));

    // СОЗДАНИЕ ПОСТА
    // создаем ссылку и привязываем к textarea
    let newPostElement = React.createRef();
    //функция добавления поста
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value='';
    }

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div className={s.addPost}>
                <textarea name="" ref={newPostElement} placeholder="Write a post right now, quicly!"></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}
export default MyPosts;