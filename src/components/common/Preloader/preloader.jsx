import preloader from "../../../assets/images/loader200.svg";
import React from "react";
import s from './Preloader.module.css'

let Preloader = (props) => {
    return <div className={s.preloader}>
        <img src={preloader} alt=''/>
    </div>
}

export default Preloader;