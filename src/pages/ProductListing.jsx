import React from 'react'
import {useEffect} from "react"
import Navbar from '../Components/Navbar'
import FilterBar from '../Components/FilterBar'
import axios from 'axios';
function ProductListing() {
  const getData = async () => {
    const data = await axios.get('/api/products');
    try{
      console.log(data.data.products);
    }
    catch{
      console.log("error")
    }
  }
  useEffect(() => {
    getData();
  });
  return (
    <div>
        <Navbar/>
        <FilterBar/>
    </div>
  )
}

export default ProductListing