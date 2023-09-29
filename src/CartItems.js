import { nanoid } from 'nanoid';
import img1 from './images/Iphone_15.jpg';
import img2 from './images/Iphone_15_Plus.jpg';
import img3 from './images/Iphone_14_Pro.jpg';
import img4 from './images/Iphone_14_Pro_Max.jpg';

const CartItems = [
  {
    id: nanoid(),
    title: 'Apple iPhone 15 (128 GB) - Blue',
    price: '79900.00',
    image: img1,
    inStock: 3,
  },
  {
    id: nanoid(),
    title: 'Apple iPhone 15 Plus ',
    price: '89900.40',
    image: img2,
    inStock: 1,
  },
  {
    id: nanoid(),
    title: 'Apple iPhone 14 Pro Max',
    price: '95000.08',
    image: img3,
    inStock: 2,
  },
  {
    id: nanoid(),
    title: 'Apple iPhone 14 Pro',
    price: '90000.30',
    image: img4,
    inStock: 3,
  },
];

export default CartItems;
