"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const page = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://3000-firojahmed1313-test-aw239o7fsnc.ws-us109.gitpod.io/api/run');
      console.log(response.data.message);
      setData(response.data.message);
    };  
    fetchData();
  }, []);                                    
  return (
    <div>{data}</div>
  )
}

export default page