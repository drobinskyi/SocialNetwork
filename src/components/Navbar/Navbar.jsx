import s from './Navbar.module.css';

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
            <p>Profile</p>
        </div>
        <div className={s.item}>
            <p>Messages</p>
        </div>
        <div className={s.item}>
            <p>News</p>
        </div>
        <div className={s.item}>
            <p>Music</p>
        </div>
        <div className={s.item}>
            <p>Settings</p>
        </div>
    </nav>
}

export default Navbar;