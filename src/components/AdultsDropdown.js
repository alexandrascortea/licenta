import React, { useContext } from 'react';

// import context
import { RoomContext } from '../context/RoomContext';
// headless ui menu

import { Menu } from '@headlessui/react'
import { BsChevronDown } from 'react-icons/bs';

import '../mobile.css'

const lis = [
  { name: '1 Adult' },
  { name: '2 Adults' },
  { name: '3 Adults' },
  { name: '4 Adults' },
];

const AdultsDropdown = () => {
  const { adults, setAdults } = useContext(RoomContext);

  return (
    <Menu as="div" className="w-full h-full bg-white relative">
      <Menu.Button className="w-full h-full flex items-center justify-between px-8">
        {adults}
        <BsChevronDown className="text-base text-accent-hover" />
      </Menu.Button>
      <Menu.Items as="ul" className="bg-white w-full flex flex-col z-40">
        {lis.map((li, index) => (
          <Menu.Item
            key={index}
            onClick={() => setAdults(li.name)}
            as="li"
            className="border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer mobile-menu-item"
          >
            {li.name}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default AdultsDropdown;
