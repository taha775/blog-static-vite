import React from 'react';
import Navigation from './Config/Navigation';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import '@radix-ui/themes/styles.css';
import { ThemeProvider } from '../ThemeContext';

const App = () => {
  return (
   
<div className='root'>
<ThemeProvider>
  
        <Navbar />
        <Navigation />
        <Footer /> 
        </ThemeProvider> 

    </div>
         
   
  );
};

export default App;
