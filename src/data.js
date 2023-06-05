// rooms images
import Room1Img from './assets/img/rooms/poza1.jpeg';
import Room1ImgLg from './assets/img/rooms/p1-lg.jpg';
import Room2Img from './assets/img/rooms/poza4.jpg';
import Room2ImgLg from './assets/img/rooms/p2-lg.jpg';
import Room3Img from './assets/img/rooms/poza3.jpg';
import Room3ImgLg from './assets/img/rooms/3-lg.jpg';
import Room4Img from './assets/img/rooms/poza3.jpg';
import Room4ImgLg from './assets/img/rooms/4-lg.JPG';

// import icons
import {
  FaWifi,
  FaCoffee,
  FaBath,
  FaParking,
  FaCocktail,
} from 'react-icons/fa';

export const roomData = [
  {
    id: 1,
    name: 'Superior Room',
    description:
      'A superior room is a higher category room than a standard room, offering more space and upgraded amenities. It typically includes a king or queen-size bed with premium bedding, a larger bathroom with deluxe toiletries, and additional seating area with a comfortable chair or sofa.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    maxPerson: 2,
    price: 50,
    image: Room1Img,
    imageLg: Room1ImgLg,
  },
  {
    id: 2,
    name: 'Signature Room',
    description:
    'Indulge in the epitome of luxury and sophistication with our exquisite Signature Rooms, ideally located near the iconic Castel Bran and surrounded by the awe-inspiring beauty of the mountains. As you step into our exclusive Signature Rooms, prepare to be immersed in a world of opulence and refinement.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
   // size: 70,
    maxPerson: 2,
    price: 55,
    image: Room2Img,
    imageLg: Room2ImgLg,
  },
  {
    id: 3,
    name: 'Deluxe Room',
    description:
    'Welcome to our Deluxe Rooms, perfectly situated near the enchanting Castel Bran and surrounded by the majestic beauty of the mountains. Prepare to immerse yourself in a world of comfort and sophistication as you step into our well-appointed Deluxe Rooms.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
   // size: 50,
    maxPerson: 2,
    price: 45,
    image: Room3Img,
    imageLg: Room3ImgLg,
  },
  {
    id: 4,
    name: 'Luxury Room',
    description:
    'Welcome to our lavish Luxury Rooms, ideally located near the captivating Castel Bran and nestled amidst the awe-inspiring beauty of the surrounding mountains. Prepare to be swept away by the opulence and grandeur that awaits you in our distinguished Luxury Rooms.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
   // size: 60,
    maxPerson: 2,
    price: 60,
    image: Room4Img,
    imageLg: Room4ImgLg,
  },
];
