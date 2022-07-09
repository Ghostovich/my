import React from 'react';
import s from "./../Friends.module.css";

const Friend = (props) => {



           return (
           <div className={s.frs}>
               <div >

                   <img className={s.img} alt="a" src="http://www.4words.ru/photos/avamax/avamax.jpg" />
                   <div className={s.fr}>{props.name}</div>

               </div>

           </div>



  );
}

export default Friend




