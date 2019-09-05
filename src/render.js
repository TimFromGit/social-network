import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from "./redux/state";
import {addPost} from "./redux/state";

//addPost("This is test new post");
let renderEntireTree = () => {
    ReactDOM.render(<App state={state} addPost={addPost}/>, document.getElementById('root'));
}
renderEntireTree ();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
