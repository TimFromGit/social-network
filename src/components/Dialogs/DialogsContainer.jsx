import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) => {

    let dialogsElement = props.state.dialogs.map(d => (<DialogItem name={d.name} id={d.id} key={d.id} img={d.img}/>));
    let messagesElement = props.state.messages.map(m => (<Message message={m.message} id={m.id} key={m.id}/>));

    let onNewMessageChange = (e) => {
        let text = e.target.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

    let onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator());
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
                value={props.state.newMessageText}
                placeholder='Enter your message'/>
                <button className={s.btn} onClick={onSendMessageClick}>Send</button>
        </div>
    );
}

export default Dialogs;