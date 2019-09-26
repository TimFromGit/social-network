import React from 'react';
import s from "./Users.module.css";
import userPhoto from '../../assets/images/user.svg'
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        {/*Пагинатор start*/}
        <div>
            {pages.map(p => {
                return <span
                    className={props.currentPage === p && s.selectedPage}
                    onClick={(e) => {
                        props.onPageChanged(p)
                    }}>
                         {p + " "}
                    </span>
            })}
        </div>
        {/*Пагинатор end*/}

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