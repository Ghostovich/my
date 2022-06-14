import React from 'react'; 
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

    <div>
      my posts
      <div>
        new post
      </div>
    </div>

    <div>
      <div>
        post1
      </div>
      <div>
        post2
      </div>
    </div>

  </div>
);
}

export default Profile;