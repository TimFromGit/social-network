import React from 'react';
import Header from "./components/Header/Header";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.state.sidebar}/>
                <div className="app-wrapper-content">
                    <Route exact path='/' render={() => <Redirect to="/profile"/>}/>
                    <Route path='/profile' render={() => <Profile state={props.state.profilePage}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    {/* eslint-disable-next-line no-unused-expressions */}
                    <Route path='/friends' render={() => <Friends state={props.state.sidebar}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
