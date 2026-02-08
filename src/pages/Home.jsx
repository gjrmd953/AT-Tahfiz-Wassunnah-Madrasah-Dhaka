import React from 'react'
import Navbar from '../components/Navbar'
import Copyright from '../components/Copyright'
import Name from '../components/Name'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Home = () => {
  return (
   <>
    <Name/>
   <Navbar/>
   <Banner/>
   <Footer/>
   <Copyright/>
   </>
  )
}

export default Home