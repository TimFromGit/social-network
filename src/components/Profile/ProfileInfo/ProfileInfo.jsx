import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.descr}>
            <div className={s.img}></div>
            <div className={s.descriptionBlock}>
                <div className={s.profilePhoto}></div>
                <div className={s.profileData}>
                    <div>
                        <strong>Name:</strong> John
                    </div>
                    <div>
                        <strong>Surname:</strong> Doe
                    </div>
                    <div>
                        <strong>Ages:</strong> 23
                    </div>
                    <div>
                        <strong>Sex:</strong> man
                    </div>
                    <div>
                        <strong>Interests:</strong> books
                    </div>
                    <div>
                        <strong>About me:</strong> asldjalsdkj adsjdaj alksjd
                    </div>

                </div>
            </div>
        </div>
    );
}
export default ProfileInfo;