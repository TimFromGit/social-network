import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.descr}>
            <img
                src="https://cryptonomi.st/wp-content/uploads/2018/06/%D0%AD%D0%B2%D0%B5%D1%80%D0%B5%D1%81%D1%82_%D1%81_%D0%B2%D1%8B%D1%81%D0%BE%D1%82%D1%8B_%D0%BF%D0%BE%D0%BB%D0%B5%D1%82%D0%B0.jpg?w=640"
                alt=""/>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
}
export default ProfileInfo;