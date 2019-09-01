import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={s.topfoto}></div>
            <div>
                ava+description
            </div>
            <MyPosts />
        </div>
    )
}
export default Profile;