import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? styles.selectedPage : styles.pagesNumber} onClick={(e) => { props.onPageChanged(p); }}>{p}&nbsp;</span>
                })}  
            </div>
            {
                props.users.map(u => <div key={u.id} className={styles.usersCard}>
                    <div>
                        <div>
                            <img src={ u.photos.small != null ? u.photos.small : userPhoto } alt="" className={styles.userPhoto} />
                        </div>
                    </div>
                    <div className={styles.usersName}>
                        <div>
                            <div>{ u.name }</div>
                            <div>{ u.status }</div>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users;