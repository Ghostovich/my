import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Setttings/Settings";




const App = (props) => {
    return (
<BrowserRouter>
        <div className='app-wrapper'>

            <Header/>
            <Navbar state={props.state.Navbar}/>




            <div className="app-wrapper-content">
                <Routes>
                <Route path="/Dialogs/*" element={<Dialogs state={props.state.DialogsPage}/>} />
                <Route path='/Profile' element={<Profile state={props.state.ProfilePage} addPost={props.addPost}/>} />
                    <Route path='/News' element={<News/>} />
                    <Route path='/Music' element={<Music/>} />
                    <Route path='/Settings' element={<Settings/>} />
                </Routes>
             </div>


        </div>
</BrowserRouter>
    )
}

export default App;

