import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}



const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: "Timur"},
        {id: 2, name: "Sergey"},
        {id: 3, name: "Inokentii"},
        {id: 4, name: "Viktor"},
        {id: 5, name: "Valera"},
        {id: 6, name: "Sveta"},
        {id: 7, name: "Vyacheslav"}
    ]
    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Yo"},
        {id: 3, message: "Bla bla bla"},
        {id: 4, message: "Yeahaaaaa"},
        {id: 5, message: "Yeahaaaaa"},
        {id: 6, message: "Yeahaaaaa"},
        {id: 7, message: "Yeahaaaaa"}
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
            </div>
        </div>
    );
}

export default Dialogs;