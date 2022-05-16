import React from "react";
import styles from './SideBar.module.scss';
import MyFiends from './MyFiends/MyFiends'

const SideBar = (props) => {

    let fiendsElements = props.state.friends.map(f => <MyFiends name={f.name} />)

    return (
        <div className={styles.sideBar}>
            <div className={styles.title}>friends</div>
            <div className={styles.container}>{ fiendsElements }</div>
        </div>
    )
}

export default SideBar;