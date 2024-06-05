import React from 'react'

import Navigation from './Config/Navigation'
import Navbar from './Components/Navbar'
import Footer from "../src/Components/Footer"
import '@radix-ui/themes/styles.css';


const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Navigation/>
      <Footer/>
      
    </div>
   
  )
}

export default App