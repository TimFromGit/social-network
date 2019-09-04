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
                        <strong>About me:</strong> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi non velit non neque molestie aliquet. Aenean quis rutrum odio. Sed faucibus consequat metus, eget sagittis erat accumsan nec. Curabitur malesuada nisi quis eleifend fringilla. Integer at nisi sit amet nibh blandit bibendum. Integer pellentesque condimentum dui, vel ullamcorper nulla molestie at. Duis quis facilisis leo. Aliquam id ante risus. Sed sit amet enim nisi. Quisque scelerisque convallis quam, eu lacinia lacus congue vitae. Donec eu velit blandit, ornare nunc a, pellentesque quam. Praesent eros metus, congue id nibh vitae, lobortis volutpat ex. Vivamus non laoreet nisl. Nunc accumsan rhoncus ex sed ultrices.
                    </div>

                </div>
            </div>
        </div>
    );
}
export default ProfileInfo;