// src/components/Signup.jsx
import React from 'react';
import { Box, Button, Heading } from '@radix-ui/themes';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
// import { useTheme } from '../../../ThemeContext';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { auth, db } from '../../Config/Firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from 'react-redux';


const Signup = () => {
  const { theme } = useSelector(state => state.theme); 
  const navigate = useNavigate()

  const initialValues = {
    name: '',
    email: '',
    password: '',
    role: 'user',
    completeProfile:null,
    profileImage:null,
    country:null,
    Mobile:null,
    DateOfBirth:null

    
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    role: Yup.string().required('Role is required'),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      if(values.role =="writer")
        console
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
      const user = userCredential.user;

     // using to store in differenet collection acc to roles


      // Save additional user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: values.name,
        email: values.email,
        role: values.role,
        profileImage:null,
        country:null,
        Mobile:null,
        completeProfile:null,
        DateOfBirth:null
      });
      toast.success("User sign up succecssful")
      navigate('/login')
      console.log('User signed up and data saved in Firestore:', user);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        
        
          toast.error('Email already in use')
        
      } else {
        toast.error(error.message);
      }
    

    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className='flex justify-center items-center mt-8 mb-4'>
      <Box className={`max-w-lg w-full flex-col px-24 py-6 rounded-lg transition duration-500 ${theme === 'dark' ? 'bg-gray-900 text-white border-2 border-black' : 'bg-white text-black border border-gray-300'}`} style={{
        boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.4)',
        borderRadius: '8px'
      }}>
        <div className='text-center mb-4'>
          <Heading as='h2' className='text-4xl'>Create an Account</Heading>
          <p className={`mt-2 text-1xl ${theme === 'dark' ? 'text-blue-700' : 'text-black'}`}>Signup to get Started</p>
        </div>

        <div className='text-center'>
          <Button color="black" className="flex hover:border-solid rounded items-center cursor-pointer px-12 py-5" variant="outline">
            <FaGithub size={25} className='mr-3 cursor-pointer' />
            Continue With Github
          </Button>
          <Button className="flex hover:border-solid border-blue-600 rounded items-center cursor-pointer px-12 py-5 mt-4" variant="outline">
            <FaGoogle size={25} className="mr-3 cursor-pointer" />
            <span className='text-red-500'>Continue</span> <span className='text-green-500'>with</span> <span className='text-yellow-500'>Gooo</span> <span className='text-blue-500'>gle</span>
          </Button>
        </div>

        <div className="flex items-center justify-center mb-4 space-x-4 mt-4">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className={theme === 'dark' ? 'text-white' : 'text-black'}>OR</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className='text-1xl font-serif font-bold'>
              <div>
                <label htmlFor="name" className={`block text-sm font-medium ${theme === 'dark' ? 'text-blue-700' : 'text-black'}`}>
                  Name
                </label>
                <Field
                  type="text"
                  className={`mt-1 w-full px-3 py-2 rounded-lg border focus:outline-none focus:border-blue-500 ${theme === 'dark' ? 'bg-gray-800 text-white border-black' : 'bg-white text-black border-gray-300'}`}
                  id="name"
                    name="name"
                  placeholder="Enter your name"
                  autoComplete="name"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="mt-4">
                <label htmlFor="email" className={`block text-sm font-medium ${theme === 'dark' ? 'text-blue-700' : 'text-black'}`}>
                  Email Address
                </label>
                <Field
                  type="email"
                  className={`mt-1 w-full px-3 py-2 rounded-lg border focus:outline-none focus:border-blue-500 ${theme === 'dark' ? 'bg-gray-800 text-white border-black' : 'bg-white text-black border-gray-300'}`}
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="mt-4">
                <label htmlFor="password" className={`block text-sm font-medium ${theme === 'dark' ? 'text-blue-700' : 'text-black'}`}>
                  Password
                </label>
                <Field
                  type="password"
                  className={`mt-1 w-full px-3 py-2 rounded-lg border focus:outline-none focus:border-blue-500 ${theme === 'dark' ? 'bg-gray-800 text-white border-black' : 'bg-white text-black border-gray-300'}`}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  autoComplete="new-password"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="mt-4">
                <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-blue-700' : 'text-black'}`}>
                  Role
                </label>
                <div className="flex space-x-4">
                  <label>
                    <Field type="radio" name="role" value="user" className="mr-2" />
                    User
                  </label>
                  <label>
                    <Field type="radio" name="role" value="writer" className="mr-2" />
                    Writer
                  </label>
                </div>
                <ErrorMessage name="role" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="mt-9">
                <Button type="submit" color="indigo" variant="outline" className="w-full cursor-pointer p-3" disabled={isSubmitting}>
                  Create Account
                </Button>
              </div>
              <p className="mt-4 text-sm font-serif font-bold text-center">
                By signing up, you agree to our <a href="#" className="font-medium text-blue-500 hover:underline">terms of service</a> and <a href="#" className="font-medium text-blue-500 hover:underline">privacy policy</a>.
              </p>
              <p className={`mt-4 ${theme === 'dark' ? 'text-blue-700' : 'text-black'}`}>Already have an account?</p>
              <button className='text-blue-500 font-serif font-bold'><Link to="/login">Login</Link></button>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
}

export default Signup;
