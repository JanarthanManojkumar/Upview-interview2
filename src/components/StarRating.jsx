import React from 'react'

export const StarRating = ({ rating }) => {
    
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
    

 
}
