import React from 'react'
import Navbar from '../components/Navbar'
import Copyright from '../components/Copyright'
import Name from '../components/Name'
import Banner from '../components/Banner'

const Home = () => {
  return (
   <>
    <Name/>
   <Navbar/>
   <Banner/>
   <Copyright/>
   </>
  )
}

export default Home