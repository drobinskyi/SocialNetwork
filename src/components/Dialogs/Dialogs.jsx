import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.name} /> );
    let messagesElements = props.state.messages.map( m => <Message message={m.message} id={m.id} key={m.message} /> );

    let newMessageElement = React.createRef();

    let addNewMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogElements }
            </div>
            <div className={s.messages}>
                <div className={s.message}>{ messagesElements }</div>
                <div className={s.writeMessage}>
                    <div className={s.newTextMessage}>
                        <textarea onChange={onMessageChange} ref={newMessageElement} value={ props.newMessageText } />
                    </div>
                    <div className={s.buttonSendMessage}>
                        <button onClick={ addNewMessage }>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Dialogs;