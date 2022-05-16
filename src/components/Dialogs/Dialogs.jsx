import React from 'react';
import styles from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    //создать массив компонентов DialogItem (отрисовка компонента)
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/> );

    //создать массив компонентов Message
    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/> );


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