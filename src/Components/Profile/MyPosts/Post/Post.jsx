import React from 'react';
import s from "./Post.module.css";

const Post = (Props) => {
  return (

    <div className={s.item}>

      <img alt="Ava" src='https://histrf.ru/images/biographies/12/gStuerWbjg8H4QDdyRY7TdtXconTX2duaHXOUz8f.jpg' />

      {Props.Message}
      <div>
        {Props.Like} like
      </div>

    </div>
  );
}

export default Post;