import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom"

const Dialog = (props) => {


    let path = "/Dialogs/" + props.id

    return (
        <div>
            <NavLink to={path}
                     className={dialogData => dialogData.isActive ? s.active : s.dialog}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>

    )
}

const Dialogs = () => {

    let DItem = [
        {id: 1, name: "Phil"},
        {id: 2, name: "Anton"},
        {id: 3, name: "Petya"},
        {id: 4, name: "Vasya"}

    ];

    let Mess = [
        {id: 1, mess: "Hi"},
        {id: 2, mess: "Men"},
        {id: 3, mess: "What`s up"}


    ];

    let dialogElement = DItem.map (d=><Dialog name={d.name} id={d.id}/>);

    let messageElement = Mess.map (m=> <Message message={m.mess}/> )

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogElement}

            </div>

            <div className={s.messages}>

                {messageElement}

            </div>
        </div>
    )
}

export default Dialogs