import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src="https://www.freepnglogos.com/uploads/white-jack-daniels-holiday-whiskey-logo-png-2.png"/>
            </div>
            <div className={s.title}>
                welcome to Jacky, buddy!
            </div>
        </header>
    )
}
export default Header;