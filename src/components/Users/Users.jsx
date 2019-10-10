import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";

const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount }
                   pageSize={pageSize} portionSize="20"/>
        <div>
            {
                users.map(u => <User
                        user={u}
                        key={u.id}
                        followingInProgress={props.followingInProgress}
                        unfollow={props.unfollow}
                        follow={props.follow}
                    />
                )
            }
        </div>
    </div>
}

export default Users;