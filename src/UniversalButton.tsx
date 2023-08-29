import React, {FC} from "react";
import s from "./Counter.module.css"


type UniversalButtonPropsType = {
    title: string
    callBack:()=>void
    disabled:boolean

}
export const UniversalButton: FC<UniversalButtonPropsType> = (props) => {
    return (
        <button className={s.buttons} onClick={props.callBack} disabled={props.disabled}>{props.title}</button>
    )
}