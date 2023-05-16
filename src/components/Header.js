import React, { useState, useEffect } from 'react';

//logo
import logo from '../assets/img/private-chalet.png'


const Header = () => {
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });

  const navClass = `${'text-white'} flex gap-x-4 lg:gap-x-8
        font-tertinary tracking-[3px] text-[15px] items-center uppercase`;
  const linkClass = 'hover:text-accent transition text-sm';

  return (
    <header className={`${header ? 'bg-black py-3 shadow-lg' : 'bg-transparent py-4'} fixed z-50 w-full transition-all duration-300`}>
      <div className="container mx-auto flex flex-col items-center gap-y-3 lg:flex-row lg:justify-between lg:gap-y-0">
        {/* logo */}
        <a href="/">
          { <img className='w-[80px]' src={logo}/>}
        </a>
        {/* nav */}
        <nav className={navClass}>
          <a href='/' className={linkClass}>Home</a>
          <a href='/why-us' className={linkClass}>Why us?</a>
          <a href='/contact' className={linkClass}>Contact</a>
        </nav>
      </div>
    </header>
  )
};

export default Header;
