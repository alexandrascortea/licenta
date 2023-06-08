import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {BsCalendar} from 'react-icons/bs'

const CheckIn = ({ startDate, setStartDate }) => {
  const [readOnly, setReadOnly] = useState(false);

  useEffect(() => {
    if (startDate) {
      setReadOnly(true);
    } else {
      setReadOnly(false);
    }
  }, [startDate]);

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const formattedStartDate = startDate ? startDate.toLocaleDateString('en-US') : '';

  return (
    <div  className="relative flex items-center justify-end h-full">
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
        readOnly={readOnly}
      />
    </div>
  );
};

export default CheckIn;
