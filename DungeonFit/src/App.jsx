import { useState } from 'react'
import './App.css'

// FEEDS
import AchievementFeed from './feeds/AchievementFeed'
import GoalsFeed from './feeds/GoalsFeed'
import NewsFeed from './feeds/NewsFeed'

//COMPONENTS
import Activities from './components/Activities'
import Achievements from './components/Achievements'
import Character from './components/Character'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Main from './components/Main'
import Navbar from './components/Nav'
import Party from './components/Party'
import SignUp from './components/SignUp'


function App() {

  return (
    <>
      {/* Icon and App Name */}
        <Header />
        <Navbar />

      <div className="Content">
        <Home />
        <Main />
        <NewsFeed />

        {/* MVP: Show User Achievements Completed
        Stretch: Show friends Achieveents Completed */}

        {/* <AchievementFeed /> */}

        {/* MVP: Show User Quests
        SUPER Stretch: Close to complete Achievement */}

        {/* <GoalsFeed /> */}

      </div>
      {/* Footer Will be at the bottom for App Format, Navbar for Browser Setup */}
      {/* <Footer /> */}

    </>
  )
}

export default App
