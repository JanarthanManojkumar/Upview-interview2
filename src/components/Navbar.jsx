import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { Appcontext } from '../App';
import { ApiFetch } from './ApiFetch';


export const Navbar = () => {
  const { navitems, products } = useContext(Appcontext);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className='w-full h-[50px] sipa flex justify-between items-center px-2'>
     <Link to='/'>
        <img className='w-[150px] mt-7' src={navitems?.logo} alt="Logo" />
      </Link>

      <ApiFetch/>
      
     
      <div className='relative mt-7'>
        <FaShoppingCart onClick={handleClick} size={20} />
        {click && (
          <div className='absolute bg-white border shadow-md right-0 mt-2 py-2 w-80'>
            {products.map((product) => (
              <div key={product.id} className='flex items-center border-b py-2'>
                <img src={product.image} alt={product.name} className='w-16 h-16 object-contain' />
                <div className='ml-2 w-[75%]'>
                    <div className='flex justify-between gap-10'>
                        <p className='font-semibold text-[12px]'>{product.name}</p>
                        <p className='text-sm text-gray-500'>Price: ${product.price}</p>
                    </div>
        
                  <p className='text-xs text-gray-500'>{product.description}</p>
                </div>
              </div>
            ))}

            <div className='flex flex-col items-end justify-end p-2'>
                <h1>Total:</h1>
                <button className='bg-white text-gray-400 px-4 py-2 rounded-full border border-gray-300 hover:bg-green-500 hover:text-white transition duration-300 ease-in-out mt-2'>Checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
