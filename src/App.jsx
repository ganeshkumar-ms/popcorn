import React from 'react'
import './App.css'
import Navbar from './components/layout/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Login from './features/auth/Login/Login'
import { Reviews } from './pages/Reviews/Reviews'
import About from './pages/About/About'
import Signup from './features/auth/Signup/Signup'
import ForgotPassword from './features/auth/ForgotPassword/ForgotPassword'
import Home from './pages/Home/Home'
import Exclusive from './pages/Exclusive/Exclusive'
import Profile from './pages/Profile/Profile'
import MovieOfTheWeek from './pages/MovieOfTheWeek/MovieOfTheWeek'
import NewOTTReleases from './pages/NewOTTReleases/NewOTTReleases'
import Admin from './pages/Admin/Admin'

function App() {
  return (
    <div className='App'>
      <div className='bg'>
        <Navbar />
        <div>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/forgetpassword' element={<ForgotPassword />} />
            <Route path='/movieoftheweek' element={<MovieOfTheWeek />} />
            <Route path='/exclusive' element={<Exclusive />} />
            <Route path='/newOTTs' element={<NewOTTReleases />} />
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
