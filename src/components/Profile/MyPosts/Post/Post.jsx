import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="http://artofsiroria.com/wp-content/uploads/2019/03/siroria-avatar-06.jpg" alt=""/>
            {props.message}
            <div>
                <span>Like</span>
            </div>
        </div>

    )
}
export default Post;