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

    let dialogs = [
        {id: 1, name: 'Anna'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Ivan'},
        {id: 4, name: 'Ilia'}
    ];

    let messages = [
        {id: 1, message: 'Hi"'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'}
    ];

    //создать массив компонентов DialogItem (отрисовка компонента
    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/> );

    //создать массив компонентов Message
    let messagesElements = messages.map(m => <Message message={m.message} id={m.id}/> );


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={styles.messages}>
                { messagesElements }
            </div>
        </div>
    );
}

export default Dialogs;