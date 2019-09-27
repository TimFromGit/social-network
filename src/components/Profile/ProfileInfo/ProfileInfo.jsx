import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/preloader";
import userPhoto from "../../../assets/images/user.svg";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.descr}>
            <div className={s.img}></div>
            <div className={s.descriptionBlock}>
                <img className={s.profilePhoto} alt ="" src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}/>
                <div className={s.status}>
                    <span>Status: </span>
                    <ProfileStatus className={s.status} status={"Hi all, i'm here"}/>
                </div>
                <div className={s.profileData}>
                    <div>
                        <strong>Full Name:</strong> {props.profile.fullName}
                    </div>
                    <div>
                        <strong>Facebook:</strong> {props.profile.contacts.facebook}
                    </div>
                        {props.profile.contacts.website
                            ? <div><strong>Website:</strong> {props.profile.contacts.website}</div>
                            : null}
                    <div>
                        <strong>VK:</strong> {props.profile.contacts.vk}
                    </div>
                    <div>
                        <strong>Twitter:</strong> {props.profile.contacts.twitter}
                    </div>
                    <div>
                        <strong>Instagram:</strong> {props.profile.contacts.instagram}
                    </div>
                    <div>
                        <strong>Youtube:</strong> {props.profile.contacts.youtube}
                    </div>
                    <div>
                        <strong>Github:</strong> {props.profile.contacts.github}
                    </div>
                    <div>
                        <strong>Main Link:</strong> {props.profile.contacts.mainLink}
                    </div>
                    <div>
                        <strong>Looking for a job:</strong> {props.profile.lookingForAJob}
                    </div>
                    <div>
                        <strong>Looking for a job description:</strong> {props.profile.lookingForAJobDescription}
                    </div>
                    <div>
                        <strong>About me:</strong> {props.profile.aboutMe}
                    </div>
                </div>
            </div>

        </div>
    );
}
export default ProfileInfo;