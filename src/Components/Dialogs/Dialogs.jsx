import React from "react";
import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Messages/Message";

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