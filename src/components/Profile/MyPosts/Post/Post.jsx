import React from 'react';
import s from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                post1
            </div>
            <div className={s.item}>
                post2
            </div>
        </div>
    )
}
export default MyPosts;