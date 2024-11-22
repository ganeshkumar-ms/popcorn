import React from 'react'
import { Footer } from '../Footer/Footer'

const Home = () => {
  return (
    <div>
      <div>
<h1 className='text-white'> Welcome</h1>
<h2><a href="/login">Login</a><br />
<a href="/profile">Profile</a><br />
<a href="/exclusive">Exclusive</a></h2>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
