import React from "react";
import styles from "./MyFiends.module.scss";

const MyFiends = (props) => {
    return (
        <div className={styles.myFiends}>
            <img className={styles.image} alt=''
                 src='https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mikki-maus-28.jpg'/>
            <div className={styles.name}>{props.name}</div>
        </div>
    );
}

export default MyFiends;