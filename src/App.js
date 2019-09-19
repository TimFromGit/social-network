import React from 'react';
import Header from "./components/Header/Header";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Redirect, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route exact path='/' render={() => <Redirect to="/profile"/>}/>
                <Route path='/profile' render={() => <Profile
                    store={props.store}/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer
                    store={props.store}/>}/>
                <Route path='/users' render={() => <UsersContainer />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/friends' render={() => <FriendsContainer/>}/>
            </div>
        </div>

    );
}

export default App;
