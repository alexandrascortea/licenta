import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

// Components
import AdultsDropdown from '../components/AdultsDropdown';
import KidsDropdown from '../components/KidsDropdown';
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';

import { FaCheck } from 'react-icons/fa';
import { RoomContext } from '../context/RoomContext';
import ScrollToTop from '../components/ScrollToTop';

const RoomDetails = () => {
  const { rooms } = useContext(RoomContext);
  const { id } = useParams();

  // Get room
  const room = rooms.find((room) => room.id === Number(id));
  const { name, description, facilities, imageLg, price } = room;

  const [reservationData, setReservationData] = useState({
    checkIn: null,
    checkOut: null,
    adultNumber: '1 Adult',
    kidNumber: '0 Kids',
  });

  const handleCheckInChange = (date) => {
    setReservationData((prevData) => ({ ...prevData, checkIn: date }));
  };

  const handleCheckOutChange = (date) => {
    setReservationData((prevData) => ({ ...prevData, checkOut: date }));
  };

  const handleAdultsChange = (adults) => {
    setReservationData((prevData) => ({ ...prevData, adultNumber: `${adults} Adults` }));
  };

  const handleKidsChange = (kids) => {
    setReservationData((prevData) => ({ ...prevData, kidNumber: `${kids} Kids` }));
  };

  const handleSubmit = async () => {
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
        window.location.reload();
      } else {
        console.error('Failed to create reservation');
      }
    } catch (error) {
      console.error('Error creating reservation:', error);
    }
  };

  return (
    <section>
      <ScrollToTop />
      {/* banner */}
      <div className="bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/70"></div>
        {/* title */}
        <h1 className="text-6xl text-white z-20 font-primary text-center">{name}</h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          {/* left */}
          <div className="w-full h-full lg:w-[60%] px-6">
            <h2 className="h2">{name}</h2>
            <p className="mb-8">{description}</p>
            <img className="mb-8" src={imageLg} alt="photo" />
            {/* facilities */}
            <div>
              <h3 className="h3 mb-3">Room Facilities</h3>
              <p className="mb-12">Ceva</p>
              {/* grid */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                {facilities.map((item, index) => {
                  const { name, icon } = item;
                  return (
                    <div className="flex items-center gap-x-3 flex-1" key={index}>
                      <div className="text-3xl text-accent">{icon}</div>
                      <div className="text-base">{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-full h-full lg:w-[40%]">
            {/* reservation */}
            <div className="py-8 px-6 bg-accent/20 mb-12">
              <div className="flex flex-col space-y-4 mb-4">
                <h3>Your Reservation</h3>
                <div className="h-[60px]">
                  <CheckIn startDate={reservationData.checkIn} setStartDate={handleCheckInChange} />
                </div>
                <div className="h-[60px]">
                  <CheckOut endDate={reservationData.checkOut} setEndDate={handleCheckOutChange} />
                </div>
                <div className="h-[60px]">
                  <KidsDropdown selectedKids={0} handleKidsChange={handleKidsChange} />
                </div>
                <div className="h-[60px]">
                  <AdultsDropdown selectedAdults={1} handleAdultsChange={handleAdultsChange} />
                </div>
              </div>
              <button className="btn btn-lg btn-primary w-full" onClick={handleSubmit}>
                book now for ${price}
              </button>
            </div>
            {/* rules */}
            <div>
              <h3 className="h3">Private Chalet Rules</h3>
              <p className="mb-6"></p>
              <ul className="flex flex-col gap-y-4">
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Check-in: 3:00 PM - 9:00 PM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Check-out: 10:30 AM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  No Pets
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  No Smoking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
