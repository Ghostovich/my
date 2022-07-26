import React from "react";
import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Messages/Message";
import {addMessTextAC, updateNewMessTextAC,} from "../../redux/state";

const Dialogs = (props) => {


    let dialogElement = props.state.DItem.map(d => <Dialog name={d.name} id={d.id}/>);

    let messageElement = props.state.Mess.map(m => <Message message={m.mess}/>)

    let newMessElement = React.createRef();

    let addMess = () => {
        props.dispatch(addMessTextAC())
    }


    let ChangeText = () => {
        let text = newMessElement.current.value;
        let action=updateNewMessTextAC(text)
        props.dispatch(action)
    }


    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogElement}

            </div>

            <div className={s.messages}>

                {messageElement}

                <div>
                    <textarea onChange={ChangeText} ref={newMessElement} value={props.newMessText}></textarea>
                </div>

                <div>
                    <button onClick={addMess}>Send</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs