import React from 'react'
import Navbar from '../components/Navbar'
import Copyright from '../components/Copyright'
import Name from '../components/Name'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Map from '../components/Map'

const Home = () => {
  return (
   <>
    <Name/>
   <Navbar/>
   <Banner/>
   <Gallery/>
   <Map/>
   <Footer/>
   <Copyright/>
   </>
  )
}

export default Home