import {Route, Routes} from "react-router-dom";
import styles from './App.module.scss';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import SideBar from "./components/SideBar/SideBar";

import "./style/button.scss"
import "./style/textarea.scss"

const App = (props) => {

    return (
        <div className={styles.app__wrapper}>
            <Header/>
            <Navbar/>

            <div className={styles.app__inner}>
                <div className={styles.content}>
                    <Routes>
                        <Route path='/dialogs'
                               element={<Dialogs state={props.state.dialogsPage}/>}/>
                        <Route path='/profile'
                               element={<Profile
                                   profilePage={props.state.profilePage}
                                   addPost={props.addPost}
                                   updateNewPostText={props.updateNewPostText}
                               />}/>

                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>

                <SideBar state={props.state.sideBar}/>
            </div>
        </div>
    );
}

export default App;