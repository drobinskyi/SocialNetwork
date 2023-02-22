import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.cover}>
                <img src='https://media.istockphoto.com/id/1287021364/photo/wide-angle-blue-celebration-bokeh-background.jpg?b=1&s=170667a&w=0&k=20&c=SLOK2idjHdYVZFB14wbWWjh-LvGv7biFyrSyUWBqmLU=' alt='mountain' />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;