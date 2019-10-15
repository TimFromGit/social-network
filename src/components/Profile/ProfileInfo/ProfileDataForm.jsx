import s from "./ProfileInfo.module.css";
import React from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({profile, status, updateStatus, handleSubmit}) => {
    return <form className={s.profileDataForm} onSubmit={handleSubmit}>
        <div className={s.fullName}>
            <b>Full name:</b>
            {createField("Full name", "fullName", [], Input)}
        </div>
        <div className={s.status}>
            <ProfileStatusWithHooks
                className={s.status}
                status={status}
                updateStatus={updateStatus}
            />
        </div>
        <div>
            <b>Looking for a job:</b>
            {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>
        <div>
            <b>My Professional skills:</b>
            {createField("My Professional skills", "lookingForAJobDescription", [], Textarea)}
        </div>
        <div>
            <b>About me:</b>
            {createField("About me", "aboutMe", [], Textarea)}
        </div>
        {/*        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactvalue={profile.contacts[key]}/>
        })}
        </div>*/}
        <div>
            <button onClick={() => {
            }}>save
            </button>
        </div>
    </form>
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);
export default ProfileDataFormReduxForm;