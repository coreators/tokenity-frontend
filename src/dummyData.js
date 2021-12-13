import img1 from './assets/images/cosmonaut1.jpeg';
import img2 from './assets/images/cosmonaut2.jpeg';
import img3 from './assets/images/cosmonaut3.jpeg';
import img4 from './assets/images/cosmonaut4.jpeg';
import img5 from './assets/images/cosmonaut5.png';
import postImg1 from './assets/images/imgTest.jpeg';

export const tokenNames = [
  'pulse',
  'cloutpunk',
  'spookies',
  'cloutfeed',
  'Moonbounce',
];
export const tokenPrices = [
  '5,204.68',
  '4,253.34',
  '2,597.59',
  '1,988.71',
  '1,912.89',
];

export const avatars = [img1, img2, img3, img4, img5];
export const avatar = img1;
export const postImg = postImg1;
// export const postImgs = [...Array(10).keys()].map(() => postImg1);
export const postImgs = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
];

export const tokens = tokenNames.map((name, index) => ({
  name,
  price: tokenPrices[index],
  avatar: avatars[index],
}));
