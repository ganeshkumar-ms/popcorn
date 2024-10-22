import React from 'react'
import './Home.css'
import { Footer } from '../Footer/Footer'

const Home = () => {
  return (
    <div>
      <div className='col-md-11 m-4'>

      <div className="card rounded-4 m-4 border-0 text-center home container-fluid w-100" >
        <div className='mx-auto'>
          <img src="./Popcorn.png" alt="" style={{height:"70px"}} className='mt-5 ms-5' />
<br /><br />
<br />







        <div className='text-white mb-4 pb-4' style={{marginTop:"330px"}}>
          <h1><b> Cinema is a matter of what's in the frame and what's not</b></h1>
          <span className='bg-dark px-3 '>- Martin Scorsese</span>
          </div>

        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home