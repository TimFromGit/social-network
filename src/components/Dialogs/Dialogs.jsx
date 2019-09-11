import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElement = props.state.dialogs.map(d => (<DialogItem name={d.name} id={d.id} key={d.id} img={d.img}/>));
    let messagesElement = props.state.messages.map(m => (<Message message={m.message} id={m.id} key={m.id}/>));

    let newMessageElement = React.createRef();

    let onChangeMessage = ()=>{
        let text = newMessageElement.current.value;
        let action = {type: "UPDATE-NEW-MESSAGE-TEXT", newText: text};
        props.dispatch(action);
    }

    let sendMessage = () => {
        props.dispatch({type: "ADD-MESSAGE"});
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
                onChange={onChangeMessage}
                value={props.state.newMessageText}
                ref={newMessageElement}/>
            <button className={s.btn} onClick={sendMessage}>Send</button>
        </div>
    );
}

export default Dialogs;