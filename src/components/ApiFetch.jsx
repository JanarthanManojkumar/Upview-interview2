import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Axios from 'axios';
import { Appcontext } from '../App';


const fetchAnimeapi = async () => {
  try {
    const response = await Axios.get('https://my-json-server.typicode.com/kodplex/pr-re-ec-products/db');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const ApiFetch = () => {
 
 const{setProducts,setNavitems,products,navitems}=useContext(Appcontext)

  const { data, isLoading, isError, error } = useQuery('ecommerce', fetchAnimeapi, 
  {
    refetchOnWindowFocus:true
  });

  useEffect(() => {
    if (data && data.ecommerce && data.ecommerce.products) {
      setProducts(data.ecommerce.products);
    }

    if (data && data.ecommerce) {
      setNavitems(data.ecommerce);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <img src={product.image} alt={product.name} />
        </div>
      ))}

      {navitems && (
        <div>
          <h2>{navitems.name}</h2>
          <img src={navitems.logo} alt="E-commerce Logo" />
          <p>Currency Type: {navitems.currency.type}</p>
          <p>Currency Abbreviation: {navitems.currency.abb}</p>
        </div>
      )}
    </div>
  );
};
