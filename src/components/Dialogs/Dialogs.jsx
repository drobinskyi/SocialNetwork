import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.name} /> );
    let messagesElements = props.state.messages.map( m => <Message message={m.message} id={m.id} key={m.key} /> );

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