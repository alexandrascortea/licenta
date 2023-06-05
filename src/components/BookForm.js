import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../datepicker.css';
import { BsCalendar } from 'react-icons/bs';
import { RoomContext } from '../context/RoomContext';
import { Menu } from '@headlessui/react';
import { BsChevronDown } from 'react-icons/bs';

const BookForm = () => {
  const { checkInDate, checkOutDate, adults, kids } = useContext(RoomContext);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleClick = async (e) => {
    e.preventDefault();

    const formattedCheckIn = startDate.toISOString().split('T')[0];
    const formattedCheckOut = endDate.toISOString().split('T')[0];

    const reservationData = {
      checkIn: formattedCheckIn,
      checkOut: formattedCheckOut,
      adultNumber: adults,
      kidNumber: kids,
    };

    try {
      const response = await fetch('http://localhost:8074/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData),
      });

      if (response.ok) {
        console.log('Reservation created successfully!');
      } else {
        console.error('Failed to create reservation');
      }
    } catch (error) {
      console.error('Error creating reservation:', error);
    }
  };

  return (
    <form className="h-[300px] w-full lg:h-[70px]">
      <div className="flex flex-col w-full h-full lg:flex-row">
        <div className="flex-1 border-r">
          <CheckIn startDate={startDate} setStartDate={setStartDate} />
        </div>
        <div className="flex-1 border-r">
          <CheckOut endDate={endDate} setEndDate={setEndDate} />
        </div>
        <div className="flex-1 border-r">
          <AdultsDropdown />
        </div>
        <div className="flex-1 border-r">
          <KidsDropdown />
        </div>
        <button onClick={handleClick} type="submit" className="btn btn-primary">
          Check now
        </button>
      </div>
    </form>
  );
};

const CheckIn = ({ startDate, setStartDate }) => {
  return (
    <div className="relative flex items-center justify-end h-full">
      <div className="absolute z-10 pr-8">
        <div>
          <BsCalendar className="text-accent text-base" />
        </div>
      </div>
      <DatePicker
        className="w-full h-full"
        selected={startDate}
        placeholderText="Check in"
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

const CheckOut = ({ endDate, setEndDate }) => {
  return (
    <div className="relative flex items-center justify-end h-full">
      <div className="absolute z-10 pr-8">
        <div>
          <BsCalendar className="text-accent text-base" />
        </div>
      </div>
      <DatePicker
        className="w-full h-full"
        selected={endDate}
        placeholderText="Check out"
        onChange={(date) => setEndDate(date)}
      />
    </div>
  );
};

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

export default BookForm;
