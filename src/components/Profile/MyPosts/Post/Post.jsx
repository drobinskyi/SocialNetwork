import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993__340.png' alt='avatar' />
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;