import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElements = props.Posts.map(p => <Post Like={p.Like} Message={p.message}/>)

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
                {postElements}
            </div>


        </div>
    );
}

export default MyPosts;