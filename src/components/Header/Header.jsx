import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src="https://www.freepnglogos.com/uploads/white-jack-daniels-holiday-whiskey-logo-png-2.png"
                     alt="Здесь логотип"/>
            </div>
            <div className={s.welcomBar}>
                <div className={s.title}>
                    Welcome to Jacky, buddy!
                </div>
                <div className={s.loginBlock}>
                    {props.isAuth ? props.login
                        : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </header>
    )
}
export default Header;