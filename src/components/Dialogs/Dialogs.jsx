import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

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
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={s.newMessage} component="textarea" name="newMessageBody" plaseholder="Enter your message" />
            <button className={s.btn}>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;