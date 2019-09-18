import React from 'react';
import s from './users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://picsum.photos/100',
                    followed: false,
                    fullName: 'Timur',
                    status: 'Karamba',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 2,
                    photoUrl: 'https://picsum.photos/101',
                    followed: true,
                    fullName: 'Ricardo',
                    status: 'Hola amigos',
                    location: {city: 'Barcelona', country: 'Spain'}
                },
                {
                    id: 3,
                    photoUrl: 'https://picsum.photos/102',
                    followed: false,
                    fullName: 'Pedro',
                    status: 'Ciao',
                    location: {city: 'Milan', country: 'Italy'}
                }
            ]
        )
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={s.usersPhoto} alt=''/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}
export default Users;