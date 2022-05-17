import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello', likesCount: 6},
            {id: 2, message: 'How are you?', likesCount: 7},
            {id: 3, message: 'It\'s my first post', likesCount: 1},
            {id: 4, message: 'Did you like the film?', likesCount: 16},
        ]
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi"'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'}
        ],
        dialogs: [
            {id: 1, name: 'Anna'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Ivan'},
            {id: 4, name: 'Ilia'}
        ]
    },
    sideBar: {
        friends: [
            {id: 1, name: 'Anna'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Ivan'},
            {id: 1, name: 'Anna'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Ivan'},
            {id: 1, name: 'Anna'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Ivan'},
            {id: 1, name: 'Anna'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Ivan'},
            {id: 1, name: 'Anna'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Ivan'},
            {id: 1, name: 'Anna'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Ivan'},
            {id: 4, name: 'Ilia'}
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}


export default state;