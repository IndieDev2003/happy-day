import React from 'react'
import Hero from '../components/Hero/Hero'
import Sec1 from '../components/Sec1/Sec1'
import Sec2 from '../components/Sec2/Sec2'
import Sec3 from '../components/Sec3/Sec3'

function Home() {
  return (
      <div className='relative outfit'>
          <Hero />
          <Sec1 />
          <Sec2 />
          <Sec3/>
          {/* <div className='h-screen w-screen'></div> */}
    </div>
  )
}

export default Home