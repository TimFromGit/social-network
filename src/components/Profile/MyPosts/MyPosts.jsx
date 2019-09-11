import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => (
        <Post message={p.message} likesCount={p.likesCount} key={p.id} img={p.img}/>)).reverse();

    // СОЗДАНИЕ ПОСТА
    // создаем ссылку и привязываем к textarea
    //функция добавления поста

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type:"UPDATE-NEW-POST-TEXT", newText: text};
        props.dispatch(action);
    }

return (
    <div className={s.postsBlock}>
        <h2>My posts</h2>
        <div className={s.addPost}>
                <textarea
                    onChange={onPostChange}
                    ref={newPostElement}
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