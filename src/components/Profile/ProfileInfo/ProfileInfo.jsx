import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/preloader";
import userPhoto from "../../../assets/images/user.svg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status,updateStatus}) => {
    if (!profile) {
        return <Preloader />
    }

    return (
        <div className={s.descr}>
            <div className={s.img}></div>
            <div className={s.descriptionBlock}>
                <img className={s.profilePhoto} alt ="" src={profile.photos.large != null ? profile.photos.large : userPhoto}/>
                <div className={s.status}>
                    <span>Status: </span>
                    <ProfileStatusWithHooks
                        className={s.status}
                        status={status}
                        updateStatus={updateStatus}
                    />
                </div>
                <div className={s.profileData}>
                    <div>
                        <strong>Full Name:</strong> {profile.fullName}
                    </div>
                    <div>
                        <strong>Facebook:</strong> {profile.contacts.facebook}
                    </div>
                        {profile.contacts.website
                            ? <div><strong>Website:</strong> {profile.contacts.website}</div>
                            : null}
                    <div>
                        <strong>VK:</strong> {profile.contacts.vk}
                    </div>
                    <div>
                        <strong>Twitter:</strong> {profile.contacts.twitter}
                    </div>
                    <div>
                        <strong>Instagram:</strong> {profile.contacts.instagram}
                    </div>
                    <div>
                        <strong>Youtube:</strong> {profile.contacts.youtube}
                    </div>
                    <div>
                        <strong>Github:</strong> {profile.contacts.github}
                    </div>
                    <div>
                        <strong>Main Link:</strong> {profile.contacts.mainLink}
                    </div>
                    <div>
                        <strong>Looking for a job:</strong> {profile.lookingForAJob}
                    </div>
                    <div>
                        <strong>Looking for a job description:</strong> {profile.lookingForAJobDescription}
                    </div>
                    <div>
                        <strong>About me:</strong> {profile.aboutMe}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProfileInfo;