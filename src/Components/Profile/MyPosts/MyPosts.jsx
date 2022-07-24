import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';
import {type} from "@testing-library/user-event/dist/type";

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'})
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText: text } )
    }

    let postElements = props.state.Posts.map(p => <Post Like={p.Like} Message={p.message}/>)

    return (
        <div className={s.item}>
            <div>
                <h3>my posts</h3>
            </div>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                </div>

                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>

            </div>

            <div className={s.post}>
                {postElements}
            </div>


        </div>
    );
}

export default MyPosts;