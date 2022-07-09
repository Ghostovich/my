import React from 'react';

import s from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = (props) => {

    let friendElement = props.state.Friends.map (f=><Friend id={f.id} name={f.name}/>)

  return (



        <div>

            <div className = {s.item }>Friends</div>

            {friendElement}

        </div>


  );
}

export default Friends



