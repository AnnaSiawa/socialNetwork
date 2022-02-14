import React from "react";
import styles from './Profile.module.scss';
import MyPost from "./MyPosts/MyPost";

const Profile = () => {
    return (
        <div className={styles.profile}>
            <div>
                <img className={styles.image} alt='' src='https://sun9-87.userapi.com/c639622/v639622398/42b64/QHY8sDwTDIA.jpg'/>
            </div>

            <MyPost />
        </div>
    );
}

export default Profile;