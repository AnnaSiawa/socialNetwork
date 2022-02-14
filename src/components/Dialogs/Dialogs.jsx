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

const Message = (props) => {
    return (
        <div className={styles.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {

    let dialogsData = [{id: 1, name: 'Anna'}, {id: 2, name: 'Sasha'}, {id: 3, name: 'Ivan'}, {id: 4, name: 'Ilia'}];

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name="Anna" id="1"/>
                <DialogItem name="Sasha" id="2"/>
                <DialogItem name="Ivan" id="3"/>
                <DialogItem name="Ilia" id="4"/>
            </div>
            <div className={styles.messages}>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="Yo"/>
            </div>
        </div>
    );
}

export default Dialogs;