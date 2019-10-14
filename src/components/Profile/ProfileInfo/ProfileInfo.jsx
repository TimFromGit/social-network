import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/preloader";
import userPhoto from "../../../assets/images/user.svg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    return (
        <div className={s.descr}>
            <div className={s.img}></div>
            <div className={s.descriptionBlock}>
                <img className={s.profilePhoto} alt="" src={profile.photos.large || userPhoto}/>
                {
                    isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>
                }
                <div className={s.status}>
                    <ProfileStatusWithHooks
                        className={s.status}
                        status={status}
                        updateStatus={updateStatus}
                    />
                </div>
                <div className={s.profileData}>
                    <div>
                        <b>Full name:</b> {profile.fullName}
                    </div>
                    <div>
                        <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
                    </div>
                    {
                        profile.lookingForAJob && <div>
                            <b>My Professional skills:</b> {profile.lookingForAJobDescription}
                        </div>
                    }
                    <div>
                        <b>About me:</b> {profile.aboutMe}
                    </div>
                    <div>
                        <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                            return <Contact key={key} contactTitle={key} contactvalue={profile.contacts[key]}/>
                        })}
                    </div>

                </div>
            </div>
        </div>
    );
};

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}

export default ProfileInfo;