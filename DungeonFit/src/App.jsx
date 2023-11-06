import { useState } from 'react'
import './App.css'

import Header from './components/Header'
// import Main from './components/Main'
import Footer from './components/Footer'

import AchievementFeed from './feeds/AchievementFeed'
import GoalsFeed from './feeds/GoalsFeed'
import NewsFeed from './feeds/NewsFeed'
import CharacterSummary from './components/CharacterSummary'

function App() {

  return (
    <>
      {/* Icon and App Name */}
      <Header />
      {/* Avatar Profile Picture and Info */}
      <CharacterSummary />
      <div className="Content">
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
