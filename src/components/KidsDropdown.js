import React, { useContext } from 'react';

// import context
import { RoomContext } from '../context/RoomContext';
// headless ui menu

import { Menu } from '@headlessui/react'
import { BsChevronDown } from 'react-icons/bs';

const lisKids = [
  { name: '0 Kids' },
  { name: '1 Kid' },
  { name: '2 Kids' },
];

const KidsDropdown = () => {
  const { kids, setKids } = useContext(RoomContext);

  return (
    <Menu as="div" className="w-full h-full bg-white relative">
      <Menu.Button className="w-full h-full flex items-center justify-between px-8">
        {kids === '0 Kids' ? 'No kids' : kids}
        <BsChevronDown className="text-base text-accent-hover" />
      </Menu.Button>
      <Menu.Items as="ul" className="bg-white w-full flex flex-col z-40">
        {lisKids.map((li, index) => (
          <Menu.Item
            key={index}
            onClick={() => setKids(li.name)}
            as="li"
            className="border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer"
          >
            {li.name}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default KidsDropdown;
