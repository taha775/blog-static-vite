import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { store } from './store/store.js'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     
    <BrowserRouter>
    <ToastContainer />

    <Provider store={store}>
    <App />
    </Provider>,

    </BrowserRouter>

  </React.StrictMode>,
)
