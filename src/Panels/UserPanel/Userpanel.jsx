// UserPanel.jsx
import React, { useEffect } from 'react';


import Profheader from './Profileheader';
import { hideNavbarAndFooter, showNavbarAndFooter } from '../../store/slices/layoutslice';
import { useDispatch } from 'react-redux';
import Allposts from './Allposts';



const UserPanel = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hideNavbarAndFooter());

    return () => {
      dispatch(showNavbarAndFooter());
    };
  }, [dispatch]);



  return (
    <div>
      
 <Profheader/>
 <hr />
 <Allposts/>



    </div>
  );
};

export default UserPanel;
