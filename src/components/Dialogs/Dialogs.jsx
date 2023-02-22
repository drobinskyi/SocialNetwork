import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div>
            <NavLink to={path} className={(navData) => navData.isActive ? s.active : s.dialog}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dmytro" id="1" />
                <DialogItem name="Andriy" id="2" />
                <DialogItem name="Svitlana" id="3" />
                <DialogItem name="Sasha" id="4" />
                <DialogItem name="Viktor" id="5" />
            </div>
            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="How is your day?" />
                <Message message="Nice!" />
            </div>

        </div>
    )

}

export default Dialogs;