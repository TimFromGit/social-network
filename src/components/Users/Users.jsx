import React from 'react';
import s from "./Users.module.css";
import userPhoto from '../../assets/images/user.svg'
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount}
                   pageSize={pageSize}/>
        {/*Юзеры старт*/}
        {
            props.users.map(u =>
                <div key={u.id} className={s.users}>
                    <div className={s.userFollow}>
                        {/*Юзеры - фото старт*/}
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.usersPhoto}
                                     alt=''/>
                            </NavLink>

                        </div>
                        {/*Юзеры - фото конец*/}
                        {/*Юзеры - кнопка фоллоу/анфоллоу старт*/}
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress
                                    .some(id => id === u.id)}
                                          onClick={() => {
                                              props.unfollow(u.id)
                                          }}>
                                    Unfollow
                                </button>
                                : <button disabled={props.followingInProgress
                                    .some(id => id === u.id)}
                                          onClick={() => {
                                              props.follow(u.id)
                                          }}>
                                    Follow
                                </button>}
                        </div>
                        {/*Юзеры - кнопка фоллоу/анфоллоу конец*/}
                    </div>
                    <div className={s.userInfo}>
                        <div className={s.name}>{u.name}</div>
                        <div>{u.status}</div>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </div>
                </div>)
        }
        {/*Юзеры end*/}
    </div>
}

export default Users;