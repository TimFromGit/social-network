import React from 'react';
import s from './Friends.module.css';

const Friends = (props) => {
    let friendsElement = props.state.friends.map((f) => (
        <div className={s.friend} key={f.id}>
            <img src={f.img} alt=""/>
            <div>{f.name}</div>
        </div>
    ));
    return (
        <div className={s.friends}>
            {friendsElement}
        </div>
    )
}
export default Friends;