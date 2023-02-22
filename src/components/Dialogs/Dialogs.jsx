import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div>
                    <NavLink to="/dialogs/1" className={(navData) => navData.isActive ? s.active : s.dialog}>Dmytro</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs/2" className={(navData) => navData.isActive ? s.active : s.dialog}>Andriy</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs/3" className={(navData) => navData.isActive ? s.active : s.dialog}>Svitlana</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs/4" className={(navData) => navData.isActive ? s.active : s.dialog}>Sasha</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs/5" className={(navData) => navData.isActive ? s.active : s.dialog}>Viktor</NavLink>
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