import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.item}>
                <img src={props.img} alt=""/>
                <div className={s.message}>
                    {props.message}
                </div>
            </div>
            <div className={s.likesCount}>
                <span>Likes: </span> {props.likesCount}
            </div>
        </div>

    )
}
export default Post;