import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return <div>
        <div className={s.cover}>
            <img src='https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2022/01/add-image-in-flutter-hero.png?fit=2850%2C1801&ssl=1' alt='mountain' />
        </div>
        <div>
            ava + description
        </div>
        <MyPosts />
    </div>
}

export default Profile;