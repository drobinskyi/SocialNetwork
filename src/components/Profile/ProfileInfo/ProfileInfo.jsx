import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import avatar from '../../../../src/assets/images/user.png'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    let avatarLarge = props.profile.photos.large;

    if (!avatarLarge) {
        avatarLarge = avatar;
    }

    return (
        <div>
            <div className={s.cover}>
                <img src='https://media.istockphoto.com/id/1287021364/photo/wide-angle-blue-celebration-bokeh-background.jpg?b=1&s=170667a&w=0&k=20&c=SLOK2idjHdYVZFB14wbWWjh-LvGv7biFyrSyUWBqmLU=' alt='mountain' />
            </div>
            <div className={s.descriptionBlock}>
                <img src={avatarLarge} alt="avatar" className={s.avatar} />
                <div>
                    <h1>{props.profile.fullName}</h1>
                    <p>{props.profile.aboutMe}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;