import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElement = state.dialogs.map(d => (<DialogItem name={d.name} key={d.id} img={d.img}/>));
    let messagesElement = state.messages.map(m => (<Message message={m.message} key={m.id}/>));
    let newMessageBody = state.newMessageBody;

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <textarea
                className={s.newMessage}
                onChange={onNewMessageChange}
                value={newMessageBody}
                />
            <button className={s.btn} onClick={onSendMessageClick}>Send</button>
        </div>
    );
}

export default Dialogs;