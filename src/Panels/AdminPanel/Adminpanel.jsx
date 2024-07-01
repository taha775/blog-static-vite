import React, { useEffect, useState } from 'react'
  
import { hideNavbarAndFooter, showNavbarAndFooter } from '../../store/slices/layoutslice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const Adminpanel = () => {
  const  [show,setShow] = useState(false)
  const navigate = useNavigate();

  const handlePost = () => {
    navigate("/post");
  };


  const handleRequests = () => {
    navigate("/request");
  };

  const handleDonation = () => {
    navigate("/donation");
  };

  const handleTerms = () => {
    navigate("/terms");
  };

  const handlePrivacy = () => {
    navigate("/privacy");
  };

  const handleAbout = () => {
    navigate("/about");
  };
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(hideNavbarAndFooter());
  
      return () => {
        dispatch(showNavbarAndFooter());
      };
    }, [dispatch]);
    return (
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="bg-gray-800 text-white w-1/6 p-4">
          <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
  
          <div className="space-y-2">
            <button className="block py-2 px-4 rounded hover:bg-gray-700">Profile</button>
            <button className="block py-2 px-4 rounded hover:bg-gray-700" onClick={()=>setShow(true)}>
              All Users
            </button>
            <button className="block py-2 px-4 rounded hover:bg-gray-700" onClick={handlePost}>
              Post
            </button>
            <button className="block py-2 px-4 rounded hover:bg-gray-700" onClick={handleRequests}>
              Request
            </button>
            <button className="block py-2 px-4 rounded hover:bg-gray-700" onClick={handleDonation}>
              Donation
            </button>
            <button className="block py-2 px-4 rounded hover:bg-gray-700" onClick={handleTerms}>
              Terms and Conditions
            </button>
            <button className="block py-2 px-4 rounded hover:bg-gray-700" onClick={handlePrivacy}>
              Privacy Policy
            </button>
            <button className="block py-2 px-4 rounded hover:bg-gray-700" onClick={handleAbout}>
              About
            </button>
         
          </div>
        </div>
  
        {/* Main Content */}
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-4">Welcome to the Admin Dashboard</h1>
  
          {/* Static Cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">Total Users</h2>
              <p className="text-gray-600">20</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">Total Donors</h2>
              <p className="text-gray-600">6</p>
            </div>
  
            {/* Card 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">Total Requests</h2>
              <p className="text-gray-600">50</p>
            </div>
  
            {/* Add more cards as needed */}
          
          </div>
        </div>
      </div>
    );
  };
  
  export default Adminpanel;