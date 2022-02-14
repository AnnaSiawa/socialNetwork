import React from "react";
import styles from './Profile.module.scss';
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={styles.profile}>
            <ProfileInfo />
            <MyPost />
        </div>
    );
}

export default Profile;