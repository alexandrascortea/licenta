import React from 'react';
import { Link } from 'react-router-dom'

const Room = ({ room }) => {
  const { id, name, image,  description, price } = room;
  return (
    <div className='bg-white shadow-2xl min-h-[500px] group'>

      <div className='overflow-hidden'>
        <img
          className='group-hover:scale-110 transition-all duration-300w-full' src={image} alt='' />
      </div>
      {/* details */}
      <div className='bg-white shadow-lg max-w-[300px] mx-auto h-[60px]
      -translate-y-1/2  flex justify-center items-center uppercase font-tertinary tracking-[1px]
      font-semibold text-base'>Private Chalet</div>
      <div className='text-center'>
        <Link to={`/room/${id}`}>
          <h3 className='h3'>{name}</h3>
        </Link>
        <p className='max-w-[300px] mx-auto mb-3 lg:mb-6 text-center'>{description.slice(0, 207)}</p>
      </div>
      <Link to={`/room/${id}`} className='btn btn-secondary btn-sm max-w-[240px] mx-auto' >Book now from ${price}</Link>
      <br></br>
    </div>

  );
};

export default Room;
