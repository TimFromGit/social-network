import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.topfoto}>
                <img className="content-img" src="" alt=""/>
            </div>
            <div>
                ava+description
            </div>
            <div className={s.myposts}>
                <h1>My posts</h1>
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post1
                    </div>
                    <div className={s.item}>
                        post2
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;