import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Twitter_t_Logo.svg/1200px-Twitter_t_Logo.svg.png' alt='logo' />
    </header>
}

export default Header;