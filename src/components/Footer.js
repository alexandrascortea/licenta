import React from 'react';
import logo from '../assets/img/private-chalet.png';

const Footer = () => {
  return (
    <footer className='bg-primary'>
      <div className='container mx-auto text-white flex justify-between items-center'>
        {/* logo */}
        <a href='/'>
          <img src={logo} alt='' />
        </a>
        <div className='text-center'>
          Copyright &copy; 2023. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
