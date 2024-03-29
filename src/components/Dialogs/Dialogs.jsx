import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.name} /> );
    let messagesElements = state.messages.map( m => <Message message={m.message} id={m.id} key={m.message} /> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
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
                        <textarea 
                            onChange={onNewMessageChange} 
                            value={ newMessageBody } 
                            placeholder='Enter your new message' />
                    </div>
                    <div className={s.buttonSendMessage}>
                        <button onClick={ onSendMessageClick }>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Dialogs;