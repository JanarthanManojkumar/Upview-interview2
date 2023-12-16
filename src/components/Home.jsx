import React, { useContext, useState } from 'react';
import { Appcontext } from '../App';
import { Preview } from './Preview'; 
import {Link} from 'react-router-dom'
import { StarRating } from './StarRating';



export const Home = () => {
  const { products, setCart, cart, setSelect, select } = useContext(Appcontext);

  const handleCart = (productId) => {
    const selectedProduct = products.find((product) => product.id === productId);
    setCart([...cart, selectedProduct]);
    
  };

  const handleSelectProduct = (productId) => {
    const previewProduct = products.find((product) => product.id === productId);
    setSelect(previewProduct);
  };

  return (
    <div className='bg-white mt-5'>
      <h1 className='text-2xl font-bold py-4'>Best Sellers</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center'>
        
        {products.map((product) => (
          
          <div key={product.id} onClick={() => handleSelectProduct(product.id)} className='bg-gray-100 sm:w-[270px] w-[450px] p-4 text-start mx-4 hover:scale-105 duration-300'>
          
           <Link to='/preview'>
                
              <img src={product.image} alt={product.name} className='mx-auto mb-2 w-32 h-32 object-contain' />
                
                <div className='flex justify-between'>
                  <h2 className='text-lg font-semibold'>{product.name}</h2>
                  <p className='text-base font-semibold mb-2'>${product.price}</p>
                </div>
                
                <p className='text-[13px] text-gray-600 mb-2'>{product.description}</p>
            
            </Link>
           
            <StarRating rating={product.rating} />
            
            <button onClick={() => handleCart(product.id)} className='bg-white text-gray-400 px-4 py-2 rounded-full border border-gray-300 hover:bg-green-500 hover:text-white transition duration-300 ease-in-out'>
              Add to Cart
            </button>
         
          </div>
        ))}

      </div>
    </div>
  );
};
