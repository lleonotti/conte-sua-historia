import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./MyStories.css";
import Header from "../components/Header";
import Post from "../components/Post";
import Ad from "../components/AdBox";
import NovaHistoria from "../components/NovaHistoria";
import plusBtn from "../assets/plusBtn.svg";
import Perfil from "../components/Perfil";
import Story from "../components/Story";

function MyStories() {
  const [navState, setNavState] = useState(1);

  return (
    <div className="myStories-container" id="myStories-page-id">
      <Navbar navState={navState} />
      <div className="header-content-container">
        <Header navState={navState} />
        <main className="myStories-main-section" id="myStories-section-id">
          <div className="myStories-content-container">
            <div className="story-greeting">
              <h2 id="story-title">Suas Histórias</h2>
              <p id="story-subtitle">
                Todas as suas histórias estão bem guardadas aqui!
              </p>
            </div>
            <Story />
            <Story />
            <Story />
          </div>
          <Ad />
        </main>
      </div>
    </div>
  );
}

export default MyStories;
