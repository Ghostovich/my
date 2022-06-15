import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.item}>
      <div>
        my posts
      </div>
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
<Post Like="2" Message="Come on!"/>



    </div>
  );
}

export default MyPosts;