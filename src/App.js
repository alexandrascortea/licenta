import React from 'react';

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Room from './pages/RoomDetails'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RoomDetails from './pages/RoomDetails';
import ContactPage from './pages/ContactPage';
import WhyUs from './pages/WhyUs';
import ActivitiesPage from './pages/ActivitiesPage';

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
  }, 
  {path:'/why-us',
  element: <WhyUs/>
  },
  {
    path:'/activities',
    element: <ActivitiesPage/>
  },
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
