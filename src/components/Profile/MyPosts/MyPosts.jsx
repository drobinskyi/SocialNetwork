import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        {id: 1 , message: "Hi, how are you?", likesCount: 12},
        {id: 2 , message: "It's my first post", likesCount: 23}
    ];

    let postsElements = posts.map( post => <Post message={post.message} likesCount={post.likesCount} key={post.message} /> );

    return(
        <div className={s.postsBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                { postsElements } 
            </div>
        </div>
    )
}

export default MyPosts;