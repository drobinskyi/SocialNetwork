import s from './Dialogs.module.css';

const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog +' '+ s.active}>
                    Dmytro
                </div>
                <div className={s.dialog}>
                    Andriy
                </div>
                <div className={s.dialog}>
                    Svitlana
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Viktor
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your day?</div>
                <div className={s.message}>Nice!</div>
            </div>

        </div>
    )

}

export default Dialogs;