import React from "react";
import styles from './Users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, followed: false, photoUrl: 'https://img.freepik.com/premium-vector/happy-smiling-young-man-avatar-3d-portrait-man-cartoon-character-people-vector-illustration_653240-187.jpg', fullName: 'Dmytro', status: 'I am a boss', location: { city: 'Kyiv', country: 'Ukraine' } },
            { id: 2, followed: true, photoUrl: 'https://img.freepik.com/premium-vector/happy-smiling-young-man-avatar-3d-portrait-man-cartoon-character-people-vector-illustration_653240-187.jpg', fullName: 'Ann', status: 'Hello', location: { city: 'VInnytsia', country: 'Ukraine' } },
            { id: 3, followed: false, photoUrl: 'https://img.freepik.com/premium-vector/happy-smiling-young-man-avatar-3d-portrait-man-cartoon-character-people-vector-illustration_653240-187.jpg', fullName: 'Vitalii', status: 'I am a boss too', location: { city: 'Lviv', country: 'Ukraine' } }
        ]);
    };
    
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={ u.photoUrl } alt="" className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{ u.fullName }</div>
                        <div>{ u.status }</div>
                    </span>
                    <span>
                        <div>{ u.location.city }</div>
                        <div>{ u.location.country }</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;