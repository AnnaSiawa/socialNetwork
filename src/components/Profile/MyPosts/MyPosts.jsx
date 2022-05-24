import React from "react";
import styles from './MyPosts.module.scss';
import Post from "./Posts/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    //1.создать пустую ссылку
    let newPostElement = React.createRef();

    let addPost = () => {
        //3.обратиться к объекту со ссылкой
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={styles.myPost}>
            <div>
                <img className={styles.ava} alt=''
                     src='https://avatars.mds.yandex.net/i?id=37ca37f52ce37f025614494a08661b80-5650815-images-thumbs&n=13'/>
            </div>
            <div>my post</div>
            {/*2.привязать пустую ссылку к textarea*/}
            <textarea
                ref={newPostElement}
                value={props.newPostText}
                onChange={onPostChange}/>
            <button onClick={addPost}>App post</button>
            <button>Remove</button>

            <div>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;