
// date picker
import DatePicker from 'react-datepicker'
//data picker css
import 'react-datepicker/dist/react-datepicker.css'
import '../datepicker.css'
import React, { useEffect, useState } from 'react';

import {BsCalendar} from 'react-icons/bs'

const CheckOut = ({ endDate, setEndDate }) => {
  const [readOnly, setReadOnly] = useState(false);

  useEffect(() => {
    if (endDate) {
      setReadOnly(true);
    } else {
      setReadOnly(false);
    }
  }, [endDate]);

  const handleDateChange = (date) => {
    setEndDate(date);
  };

  const formattedEndDate = endDate ? endDate.toLocaleDateString('en-US') : '';
  return (
    <div  className="relative flex items-center justify-end h-full">
    <div className="absolute z-10 pr-8">
      <div>
        <BsCalendar className="text-accent text-base" />
      </div>
    </div>
    <DatePicker
      selected={endDate}
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

export default CheckOut;
