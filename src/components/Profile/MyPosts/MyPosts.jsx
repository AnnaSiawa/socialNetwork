import React from "react";
import styles from './MyPosts.module.scss';
import Post from "./Posts/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

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
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts;