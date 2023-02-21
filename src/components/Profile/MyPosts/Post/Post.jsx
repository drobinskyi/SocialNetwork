import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <img src='https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993__340.png' alt='avatar' />
            {props.message}
            <div>
                <span>&#9829;</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;