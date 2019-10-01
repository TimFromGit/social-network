import {Field, reduxForm} from "redux-form";
import s from "../../Dialogs.module.css";
import React from "react";
import {Textarea} from "../../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";

const maxLength = maxLengthCreator(50)
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={s.newMessage}
                   component={Textarea}
                   validate={[required, maxLength]}
                   name="newMessageBody"
                   plaseholder="Enter your message"/>
            <button className={s.btn}>Send</button>
        </form>
    )
}
export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);