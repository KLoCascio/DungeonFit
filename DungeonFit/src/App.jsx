import { useState } from 'react'
import './App.css'

//COMPONENTS
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

function App() {

  return (
    <>
      {/* Icon and App Name */}
        <Header />
      <div className="Content">
        <Main />
      </div>
      {/* Footer Will be at the bottom for App Format, Navbar for Browser Setup */}
      <div className='footerDiv'>
        <Footer />
      </div>
    </>
  )
}

export default App
