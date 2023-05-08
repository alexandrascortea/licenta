import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';

//components
import AdultsDropdown from '../components/AdultsDropdown';
import KidsDropdown from '../components/KidsDropdown';
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';

import { FaCheck } from 'react-icons/fa';
import { RoomContext } from '../context/RoomContext';


const RoomDetails = () => {
 const { rooms } = useContext(RoomContext);
 const {id} = useParams();
 // get room

const room = rooms.find((room) => {
    return room.id === Number (id);
});
const {name, description, facilities, imageLg, price} = room;

return (
    <section >
        {/* banner */}
        <div className='bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/70'></div>
            {/* title */}
            <h1 className='text-6xl text-white z-20 font-primary text-center'>{name}</h1>
        </div>
        <div class="container mx-auto">
            <div className='flex flex-col lg:flex-row h-full py-24'>
                {/* left */}
                <div className='w-full h-full lg:w-[60%] px-6'>
                    <h2 className='h2'>{name}</h2>
                    <p className='mb-8'>{description}</p>
                    <img className='mb-8' src={imageLg} alt='photo'/>
                    {/* facilities */}
                    <div>
                        <h3 className='h3 mb-3'>Room Facilities</h3>
                        <p className='mb-12'>Ceva</p>
                        {/* grid */}
                        <div className='grid grid-cols-3 gap-6 mb-12'>
                            {facilities.map((item, index) => {
                                const {name, icon} = item;
                                return <div className='flex items-center gap-x-3 flex-1' key={index}>
                                    <div className='text-3xl text-accent'>{icon}</div>
                                    <div className='text-base'>{name}</div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className='w-full h-full lg:w-[40%]'>Reservation
                {/* reservation */}
                </div>
            </div>
        </div>
    </section>
)

};

export default RoomDetails;
