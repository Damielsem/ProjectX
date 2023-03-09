import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import News from "./components/Dialogs/News/News";
import Music from "./components/Dialogs/Music/Music";
import Settings from "./components/Dialogs/Settings/Settings";
const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs/*" element={<Dialogs />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>

        <div>
          <img
            className="background"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGpbDLejG39zSQXPqhmQ1RRbkw71W2lRU9Rw&usqp=CAU"
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
