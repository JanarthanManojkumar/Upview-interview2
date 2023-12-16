import React, { useContext, useState } from 'react';
import { Appcontext } from '../App';
import { FaEnvelope, FaTruck } from 'react-icons/fa';
import { StarRating } from './StarRating';

export const Preview = () => {
  const { products, setCart, cart, select } = useContext(Appcontext);
  
  const colors={
    color1:'https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studiopro-wireless/pdp/product-carousel/black/alt/black-01-studiopro.jpg.large.2x.jpg',
    color2:'https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studiopro-wireless/plp/plp-studiopro-deepbrown.jpg.large.2x.jpg',
    color3:'https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studiopro-wireless/plp/plp-studiopro-navy.jpg.large.2x.jpg',
    color4:'https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studiopro-wireless/plp/plp-studiopro-sandstone.jpg.large.2x.jpg'

  }
  
  const [image,setimage]=useState(colors.color1)
  const [counter,setcount]=useState(0)

  const handleonclick=()=>{

  }


  return (
    <div className='h-screen w-full mt-5'>

      <div className=' flex w-full h-full justify-center items-center p-2'>

        <div className='w-[50%] h-full flex flex-col p-1' >
         
          <div className='flex items-center justify-center py-2 bg-gray-200'>
            <img src={image} className='object-contain w-[500px] h-[500px]' alt="" />
          </div>

          <div className='flex justify-between w-full h-[150px] py-3 '>
            
            <div className='  h-full bg-gray-200 p-3'>
               <img src={colors.color1} className='object-contain w-[120px] h-full  bg-gray-200' alt="" />
            </div>

            <div className='w-[20%] bg-gray-200 p-3'>
               <img src={colors.color2} className='object-contain w-[120px] h-full  bg-gray-200' alt="" />
            </div>

            <div className='w-[20%] bg-gray-200 p-3'>
               <img src={colors.color3}  className='object-contain w-[120px] h-full  bg-gray-200' alt="" />
            </div>

            <div className='w-[20%] bg-gray-200 p-3'>
               <img src={colors.color4}  className='object-contain w-[120px] h-full  bg-gray-200' alt="" />
            </div>

           
            
          </div>
        </div>
       
       
 <div className='w-[50%] h-full px-9'>        
    
    <div className='h-full flex justify-between flex-col pb-8 '>
        
      <div>
          <h1 className='text-2xl text-bold'>{select.name}</h1>
            <p>{select.description}</p>
              <div className='text-4xl'>
                  <StarRating rating={select.rating}/>
              </div>
            <hr class="border my-4"></hr>
       </div>

       

          <div>
            <h1 className='text-2xl text-bold'>${select.price} or $99.00/month</h1>
            <p>Sugested payments with 6 month special finacing </p>
            <hr class="border my-4"></hr>
          </div>
          
          

          <div>
            <p className='text-2xl'>Choose a color</p>
            <div className='mt-2 flex w-[40%] justify-between p-2'>
              <button className='bg-red-500 p-5 rounded-full hover:scale-105 duration-100' onClick={()=>handleonclick(setimage(colors.color1))}></button>
              <button className='bg-green-500 p-5 rounded-full hover:scale-105 duration-100'onClick={()=>handleonclick(setimage(colors.color2))}></button>
              <button className='bg-blue-500 p-5 rounded-full hover:scale-105 duration-100'onClick={()=>handleonclick(setimage(colors.color3))}></button>
              <button className='bg-yellow-500 p-5 rounded-full hover:scale-105 duration-100'onClick={()=>handleonclick(setimage(colors.color4))}></button>
            </div>
            <hr class="border my-4"></hr>
          </div>

         

          <div className='flex w-[50%] justify-between'>
            <div className='flex items-center'>
            <button className='bg-gray-200 rounded-l-full px-3'onClick={() => { setcount((counter) => counter > 0 ? counter - 1 : counter);}}>-</button>
              <p className='bg-gray-200 px-3'>{counter}</p>
              <button className='bg-gray-200 rounded-r-full px-3' onClick={()=>{setcount(counter+1)}}>+</button>
            </div>

            <div>
                <p>Only 12 items left </p>
                <p>Dont miss it</p>
            </div>
         </div>

          <div>
            <div className='w-[60%] flex justify-between'>
              <button className=' py-2  px-8 bg-green-800 rounded-full text-white'>Buy Now</button>
              <button className=' py-2 px-8 rounded-full'>Add to cart</button>
            </div>
            <hr class="border my-4"></hr>
          </div>
        
        <div>
        
         <div className='flex my-4 mx-2'>

          <div className='w-10 pl-2 flex justify-start items-start'>
            <FaTruck size={25}/>
          </div>
          
          <div>
            <h1>Free Delivery</h1>
            <p><a href="">Enter Your postal code for delivery availablity</a></p>
          </div>
          
         </div>

         <div className='flex my-4 mx-2'>

          <div className='w-10 pl-2 flex justify-start items-start'>
            <FaEnvelope size={25}/>
          </div>

                <div>
                  <h1>Return the Delivery</h1>
                  <p><a href="">Free 30-days delivery return Details</a></p>
                </div>

          </div>

        
         </div>
       
        </div>
        </div>
      </div>

      
          
    </div>
  );
};

export default Preview;
