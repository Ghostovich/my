import React from "react";
import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Messages/Message";

const Dialogs = (props) => {



    let dialogElement = props.DItem.map (d=><Dialog name={d.name} id={d.id}/>);

    let messageElement = props.Mess.map (m=> <Message message={m.mess}/> )

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