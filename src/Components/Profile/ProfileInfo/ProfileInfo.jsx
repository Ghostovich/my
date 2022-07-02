import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>

    <div>
      <img alt="r" src="https://imgv3.fotor.com/images/side/sideimage-one-tap-enhance.jpg" />
    </div>

    <div className={s.descriptionBlock}>
      ava+discription
    </div>


  </div>
);
}

export default ProfileInfo;