import React, { useEffect, useState } from 'react';
import data from "../../temporardata/data";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { useTheme } from '../../../ThemeContext';
import { useSelector } from 'react-redux';

const Cards = () => {
  const { theme } = useSelector(state => state.theme); 
  const [flipped, setFlipped] = useState(Array(data.length).fill(false));

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleFlip = (index) => {
    setFlipped(prev => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  return (
    <div className={`grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-24 gap-x-9 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      {data.map((item, index) => (
        <div
          key={index}
          className="relative w-full mt-20 h-72"
          onClick={() => handleFlip(index)}
          data-aos="fade-up"
        >
          <div className={`absolute w-full h-full transition-transform duration-500 transform ${flipped[index] ? 'rotate-y-180' : ''} hover:scale-105`}>
            <div className={` justify-start shadow-lg rounded-lg items-start overflow-hidden ${theme === 'dark' ? 'bg-gray-900 text-white rounded-lg border-2 border-black' : 'bg-white text-black border border-gray-300'}`}>
              <img className="w-full h-56 object-cover object-center" src={item.image} alt={item.title} />
              <div className="p-2 h-56 hover:text-blue-600">
                <h2 className="  font-sans text-2xl cursor-pointer overflow-hidden h-16">{item.title}</h2>
                <p className="text-sm mt-2 text-center">{item.description}</p>
                <div className="flex items-center mt-2">
                  <img className="w-8 h-8 rounded-full mr-2" src={item.profile_icon} alt={item.person_name} />
                  <p className={`text-sm flex  ${theme ==="dark"? 'text-blue-400':'text-gray-700'}` }>{item.person_name}</p>
                </div>
                <p  className={`text-sm  mt-4 flex  ${theme ==="dark"? 'text-blue-400':'text-gray-700'}` }>Published Date: {item.published_date}</p>
              </div>
            </div>
          </div>
         
        </div>
      ))}
    </div>
  );
}

export default Cards;
