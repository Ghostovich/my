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


    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <Dialog name={DItem[0].name} id={DItem[0].id}/>
                <Dialog name={DItem[1].name} id={DItem[1].id}/>
                <Dialog name={DItem[2].name} id={DItem[2].id}/>
                <Dialog name={DItem[3].name} id={DItem[3].id}/>

            </div>

            <div className={s.messages}>

                <Message message={Mess[0].mess}/>
                <Message message={Mess[1].mess}/>
                <Message message={Mess[2].mess}/>

            </div>
        </div>
    )
}

export default Dialogs