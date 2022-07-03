import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = () => {

    let Posts = [
        {id:1, message: "Come on!", Like:2},
        {id:2, message: "Eee", Like: 4}
    ]

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
            <Post Like={Posts[0].Like} Message={Posts[0].message}/>
        </div>

        <div className={s.post}>
            <Post Like={Posts[1].Like} Message={Posts[1].message}/>
        </div>


    </div>
  );
}

export default MyPosts;