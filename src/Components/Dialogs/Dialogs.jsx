import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom"

const Dialog = (props) => {

    let path="/Dialogs/" + props.id

    return (
        <div >
        <NavLink to={path} className= { dialogData => dialogData.isActive ? s.active : s.dialog }>{props.name}</NavLink>
        </div>
    )
}

const Message=(props)=>{
return (
    <div className={s.message}>{props.message}</div>

)
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <Dialog name="Phil" id="1"/>
                <Dialog name="Anton" id="2"/>
                <Dialog name="Petya" id="3"/>
                <Dialog name="Vasya" id="4"/>

            </div>

            <div className={s.messages}>

                <Message message="hi"/>
                <Message message="men"/>
                <Message message="what`s up?"/>

            </div>
        </div>
    )
}

export default Dialogs