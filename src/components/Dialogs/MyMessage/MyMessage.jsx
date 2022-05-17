import React from "react";
import styles from './MyMessage.module.scss';

const MyMessage = () => {
    //1.создать пустую ссылку
    let newMessageElement = React.createRef();

    let addMessage = () => {
        //3.обратиться к объекту со ссылкой
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div className={styles.myMessage}>
            {/*2.привязать пустую ссылку к textarea*/}
            <textarea ref={newMessageElement}></textarea>
            <button onClick={addMessage}>send</button>
            <button>remove</button>
        </div>
    );
}

export default MyMessage;
