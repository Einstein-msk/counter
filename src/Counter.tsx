import React, {FC, useState} from 'react';
import s from "./Counter.module.css"
import Button from "./Button";
import {CounterSettings} from "./CounterSetting";
import button from "./Button";
import {UniversalButton} from "./UniversalButton";


type CounterPropsType = {
    counter: number
    setCounter: (count: number) => void
    minValue: number
    maxValue: number
    settings:boolean
    setSetting:(status:boolean)=>void

}
const Counter = (props: CounterPropsType) => {
    const incButtonTitle: string = "inc"
    const resetButtonTitle: string = "reset"
    const settingsButton:string = "set"
    const disableIncButton = props.counter === props.maxValue || props.maxValue < props.minValue;
    const disableResetButton = props.counter === props.minValue;
    const warningRed = props.counter !== props.maxValue;
    const valuesError = props.minValue > props.maxValue || props.maxValue === props.minValue
    const incCounter = () => {
        if (props.counter < props.maxValue) {
            props.setCounter(props.counter + 1)
        }
    }
    const resetCounter = () => {
        props.setCounter(props.minValue)
    }
    const openSettingsPage=() => {
        props.setSetting(!props.settings)
    }


    return (
        <div className={s.counter}>
            {valuesError
                ? <div className={s.valuesError}>The values are incorrect</div>
                :  <div className={warningRed ? s.counterLet : s.warningRed}>{props.counter}</div>}
            <div className={s.buttonsBlock}>
                <UniversalButton title={incButtonTitle} callBack={incCounter} disabled={disableIncButton}/>
                <UniversalButton title={resetButtonTitle} callBack={resetCounter} disabled={disableResetButton}/>
                <UniversalButton title={settingsButton} callBack={openSettingsPage} disabled={false}/>
            </div>
        </div>
    );
};

export default Counter;