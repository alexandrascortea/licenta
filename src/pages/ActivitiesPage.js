import React from 'react';
import BranSimonHills from '../assets/img/activities/bran_simon_hills.jpg';
import Balaban from '../assets/img/activities/balaban.jpg'
import Monastry from '../assets/img/activities/monastry.jpg'
import Castel from '../assets/img/activities/castel.jpg'
import Zarnesti from '../assets/img/activities/zarnesti.jfif'
import Rasnov from '../assets/img/activities/Rasnov.jpg'
import Bear from '../assets/img/activities/bear.jpg'
import Moieciului from '../assets/img/activities/moieciului.jpg'
import Chisatoare from '../assets/img/activities/Chisatoare.jpg'

const ActivitiesPage = () => {
  const activities = [
    {
      name: 'The Bran-Simon Hills',
      description:
        'Experience the enchanting beauty of the Bran-Simon Hills, where rolling green landscapes meet the azure sky. Take leisurely walks or go on a bike ride amidst this picturesque setting.',
      image: BranSimonHills,
    },
    {
      name: 'Balaban Ridge',
      description:
        'Embark on an adventurous hike along the Balaban Ridge. Enjoy panoramic views of the surrounding mountains and valleys, while immersing yourself in the untouched nature.',
      image: Balaban,
    },
    {
      name: 'Bran Monastery',
      description:
        'Visit the historic Bran Monastery, an architectural gem dating back centuries. Discover its rich history, intricate frescoes, and peaceful atmosphere.',
      image: Monastry,
    },
    {
        name: 'Bran Castle',
        description:
          'Explore the legendary Bran Castle, often associated with the iconic character of Count Dracula. Immerse yourself in its Gothic architecture, secret passages, and captivating history.',
        image: Castel,
      },
      {
        name: 'The Zărneștilor Meadows',
        description:
          'Discover the idyllic Zărneștilor Meadows, a serene landscape adorned with colorful wildflowers. Take a leisurely stroll or have a picnic amidst the natural beauty of this tranquil setting.',
        image: Zarnesti,
      },
      {
        name: 'Râșnov Fortress',
        description:
          'Step back in time at the magnificent Râșnov Fortress. Explore the medieval ruins, climb the ancient towers, and enjoy panoramic views of the surrounding countryside.',
        image: Rasnov,
      },
      {
        name: 'Libearty Bear Reserve',
        description:
          'Visit the Libearty Bear Reserve, a sanctuary dedicated to protecting and rehabilitating bears. Witness these majestic creatures up close in their natural habitat and learn about conservation efforts.',
        image: Bear,
      },
      {
        name: 'Moieciului Gorges',
        description:
          'Embark on an awe-inspiring journey through the Moieciului Gorges, a natural wonder carved by the forces of water and time. Marvel at the towering cliffs and cascading waterfalls along the hiking trails.',
        image: Moieciului,
      },
      {
        name: 'Waterfall "La Chișătoare"',
        description:
          'Discover the mesmerizing beauty of the "La Chișătoare" Waterfall, as it gracefully cascades down moss-covered rocks. Immerse yourself in the peaceful atmosphere and witness the power of nature.',
        image: Chisatoare,
      },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h1 className="font-primary text-4xl md:text-6xl lg:text-7xl font-bold mb-5 text-center">Activities</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg p-6">
              <img src={activity.image} alt={activity.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h2 className="font-primary text-xl md:text-2xl lg:text-3xl font-bold mb-2">{activity.name}</h2>
              <p className="font-primary text-base md:text-lg lg:text-xl mb-4">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivitiesPage;
