// ProfileHeader.jsx

import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { SiDarkreader } from 'react-icons/si';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { toggleTheme } from '../../store/slices/themeslice';
import { showPost } from '../../store/slices/postslices';
import logoLight from "../../assets/logo.png"; // Light mode logo
import logoDark from "../../assets/light.png";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FaBell } from 'react-icons/fa6';
import { collection, getDocs, query,where } from "firebase/firestore";
import { db } from '../../Config/Firebase';
import FileUploadDialog from '../../Components/DialogOpen/Dialogbox'



const ProfileHeader = () => {
  const navigate = useNavigate()
  const { uid } = useParams();
  const [user, setUser] = useState(null);
  
  const [profileImg, setProfileImg] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);



  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userdata= query(collection(db, 'users'), where('uid', '==', uid)); // Query to fetch user document by uid
        const querySnapshot = await getDocs(userdata);

        querySnapshot.forEach((doc) => {
          
          setUser(doc.data()); // Set user state with document data
        });
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    if (uid) {
      fetchUserData();
    }
  }, [uid]);

  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();


  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };
  const handlePost = () => {
    navigate(`/new-post/${user.uid}`); 
  };
  const gotomyposts =()=>{
    navigate(`/my-post/${user.uid}`)
  }

  const handleFileSelect = (file) => {
    // Assuming you want to set the profileImg state to the URL of the selected file
    const imageUrl = URL.createObjectURL(file);
    setProfileImg(imageUrl);
    // You may want to upload the file to Firebase storage or elsewhere at this point
  };

  return (
    <div className={`navbar pt-0 flex items-center justify-between mx-auto ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} p-6`}>
      <div className="left flex items-center">
        <img className='w-28' src={theme === 'dark' ? logoDark : logoLight} alt="Logo" />
        <div className="center gap-3 flex items-center">
          <Dropdown>
            <Dropdown.Toggle variant="link" id="dropdown-basic" className="text-decoration-none text-reset">
              FIND MORE
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/community">Community</Dropdown.Item>
              <Dropdown.Item as={Link} to="/rss-reader">RSS Reader</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Link>FRIENDS FEED</Link>
          <Link>SHOP</Link>
        </div>
      </div>
      <div className="right flex items-center gap-3">
        <button onClick={gotomyposts}>My Posts</button>
        <button onClick={handlePost}>ADD NEW POST</button>
        <FaBell className='text-blue-600' size={25}/>
        <div  className='items-center  flex-col '>
        <Stack direction="row"  spacing={2} className=''>
          <Avatar className=''  alt={user?.name} src={profileImg || "/static/images/avatar/placeholder.jpg"} onClick={() => setDialogOpen(true)} />
      
        </Stack>

        <div className='text-2xl flex-col items-center'>
        <h1> Welcome, {user?.name}</h1>
        </div>

        
      
    
        </div>
        
        <button onClick={handleToggleTheme} className="flex items-center">
          <SiDarkreader size={35} color={theme === "dark" ? "white" : "black"} />
        </button>
      </div>
      <FileUploadDialog open={dialogOpen} onClose={() => setDialogOpen(false)} onFileSelect={handleFileSelect} />
    </div>
  );
};

export default ProfileHeader;
