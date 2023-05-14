import React from 'react';

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Room from './pages/RoomDetails'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RoomDetails from './pages/RoomDetails';
import ContactPage from './pages/ContactPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/room/:id',
    element: <RoomDetails />
  }, 
  {
    path:'/contact',
    element: <ContactPage/>
  }
  
])

const App = () => {
  return (
    <div>
      <Header/>
      <RouterProvider router={router}/>
      <Footer/>
    </div>
  );
};

export default App;
