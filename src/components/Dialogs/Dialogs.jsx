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

    let dialogs = [
        {id: 1 , name: 'Dmytro'},
        {id: 2 , name: 'Andriy'},
        {id: 3 , name: 'Svitlana'},
        {id: 4 , name: 'Sasha'},
        {id: 5 , name: 'Viktor'}
    ];

    let messages = [
        {id: 1 , message: 'Hi', key: 11},
        {id: 2 , message: 'How is your day?', key: 12},
        {id: 3 , message: 'Nice!', key: 13},
        {id: 4 , message: 'Ok', key: 14},
        {id: 5 , message: 'At least I tried', key: 15}
    ];

    let dialogElements = dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.name} /> );
    let messagesElements = messages.map( m => <Message message={m.message} id={m.id} key={m.key} /> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>

        </div>
    )

}

export default Dialogs;