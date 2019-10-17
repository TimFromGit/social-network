import React, {useState} from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/preloader";
import userPhoto from "../../../assets/images/user.svg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, isOwner, savePhoto, status, updateStatus, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };
    const onSubmit = (formData) => {
        saveProfile(formData)
            .then(
                () => {
                    setEditMode(false);
                })
    };
    return (
        <div>
            <div className={s.descriptionBlock}>
                <div className={s.profilePhotoBlock}>
                    <div>
                        <img className={s.profilePhoto} alt="" src={profile.photos.large || userPhoto}/>
                    </div>
                    <div>
                        {
                            isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>
                        }
                    </div>
                </div>
                {editMode
                    ? <ProfileDataForm
                        initialValues={profile}
                        classname={s.profileData}
                        profile={profile}
                        status={status}
                        updateStatus={updateStatus}
                        onSubmit={onSubmit}
                    />
                    : <ProfileData
                        classname={s.profileData}
                        profile={profile}
                        status={status}
                        updateStatus={updateStatus}
                        isOwner={isOwner}
                        goToEditMode={() => {
                            setEditMode(true)
                        }}
                    />
                }
            </div>
        </div>
    );
};

const ProfileData = ({profile, status, updateStatus, isOwner, goToEditMode}) => {
    return <div className={s.profileData}>
        <div className={s.fullName}>
            {profile.fullName}
        </div>
        <div className={s.status}>
            <ProfileStatusWithHooks
                className={s.status}
                status={status}
                updateStatus={updateStatus}
            />
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
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
        <div>
            {isOwner && <button onClick={goToEditMode}>edit</button>}
        </div>
    </div>
}

//для формирования контактов
const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}

export default ProfileInfo;