import React from "react";
import styles from './ProfileInfo.module.scss';

const ProfileInfo = () => {
    return (
        <div className={styles.profileInfo}>
            <div>
                <img className={styles.image} alt='' src='https://sun9-87.userapi.com/c639622/v639622398/42b64/QHY8sDwTDIA.jpg'/>
            </div>
        </div>
    );
}

export default ProfileInfo;