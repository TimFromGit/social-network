import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import AddMessageForm from "./Message/AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElement = state.dialogs.map(d => (<DialogItem name={d.name} key={d.id} img={d.img}/>));
    let messagesElement = state.messages.map(m => (<Message message={m.message} key={m.id}/>));

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    );
}


export default Dialogs;