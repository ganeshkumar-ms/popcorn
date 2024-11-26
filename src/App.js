import React from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Home/Login'
import { Reviews } from './components/Reviews/Reviews'
import About from './components/About/About'
import Signup from './components/Home/Signup'
import Forgetpw from './components/Home/Forgetpw'
import Dashboard from './Admin/Dashboard'
import Home from './components/Home/Home'
import Exclusive from './components/Exclusive/Exclusive'
import Profile from './components/ProfileDashboard/Profile'
import Movieoftheweek from './components/Movie of the week/movieoftheweek'
import NewOTTs from './components/New OTT Releases/newOTTs'


const App = () => {
  return (
    <div className='App'>
      <div className='bg'>
        <Navbar />
        <div>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/' element={<Home />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/forgetpassword' element={<Forgetpw />}/>
            <Route path='/movieoftheweek' element={<Movieoftheweek />} />
            <Route path='/exclusive' element={<Exclusive />} />
            <Route path='/newOTTs' element={<NewOTTs />} />
            <Route path='/reviews' element={<Reviews />} />
            <Route path='/about' element={<About />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App