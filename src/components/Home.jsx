import React, { useContext } from 'react';
import { Appcontext } from '../App';


const StarRating = ({ rating }) => {
  
  const totalStars = 5;
  const filledStars = Math.floor(rating);

  const starElements = [];
  for (let i = 0; i < totalStars; i++) {
    if (i < filledStars) {
      starElements.push(<span key={i} className='text-green-500'>★</span>);
    } else {
      starElements.push(<span key={i} className='text-gray-400'>★</span>);
    }
  }

  return <div className='flex'>{starElements}</div>;
};

export const Home = () => {
  const { products } = useContext(Appcontext);

  return (
    <div className='bg-white mt-5'>
      <h1 className='text-2xl font-bold py-4'>Best Sellers</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center'>
        {products.map((product) => (
          <div key={product.id} className='bg-gray-100 sm:w-[270px] w-[450px] p-4 text-start mx-4 hover:scale-105 duration-300'>
            <img src={product.image} alt={product.name} className='mx-auto mb-2 w-32 h-32 object-contain' />
            <div className='flex justify-between'>
              <h2 className='text-lg font-semibold'>{product.name}</h2>
              <p className='text-base font-semibold mb-2'>${product.price}</p>
            </div>
            <p className='text-[13px] text-gray-600 mb-2'>{product.description}</p>
            
            <StarRating rating={product.rating} />
            
            <button className='bg-white text-gray-400 px-4 py-2 rounded-full border border-gray-300 hover:bg-green-500 hover:text-white transition duration-300 ease-in-out'>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
