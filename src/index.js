import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: "It's my life", likesCount: 12},
    {id: 2, message: "It's now or never", likesCount: 33},
    {id: 3, message: "I ain't gonna live forever", likesCount: 78},
];

let dialogs = [
    {id: 1, name: "Timur"},
    {id: 2, name: "Sergey"},
    {id: 3, name: "Inokentii"},
    {id: 4, name: "Viktor"},
    {id: 5, name: "Valera"},
    {id: 6, name: "Sveta"},
    {id: 7, name: "Vyacheslav"}
]
let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Yo"},
    {id: 3, message: "Bla bla bla"},
    {id: 4, message: "Yeahaaaaa"},
    {id: 5, message: "Yeahaaaaa"},
    {id: 6, message: "Yeahaaaaa"},
    {id: 7, message: "Yeahaaaaa"}
]

ReactDOM.render(<App posts={posts}
                     messages={messages}
                     dialogs={dialogs}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
