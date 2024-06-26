import React from 'react';
import Navigation from './Config/Navigation';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import '@radix-ui/themes/styles.css';
import { ThemeProvider } from '../ThemeContext';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';



const App = () => {
const { showNavbar, showFooter } = useSelector((state) => state.layout);
  return (
   
<div className='root'>
<ThemeProvider>

  
{showNavbar && <Navbar />}
        <Navigation />
        {showFooter && <Footer />}  
        </ThemeProvider> 

    </div>
         
   
  );
};

export default App;
