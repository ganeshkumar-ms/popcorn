import React from 'react'
import { Footer } from '../Footer/Footer'
import Exclusivesvg from '../svg/exclusivesvg'

const Exclusive = () => {
  return (
    <div>
      <div className='col-12 text-center w-100 mt-4'>
        <Exclusivesvg />
        <hr style={{ color: "beige" }} />
      </div>


      <Footer />
    </div>
  )
}

export default Exclusive
