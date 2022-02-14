import React from 'react';
import styles from './Dialogs.module.scss'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
               <DialogItem name="Anna" id="1"/>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/2">Sasha</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/3">Ivan</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/4">Ilia</NavLink>
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>Hi</div>
                <div className={styles.message}>How are you?</div>
                <div className={styles.message}>Yo</div>
            </div>
        </div>
    );
}

export default Dialogs;