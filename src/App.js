import React from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar'
import { Routes, Route } from 'react-router-dom'
import Section1 from './components/Section 1/Section1'
import Section2 from './components/Section 2/Section2'
import Home from './components/Home/Home'
import { Reviews } from './components/Reviews/Reviews'
import About from './components/About/About'


const App = () => {
  return (
    <div className='App'>
      <div className='bg'>
        <Navbar />
        <div>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/movieoftheweek' element={<Section1 />} />
            <Route path='/newOTTs' element={<Section2 />} />
            <Route path='/reviews' element={<Reviews />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App