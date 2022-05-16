import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hello', likesCount: 6},
    {id: 2, message: 'How are you?', likesCount: 7},
    {id: 3, message: 'It\'s my first post', likesCount: 1},
    {id: 4, message: 'Did you like the film?', likesCount: 16},
];

let dialogs = [
    {id: 1, name: 'Anna'},
    {id: 2, name: 'Sasha'},
    {id: 3, name: 'Ivan'},
    {id: 4, name: 'Ilia'}
];

let messages = [
    {id: 1, message: 'Hi"'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'}
];

ReactDOM.render(
  <React.StrictMode>
    <App
        posts={ posts }
        dialogs={ dialogs }
        messages={ messages }
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
