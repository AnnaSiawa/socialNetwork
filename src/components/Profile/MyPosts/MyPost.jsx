import React from "react";
import styles from './MyPost.module.scss';
import Post from "./Posts/Post";

const MyPost = () => {
    return (
        <div className={styles.mypost}>
            <div>
                <img className={styles.ava} alt=''
                     src='https://avatars.mds.yandex.net/i?id=37ca37f52ce37f025614494a08661b80-5650815-images-thumbs&n=13'/>
            </div>
            <div>my post</div>
            <textarea/>
            <button>App post</button>
            <button>Remove</button>

            <div>
                <Post message='Hello' like='6'/>
                <Post message='How are you?' like='7'/>
                <Post message="It's my first post" like='1'/>
                <Post message='Did you like the film?' like='16'/>
                <Post message='Hello' like='8'/>
            </div>
        </div>
    );
}

export default MyPost;