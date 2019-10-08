import React from 'react';
import s from "./User.module.css";
import userPhoto from '../../assets/images/user.svg'
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, unfollow, follow}) => {
    return <div className={s.users}>
        <div className={s.userFollow}>
            {/*Юзеры - фото старт*/}
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.usersPhoto}
                         alt=''/>
                </NavLink>

            </div>
            {/*Юзеры - фото конец*/}
            {/*Юзеры - кнопка фоллоу/анфоллоу старт*/}
            <div>
                {user.followed
                    ? <button disabled={followingInProgress
                        .some(id => id === user.id)}
                              onClick={() => {
                                  unfollow(user.id)
                              }}>
                        Unfollow
                    </button>
                    : <button disabled={followingInProgress
                        .some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id)
                              }}>
                        Follow
                    </button>}
            </div>
            {/*Юзеры - кнопка фоллоу/анфоллоу конец*/}
        </div>
        <div className={s.userInfo}>
            <div className={s.name}>{user.name}</div>
            <div>{user.status}</div>
            <div>{'user.location.country'}</div>
            <div>{'user.location.city'}</div>
        </div>
    </div>
}

export default User;