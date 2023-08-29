import React, {ChangeEvent, useState} from 'react';
import s from "./Counter.module.css";
import Button from "./Button";
import {UniversalButton} from "./UniversalButton";

type CounterSettingsPropsType = {
    setMaxValue: (value: number) => void
    setMinValue: (value: number) => void
    counter: number
    setCounter:(count:number)=>void
    minValue: number
    maxValue: number
    settings:boolean
    setSetting:(status:boolean)=>void
}
export const CounterSettings = (props: CounterSettingsPropsType) => {
    const buttonName:string= "set"
    const incorrectValues = props.counter === props.maxValue || props.maxValue < props.minValue;

    const maxAndMinValues = {
        fontSize: "15px"
    }

    const inputStyle = {
        width: "50px",
        alignItems: "right",
        backgroundColor: incorrectValues ? "red" : ""
    }

    const [maxValueIsNumber, setMaxValueIsNumber] = useState<number>(0)
    const [minValueIsNumber, setMinValueIsNumber] = useState<number>(0)
    const onChangeMaxValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
       setMaxValueIsNumber(parseInt(e.currentTarget.value))
    }
    const onChangeMinValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValueIsNumber(parseInt(e.currentTarget.value))
    }

    const setValuesOnClickHandler = ()=> {
        props.setMaxValue(maxValueIsNumber)
        props.setMinValue(minValueIsNumber)
        props.setCounter(minValueIsNumber)
        props.setSetting(!props.settings)
    }

    return (
        <div className={s.counter}>
            <div className={"warningRed" ? s.counterLet : s.warningRed}>
                <div className={s.setInput}>
                    <span style={maxAndMinValues}>min value: </span>
                    <span><input type={"number"} placeholder={props.minValue.toString()} style={inputStyle} onChange={onChangeMinValueInputHandler}/></span>
                </div>
                <div className={s.setInput}>
                    <span style={maxAndMinValues}>max value: </span>
                    <span><input type={"number"} placeholder={props.maxValue.toString()} style={inputStyle} onChange={onChangeMaxValueInputHandler}/></span>
                </div>
            </div>
            <div className={s.buttonsBlock}>
                <UniversalButton title={buttonName} callBack={setValuesOnClickHandler} disabled={false}/>
            </div>
        </div>
    );
};

