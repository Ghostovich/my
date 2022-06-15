import React from 'react'; 
import MyPosts from './MyPosts/MyPosts';
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>

    <div>
      <img alt="r" src="https://imgv3.fotor.com/images/side/sideimage-one-tap-enhance.jpg" />
    </div>

    <div>
      ava+discription
    </div>

    <MyPosts />

  </div>
);
}

export default Profile;