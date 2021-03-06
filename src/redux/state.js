let rerenderEntireTree = () => {
    console.log('State change');
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello', likesCount: 6},
            {id: 2, message: 'How are you?', likesCount: 7},
            {id: 3, message: 'It\'s my first post', likesCount: 1},
            {id: 4, message: 'Did you like the film?', likesCount: 16},
        ],
        newPostText: 'it'
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

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}


export default state;