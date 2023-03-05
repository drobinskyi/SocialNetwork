import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount} key={post.message} /> );

    let newPostElement = React.createRef();

    let addNewPost = () => {
        props.dispatch({ type: 'ADD-POST' });
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
        props.dispatch(action);
    };

    return(
        <div className={s.postsBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea onChange={ onPostChange } ref={newPostElement} value={ props.newPostText } />
            </div>
            <div>
                <button onClick={ addNewPost }>Add post</button>
            </div>
            <div className={s.posts}>
                { postsElements } 
            </div>
        </div>
    )
}

export default MyPosts;