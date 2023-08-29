import React from 'react';
import s from "./Counter.module.css";

type ButtonPropsType = {
    disableIncButton:boolean
    disableResetButton:boolean
    incCounter:()=>void
    resetCounter:()=>void
}
const Button = (props:ButtonPropsType) => {
    return (
        <div className={s.buttonsBlock}>
            <button className={s.buttons} onClick={props.incCounter} disabled={props.disableIncButton}>inc</button>
            <button className={s.buttons} onClick={props.resetCounter} disabled={props.disableResetButton}>reset</button>
        </div>
    );
};

export default Button;