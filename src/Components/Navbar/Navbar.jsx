import React from 'react';
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <a className={s.item} href="/Profile">Profile</a>
      </div>

      <div >
        <a className={s.item} href="/Dialogs">Messages</a>
      </div>

      <div >
        <a className={`${s.item} ${s.active}`} href="/News">News</a>
      </div>

      <div className={s.item}>
        <a href="/Music">Music</a>
      </div>

      <div>
        <a href="/Settings">Settings</a>
      </div>
    </nav>
  );
}

export default Navbar;