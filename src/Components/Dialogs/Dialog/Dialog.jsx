import React from "react";
import s from "./../Dialogs.module.css"
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



export default Dialog