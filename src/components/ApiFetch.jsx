import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Axios from 'axios';
import { Appcontext } from '../App';



const fetchSiteapi = async () => {
  try {
    const response = await Axios.get('https://my-json-server.typicode.com/kodplex/pr-re-ec-products/db');
       return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const ApiFetch = () => {
 
 const{setProducts,setNavitems,products,navitems}=useContext(Appcontext)

  const { data:sitedata, isLoading, isError, error } = useQuery('ecommerce', fetchSiteapi, 
  {
    refetchOnWindowFocus:true
  });

  useEffect(() => {
    if (sitedata && sitedata.ecommerce && sitedata.ecommerce.products) {
      setProducts(sitedata.ecommerce.products);
    }

    if (sitedata && sitedata.ecommerce) {
      setNavitems(sitedata.ecommerce);
    }
  }, [sitedata,setProducts,setNavitems]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {/* {products.map((product) => (
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
      )} */}
    </div>
  );
};
