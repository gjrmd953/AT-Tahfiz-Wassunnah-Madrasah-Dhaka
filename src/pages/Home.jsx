import React from 'react'
import Navbar from '../components/Navbar'
import Copyright from '../components/Copyright'
import Name from '../components/Name'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'

const Home = () => {
  return (
   <>
    <Name/>
   <Navbar/>
   <Banner/>
   <Gallery/>
   <Footer/>
   <Copyright/>
   </>
  )
}

export default Home