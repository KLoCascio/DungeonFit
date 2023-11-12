import { useState } from 'react'
import './App.css'

//COMPONENTS
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

function App() {

  return (
    <>
        <Header />
      <div className="Content">
        <Main />
      </div>

      <div className='footerDiv'>
        <Footer />
      </div>
    </>
  )
}

export default App
