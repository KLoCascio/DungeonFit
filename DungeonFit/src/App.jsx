import { useState } from 'react'
import './App.css'

// FEEDS
import AchievementFeed from './feeds/AchievementFeed'
import GoalsFeed from './feeds/GoalsFeed'
import NewsFeed from './feeds/NewsFeed'

//COMPONENTS
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Main from './components/Main'
import Navbar from './components/Nav'


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
        <AchievementFeed />
        {/* MVP: Show User Quests
        SUPER Stretch: Close to complete Achievement */}
        <GoalsFeed />
      </div>
      {/* Footer Will be at the bottom for App Format, Navbar for Browser Setup */}
      <Footer />
    </>
  )
}

export default App
