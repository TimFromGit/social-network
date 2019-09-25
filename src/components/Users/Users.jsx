import React from 'react';
import s from "./Users.module.css";
import userPhoto from '../../assets/images/user.svg'
import {NavLink} from "react-router-dom";
import * as axios from "axios";


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
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {'API-KEY': '946b5ace-a3e3-4432-bdfd-9021d5788833'}
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id);
                                            }
                                        });

                                }}>Unollow</button>
                                : <button onClick={() => {

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {'API-KEY': '946b5ace-a3e3-4432-bdfd-9021d5788833'}
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id);
                                            }
                                        });

                                }}>Follow</button>}
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