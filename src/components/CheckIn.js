import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BsCalendar } from 'react-icons/bs';

const CheckIn = ({ startDate, setStartDate }) => {
  const [isReadOnly, setIsReadOnly] = useState(false);

  useEffect(() => {
    const fetchReservationDates = async () => {
      try {
        const response = await fetch('http://localhost:8074/getAllReservations');
        if (response.ok) {
          const reservations = await response.json();
          const reservationDates = reservations.map((reservation) => new Date(reservation.checkIn));
          const hasConflict = startDate && reservationDates.some((date) => isSameDay(date, startDate));
          setIsReadOnly(hasConflict);
        } else {
          console.error('Failed to fetch reservation dates');
        }
      } catch (error) {
        console.error('Error fetching reservation dates:', error);
      }
    };

    fetchReservationDates();
  }, [startDate]);

  const handleDateChange = (date) => {
    if (!isReadOnly) {
      setStartDate(date);
    }
  };

  const isSameDay = (date1, date2) =>
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear();

  const formattedStartDate = startDate ? startDate.toLocaleDateString('en-US') : '';

  return (
    <div className="relative flex items-center justify-end h-full">
      <div className="absolute z-10 pr-8">
        <div>
          <BsCalendar className="text-accent text-base" />
        </div>
      </div>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        minDate={new Date()}
        dateFormat="MM/dd/yyyy"
        className="w-full h-full"
        placeholderText="Check-in"
        readOnly={isReadOnly}
      />
    </div>
  );
};

export default CheckIn;
