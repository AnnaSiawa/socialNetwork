import React from "react";
import styles from './Post.module.scss';

const Post = (props) => {
    return (
        <div className={styles.item}>
            <img className={styles.image} alt=''
                 src='https://avatars.mds.yandex.net/i?id=53c203e50c91f3269e2b69fcceb701b5-4600825-images-thumbs&n=13'/>
            <div>{props.message}</div>
            <div>like {props.like}</div>
        </div>
    );
}

export default Post;