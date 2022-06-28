import React from "react";
import s from "./Dialogs.module.css"


const Dialogs =() =>{
    return (
        <div className={s.dialogs}>

           <div className={s.dialogsItems}>

               <div className={s.dialog + " " + s.active}>Phil</div>
               <div className={s.dialog}>Anton</div>
               <div className={s.dialog}>Petya</div>
               <div className={s.dialog}>Vasya</div>

           </div>

           <div className={s.messages}>

               <div className={s.message}>hi</div>
               <div className={s.message}>men</div>
               <div className={s.message}>what`s up</div>

           </div>
        </div>
    )
}

export default Dialogs