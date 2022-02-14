import React from "react";
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <img alt='' src='https://avatars.mds.yandex.net/i?id=223c4eb7b3b64ec8365b9e2248aca070-4198214-images-thumbs&n=13'/>
        </header>
    );
}

export default Header;