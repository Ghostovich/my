import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.item}>
      <div>
        <h3>my posts</h3>
      </div>
      <div>
          <div>
              <textarea></textarea>
          </div>

        <div>
            <button>Add Post</button>
        </div>

      </div>

        <div className={s.post}>
            <Post Like="2" Message="Come on!"/>
        </div>




    </div>
  );
}

export default MyPosts;