import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2022/01/add-image-in-flutter-hero.png?fit=2850%2C1801&ssl=1' alt='mountain' />
        </div>
        <div>
            ava + description
        </div>
        <div>
            my posts
            <div>
                new post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    </div>
}

export default Profile;