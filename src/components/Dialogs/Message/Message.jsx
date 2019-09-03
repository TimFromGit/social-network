import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";


const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}


const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: "Timur"},
        {id: 2, name: "Sergey"},
        {id: 3, name: "Inokentii"},
        {id: 4, name: "Viktor"},
        {id: 5, name: "Valera"},
        {id: 6, name: "Sveta"},
        {id: 7, name: "Vyacheslav"}
    ]
    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Yo"},
        {id: 3, message: "Bla bla bla"},
        {id: 4, message: "Yeahaaaaa"},
        {id: 5, message: "Yeahaaaaa"},
        {id: 6, message: "Yeahaaaaa"},
        {id: 7, message: "Yeahaaaaa"}
    ]

    let dialogsElement = dialogs.map(d => ( <DialogItem name={d.name} id={d.id}/> ));

    let messagesElement = messages.map(m => ( <Message message={m.message} id={m.id}/> ));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElement }
            </div>
            <div className={s.messages}>
                { messagesElement }
            </div>
        </div>
    );
}

export default Dialogs;